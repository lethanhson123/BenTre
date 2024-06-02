using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class RegisterHarvestItemsController : BaseController<RegisterHarvestItems, IRegisterHarvestItemsService>
    {
        private readonly IRegisterHarvestItemsService _RegisterHarvestItemsService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public RegisterHarvestItemsController(IRegisterHarvestItemsService RegisterHarvestItemsService, IWebHostEnvironment WebHostEnvironment) : base(RegisterHarvestItemsService, WebHostEnvironment)
        {
            _RegisterHarvestItemsService = RegisterHarvestItemsService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("SaveAndUploadFiles001Async")]
        public virtual async Task<RegisterHarvestItems> SaveAndUploadFiles001Async()
        {
            RegisterHarvestItems model=new RegisterHarvestItems ();
            try
            {
                model = JsonConvert.DeserializeObject<RegisterHarvestItems>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        model.FileName = model.GetType().Name + "_" + model.ID + "_" + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                        bool isFolderExists = System.IO.Directory.Exists(folderPath);
                        if (!isFolderExists)
                        {
                            System.IO.Directory.CreateDirectory(folderPath);
                        }
                        var physicalPath = Path.Combine(folderPath, model.FileName);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                            model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;
                        }
                    }
                }
                if (Request.Form.Files.Count > 1)
                {
                    var file = Request.Form.Files[1];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        model.FileName001 = model.GetType().Name + "_" + model.ID + "_" + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                        bool isFolderExists = System.IO.Directory.Exists(folderPath);
                        if (!isFolderExists)
                        {
                            System.IO.Directory.CreateDirectory(folderPath);
                        }
                        var physicalPath = Path.Combine(folderPath, model.FileName001);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                            model.FileName001 = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName001;
                        }
                    }
                }              
                
                await _RegisterHarvestItemsService.SaveAsync(model);
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            return model;
        }
    }
}

