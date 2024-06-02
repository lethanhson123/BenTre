using API.Model;
using Data.Model;
using Service.Implement;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class RegisterCoSoNuoiController : BaseController<RegisterCoSoNuoi, IRegisterCoSoNuoiService>
    {
        private readonly IRegisterCoSoNuoiService _RegisterCoSoNuoiService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IRegisterCoSoNuoiLakesService _RegisterCoSoNuoiLakesService;
        private readonly IRegisterCoSoNuoiDocumentsService _RegisterCoSoNuoiDocumentsService;

        public RegisterCoSoNuoiController(
            IRegisterCoSoNuoiService RegisterCoSoNuoiService
            , IWebHostEnvironment WebHostEnvironment

            , IRegisterCoSoNuoiLakesService RegisterCoSoNuoiLakesService
            , IRegisterCoSoNuoiDocumentsService RegisterCoSoNuoiDocumentsService
            ) : base(RegisterCoSoNuoiService, WebHostEnvironment)

        {
            _RegisterCoSoNuoiService = RegisterCoSoNuoiService;
            _WebHostEnvironment = WebHostEnvironment;

            _RegisterCoSoNuoiLakesService = RegisterCoSoNuoiLakesService;
            _RegisterCoSoNuoiDocumentsService = RegisterCoSoNuoiDocumentsService;
        }
        [HttpPost]
        [Route("CovertAsync")]
        public virtual async Task<string> CovertAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
                var collection = client.GetDatabase("bentredb").GetCollection<register_cosonuoi>("register_cosonuoi");
                var filter = Builders<register_cosonuoi>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<register_cosonuoi> list = document.ToList();
                    foreach (var item in list)
                    {
                        RegisterCoSoNuoi itemSave = new RegisterCoSoNuoi();
                        itemSave.uid = item.uid;
                        itemSave.company_id = item.company_id;
                        itemSave.Code = item.code;
                        itemSave.status_id = item.status_id;
                        itemSave.hinhthucnuoi = item.hinhthucnuoi;
                        itemSave.hinhthucnuoi_name = item.hinhthucnuoi_name;
                        itemSave.acreage_cs = item.acreage_cs;
                        itemSave.acreage_nuoi = item.acreage_nuoi;
                        itemSave.unit_id = item.unit_id;
                        itemSave.unit_name = item.unit_name;
                        itemSave.approve_note = item.approve_note;
                        itemSave.notify_content = item.notify_content;
                        itemSave.CreatedDate = item.create_on;
                        itemSave.LastUpdatedDate = item.modify_on;

                        if (item.file_xacnhan != null)
                        {
                            itemSave.file_name = item.file_xacnhan.file_name;
                            itemSave.file_id = item.file_xacnhan.file_id;
                            itemSave.file_path = item.file_xacnhan.file_path;
                            itemSave.server_upload = item.file_xacnhan.server_upload;
                            itemSave.provider = item.file_xacnhan.provider;
                            itemSave.size_kb = item.file_xacnhan.size_kb;
                            itemSave.document_name = item.file_xacnhan.document_name;
                            itemSave.document_type = item.file_xacnhan.document_type;
                            itemSave.mine_type = item.file_xacnhan.mine_type;
                            itemSave.ext = item.file_xacnhan.ext;
                        }

                        await _RegisterCoSoNuoiService.SaveAsync(itemSave);
                        if (itemSave.ID > 0)
                        {

                            if (item.lakes != null)
                            {
                                foreach (var register_cosonuoi_lakes in item.lakes)
                                {
                                    RegisterCoSoNuoiLakes registerCoSoNuoiLakes = new RegisterCoSoNuoiLakes();
                                    registerCoSoNuoiLakes.ParentID = itemSave.ID;
                                    registerCoSoNuoiLakes.acreage = register_cosonuoi_lakes.acreage;
                                    registerCoSoNuoiLakes.unit_id = register_cosonuoi_lakes.unit_id;
                                    registerCoSoNuoiLakes.unit_name = register_cosonuoi_lakes.unit_name;
                                    registerCoSoNuoiLakes.Name = register_cosonuoi_lakes.name;
                                    registerCoSoNuoiLakes.Code = register_cosonuoi_lakes.code;
                                    registerCoSoNuoiLakes.latitude = register_cosonuoi_lakes.latitude;
                                    registerCoSoNuoiLakes.longitude = register_cosonuoi_lakes.longitude;
                                    registerCoSoNuoiLakes.type_id = register_cosonuoi_lakes.type_id;
                                    registerCoSoNuoiLakes.district_id = register_cosonuoi_lakes.district_id;
                                    registerCoSoNuoiLakes.ward_id = register_cosonuoi_lakes.ward_id;
                                    registerCoSoNuoiLakes.hamlet = register_cosonuoi_lakes.hamlet;
                                    registerCoSoNuoiLakes.address = register_cosonuoi_lakes.address;
                                    registerCoSoNuoiLakes.species_id = register_cosonuoi_lakes.species_id;
                                    registerCoSoNuoiLakes.species_name = register_cosonuoi_lakes.species_name;
                                    registerCoSoNuoiLakes.uid = register_cosonuoi_lakes.uid;
                                    await _RegisterCoSoNuoiLakesService.SaveAsync(registerCoSoNuoiLakes);
                                }
                            }

                            if (item.documents != null)
                            {
                                foreach (var itemDocument in item.documents)
                                {
                                    RegisterCoSoNuoiDocuments registerCoSoNuoiDocuments = new RegisterCoSoNuoiDocuments();
                                    registerCoSoNuoiDocuments.ParentID = itemSave.ID;
                                    registerCoSoNuoiDocuments.file_name = itemDocument.file_name;
                                    registerCoSoNuoiDocuments.file_id = itemDocument.file_id;
                                    registerCoSoNuoiDocuments.file_path = itemDocument.file_path;
                                    registerCoSoNuoiDocuments.server_upload = itemDocument.server_upload;
                                    registerCoSoNuoiDocuments.provider = itemDocument.provider;
                                    registerCoSoNuoiDocuments.size_kb = itemDocument.size_kb;
                                    registerCoSoNuoiDocuments.document_name = itemDocument.document_name;
                                    registerCoSoNuoiDocuments.document_type = itemDocument.document_type;
                                    registerCoSoNuoiDocuments.mine_type = itemDocument.mine_type;
                                    registerCoSoNuoiDocuments.ext = itemDocument.ext;
                                    await _RegisterCoSoNuoiDocumentsService.SaveAsync(registerCoSoNuoiDocuments);
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return result;
        }
    }
}

