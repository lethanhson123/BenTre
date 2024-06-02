using Data.Model;
using Microsoft.OpenApi.Models;
using static QRCoder.PayloadGenerator.ShadowSocksConfig;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Hosting;
using DocumentFormat.OpenXml.Wordprocessing;
using Service.Model;
using System.Net.Http.Headers;
using System.Net.Http;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ThanhVienThietBiController : BaseController<ThanhVienThietBi, IThanhVienThietBiService>
    {
        private readonly IThanhVienThietBiService _ThanhVienThietBiService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        public ThanhVienThietBiController(IThanhVienThietBiService ThanhVienThietBiService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienThietBiService, WebHostEnvironment)
        {
            _ThanhVienThietBiService = ThanhVienThietBiService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetOauthenToken")]
        public virtual async Task<string> GetOauthenToken()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                string path = Path.Combine(_WebHostEnvironment.WebRootPath, "GoogleFile","qlclbentre-78cd2-firebase-adminsdk-98cvp-74fd611efa.json");
                string accessToken = await AccessTokenGetter.GetAccessTokenAsync(path);

                string url = "https://fcm.googleapis.com/v1/projects/qlclbentre-78cd2/messages:send";
                var json = new {
                    message = new {
                        token= "fWDfjkvzQ22RR9Uv8mOh12:APA91bEYg6VUL-Z2r3UWuu4oJ4N3Z4wRfBL3Kia4TKg5mPdq2buvdQrtPSdsAsxyUJcM3Fo9tdrx4o63snNDCH-BQF8LwUerWZc808gZ-y_8GpJu2gdkezTHW_j5oQgiGdTCubTBMrtx",
                        name= "Thông báo",
                        notification= new
                        {
                            title = "Thông báo hệ thống",
                            body = $"[{DateTime.Now}] Ứng dụng COOP.66 đã có bản cập nhật mới, truy cập kho ứng dụng để cập nhật nhanh"
                        },
                        android = new
                        {
                            collapse_key="",
                            restricted_package_name="",
                            data = new
                            {
                                name= "Thông báo"
                            },
                            notification = new
                            {
                                title = "Thông báo hệ thống",
                                body = $"[{DateTime.Now}] Ứng dụng COOP.66 đã có bản cập nhật mới, truy cập kho ứng dụng để cập nhật nhanh",
                                click_action="",
                                channel_id=""
                            },
                        }
                    }
                };
                var content = new StringContent(JsonConvert.SerializeObject(json), Encoding.UTF8, "application/json");
                HttpClient client = new HttpClient();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                var task = client.PostAsync(url, content);
                string ressponse = await task.Result.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }

        [HttpPost]
        [Route("PushNotification")]
        public virtual async Task<int> PushNotification()
        {
            int result = GlobalHelper.InitializationNumber;
            try
            {
                ThanhVienThietBi model = JsonConvert.DeserializeObject<ThanhVienThietBi>(Request.Form["data"]);
                result = await _ThanhVienThietBiService.PushNotification(model);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
    }

    public class AccessTokenGetter
    {
        static public async Task<string> GetAccessTokenAsync(string keyFilePath)
        {
            try
            {
                var credential = GoogleCredential.FromFile(keyFilePath);
                var scopedCredential = credential.CreateScoped(SCOPES);
                var accessToken = await scopedCredential.UnderlyingCredential.GetAccessTokenForRequestAsync();

                return accessToken;
            }
            catch (Exception ex)
            {
                throw new Exception("Error retrieving access token", ex);
            }
        }

        // Define your SCOPES constant here
        //private const string SCOPES = "YOUR_SCOPES_HERE";
        private const string SCOPES = "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/firebase.messaging";
    }
}






