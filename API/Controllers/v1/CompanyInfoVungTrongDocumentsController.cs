using Service.Implement;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoVungTrongDocumentsController : BaseController<CompanyInfoVungTrongDocuments, ICompanyInfoVungTrongDocumentsService>
    {
        private readonly ICompanyInfoVungTrongDocumentsService _CompanyInfoVungTrongDocumentsService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IDocumentTemplateService _DocumentTemplateService;
        public CompanyInfoVungTrongDocumentsController(ICompanyInfoVungTrongDocumentsService CompanyInfoVungTrongDocumentsService, IWebHostEnvironment WebHostEnvironment

            , IDocumentTemplateService DocumentTemplateService

        ) : base(CompanyInfoVungTrongDocumentsService, WebHostEnvironment)
        {
            _CompanyInfoVungTrongDocumentsService = CompanyInfoVungTrongDocumentsService;
            _WebHostEnvironment = WebHostEnvironment;

            _DocumentTemplateService = DocumentTemplateService;
        }
        public override async Task<CompanyInfoVungTrongDocuments> GetByIDAsync()
        {
            CompanyInfoVungTrongDocuments result = new CompanyInfoVungTrongDocuments();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoVungTrongDocumentsService.GetByIDAsync(baseParameter.ID);
                if (result.ID > 0)
                {
                    if (string.IsNullOrEmpty(result.HTMLContent))
                    {
                        await GetContent(result);
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }


        private async Task<CompanyInfoVungTrongDocuments> GetContent(CompanyInfoVungTrongDocuments result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }
                }

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


            }
            return result;
        }
    }
}

