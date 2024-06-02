using API.Model;
using Data.Model;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CamKetController : BaseController<CamKet17, ICamKet17Service>
    {
        private readonly ICamKet17Service _CamKet17Service;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly IDocumentTemplateService _DocumentTemplateService;
        public CamKetController(ICamKet17Service CamKet17Service
            , IWebHostEnvironment WebHostEnvironment

            , IStateAgencyService StateAgencyService
            , IDocumentTemplateService DocumentTemplateService
            ) : base(CamKet17Service, WebHostEnvironment)
        {
            _CamKet17Service = CamKet17Service;
            _WebHostEnvironment = WebHostEnvironment;

            _StateAgencyService = StateAgencyService;
            _DocumentTemplateService = DocumentTemplateService;
        }
        [HttpPost]
        [Route("CovertAsync")]
        public virtual async Task<string> CovertAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
                var collection = client.GetDatabase("bentredb").GetCollection<cam_ket17>("cam_ket17");
                var filter = Builders<cam_ket17>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<cam_ket17> list = document.ToList();
                    foreach (var item in list)
                    {
                        CamKet17 itemSave = new CamKet17();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.name;
                        itemSave.province_id = item.province_id;
                        itemSave.district_id = item.district_id;
                        itemSave.ward_id = item.ward_id;
                        itemSave.hamlet = item.hamlet;
                        itemSave.address = item.address;
                        itemSave.fullname = item.fullname;
                        itemSave.email = item.email;
                        itemSave.phone = item.phone;
                        itemSave.month_number = item.month_number;
                        itemSave.year_number = item.year_number;
                        itemSave.Note = item.notes;
                        itemSave.status_id = item.status_id;
                        itemSave.agency_id = item.agency_id;
                        itemSave.agency_user_id = item.agency_user_id;
                        if (item.file_camket != null)
                        {
                            var itemDocument = item.file_camket;
                            itemSave.file_name = itemDocument.file_name;
                            itemSave.file_id = itemDocument.file_id;
                            itemSave.file_path = itemDocument.file_path;
                            itemSave.server_upload = itemDocument.server_upload;
                            itemSave.provider = itemDocument.provider;
                            itemSave.size_kb = itemDocument.size_kb;
                            itemSave.document_name = itemDocument.document_name;
                            itemSave.document_type = itemDocument.document_type;
                            itemSave.mine_type = itemDocument.mine_type;
                            itemSave.ext = itemDocument.ext;
                        }
                        await _CamKet17Service.SaveAsync(itemSave);
                        if (itemSave.ID > 0)
                        {
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("SaveAsync")]
        public override async Task<CamKet17> SaveAsync()
        {
            CamKet17 result = new CamKet17();
            try
            {
                result = JsonConvert.DeserializeObject<CamKet17>(Request.Form["data"]);
                result = await _CamKet17Service.SaveAsync(result);
                if (result.ID > 0)
                {
                    await DocumentTemplate45(result);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        private async Task<CamKet17> DocumentTemplate45(CamKet17 result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(45);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(GlobalHelper.StateAgencyID);
                    StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                    result.HTMLContent = documentTemplate.HTMLContent;

                    result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                    result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                    result.HTMLContent = result.HTMLContent.Replace(@"[Nam]", result.Nam.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[Thang]", result.Thang.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[TongSo]", result.DonViToChucCount.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[ThangLuyKe]", result.DonViToChucCountThangLuyKe.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[ThangLuyKeKiemTra]", result.DonViToChucCountThangLuyKeKiemTra.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[ThangLuyKeKiemTraChuaDat]", result.DonViToChucCountThangLuyKeKiemTraChuaDat.Value.ToString());
                    result.HTMLContent = result.HTMLContent.Replace(@"[Note]", result.Note);

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;

                    await _CamKet17Service.SaveAsync(result);
                }
            }
            return result;
        }
    }
}

