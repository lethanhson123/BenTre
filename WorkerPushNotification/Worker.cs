using Google.Apis.Auth.OAuth2;
using Newtonsoft.Json;
using static QRCoder.PayloadGenerator;
using System.Net.Http.Headers;
using System.Net.WebSockets;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using System;

namespace WorkerPushNotification
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IThanhVienLichSuThongBaoService _ThanhVienLichSuThongBaoService;
        public Worker(ILogger<Worker> logger

            , IThanhVienLichSuThongBaoService ThanhVienLichSuThongBaoService
        )
        {
            _logger = logger;

            _ThanhVienLichSuThongBaoService = ThanhVienLichSuThongBaoService;
        }
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                await PushNotification();
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                await Task.Delay(1000, stoppingToken);
            }
        }
        private async Task<bool> PushNotification()
        {
            string accessToken = await GetAccessTokenAsync();
            _logger.LogInformation($"accessToken: {accessToken}");

            var thanhVienLichSuThongBao = _ThanhVienLichSuThongBaoService.GetByCondition(x=>
                x.Active==false
                //&& x.DaGuiThongBao ==false
            ).OrderByDescending(x => x.ID).FirstOrDefault();

            if (thanhVienLichSuThongBao != null)
            {
                //DateTime dateSend = thanhVienLichSuThongBao.NgayGuiThongBao ?? DateTime.Now;
                //toi thoi gian moi gui
                //if ( (DateTime.Now - dateSend).TotalMilliseconds>0)
                {
                    string fcmToken = thanhVienLichSuThongBao.Code;
                    string title = thanhVienLichSuThongBao.Name;
                    string content = thanhVienLichSuThongBao.Description;
                    string image = thanhVienLichSuThongBao.FileName;
                    string json = await GetJsonSendPushNotification(title, content, fcmToken, image);
                    string projectID = GlobalHelper.FCMProjectID;
                    string url = $"https://fcm.googleapis.com/v1/projects/{projectID}/messages:send";
                    var body = new StringContent(json, Encoding.UTF8, "application/json");
                    HttpClient client = new HttpClient();
                    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                    var task = client.PostAsync(url, body);
                    string ressponse = await task.Result.Content.ReadAsStringAsync();
                    _logger.LogInformation($"PushNotification ressponse: {ressponse}");
                    //{ "name": "projects/qlclbentre-78cd2/messages/0:1713426346543570%f567f207f567f207" }
                    var ressponseFCM = JsonConvert.DeserializeObject<ReponseFCM>(ressponse);
                    if (!string.IsNullOrEmpty(ressponseFCM.name))
                    {
                        thanhVienLichSuThongBao.NgayNhanThongBao = DateTime.Now;
                        thanhVienLichSuThongBao.DaGuiThongBao = true;
                    }
                    long totalSend = thanhVienLichSuThongBao.SoLanGuiThongBao ?? 0;
                    thanhVienLichSuThongBao.SoLanGuiThongBao = totalSend + 1;
                    thanhVienLichSuThongBao.Note = ressponse;
                    thanhVienLichSuThongBao.Active = true;
                    await _ThanhVienLichSuThongBaoService.SaveAsync(thanhVienLichSuThongBao);
                }
            }

            
            return true;
        }
        
        private async Task<string> GetJsonSendPushNotification(string titleNotification, string contentNotification, string fcmToken,string imageNotification = "")
        {
            var json = new
            {
                message = new
                {
                    token = fcmToken,
                    name = "Thông báo",
                    notification = new
                    {
                        title = titleNotification,
                        body = $"[{DateTime.Now}] {contentNotification}",
                        image = imageNotification
                    },
                    android = new
                    {
                        collapse_key = "",
                        restricted_package_name = "",
                        data = new
                        {
                            name = "Thông báo"
                        },
                        notification = new
                        {
                            title = titleNotification,
                            body = $"[{DateTime.Now}] {contentNotification}",
                            image = imageNotification,
                            icon = imageNotification,
                            click_action = "",
                            channel_id = ""
                        },
                    }
                }
            };
            return JsonConvert.SerializeObject(json);
        }

        public async Task<string> GetAccessTokenAsync()
        {
            try
            {
                string keyFilePath = Path.Combine(Directory.GetCurrentDirectory(), "GoogleFile", GlobalHelper.FCMFileJSON);
                var credential = GoogleCredential.FromFile(keyFilePath);
                string SCOPES = "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/firebase.messaging";
                var scopedCredential = credential.CreateScoped(SCOPES);
                var accessToken = await scopedCredential.UnderlyingCredential.GetAccessTokenForRequestAsync();

                return accessToken;
            }
            catch (Exception ex)
            {
                throw new Exception("Error retrieving access token", ex);
            }
        }

        public class ReponseFCM
        {
            public string? name { get; set; }    
        }
    }
}
