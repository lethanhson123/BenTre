using OpenXmlPowerTools;
using SautinSoft;
using System.Text;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DocumentTemplateController : BaseController<DocumentTemplate, IDocumentTemplateService>
    {
        private readonly IDocumentTemplateService _DocumentTemplateService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public DocumentTemplateController(IDocumentTemplateService DocumentTemplateService, IWebHostEnvironment WebHostEnvironment) : base(DocumentTemplateService, WebHostEnvironment)
        {
            _DocumentTemplateService = DocumentTemplateService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("CovertAsync")]
        public virtual async Task<string> CovertAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
                var collection = client.GetDatabase("bentredb").GetCollection<document_template>("document_template");
                var filter = Builders<document_template>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<document_template> list = document.ToList();
                    foreach (var item in list)
                    {
                        DocumentTemplate itemSave = new DocumentTemplate();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.title;
                        itemSave.plan_type_id = item.plan_type_id;
                        itemSave.file_path = item.file_path;
                        itemSave.Description = item.descriptions;
                        if (item.file_upload != null)
                        {
                            itemSave.file_name = item.file_upload.file_name;
                            itemSave.file_id = item.file_upload.file_id;
                            itemSave.file_path = item.file_upload.file_path;
                            itemSave.server_upload = item.file_upload.server_upload;
                            itemSave.provider = item.file_upload.provider;
                            itemSave.size_kb = item.file_upload.size_kb;
                            itemSave.document_type = item.file_upload.document_type;
                            itemSave.mine_type = item.file_upload.mine_type;
                            itemSave.ext = item.file_upload.ext;
                        }

                        await _DocumentTemplateService.SaveAsync(itemSave);
                        if (itemSave.ID > 0)
                        {
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

        [HttpPost]
        [Route("SaveAndUploadFileAsync")]
        public override async Task<DocumentTemplate> SaveAndUploadFileAsync()
        {
            DocumentTemplate model = JsonConvert.DeserializeObject<DocumentTemplate>(Request.Form["data"]);
            try
            {
                string folderPath = GlobalHelper.InitializationString;
                string physicalPath = GlobalHelper.InitializationString;
                bool isFolderExists = GlobalHelper.InitializationBool;
                try
                {
                    if (Request.Form.Files.Count > 0)
                    {
                        var file = Request.Form.Files[0];
                        if (file == null || file.Length == 0)
                        {
                        }
                        if (file != null)
                        {
                            string fileExtension = Path.GetExtension(file.FileName);
                            model.FileName = model.GetType().Name + "_" + model.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                            folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                            isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            physicalPath = Path.Combine(folderPath, model.FileName);
                            using (var stream = new FileStream(physicalPath, FileMode.Create))
                            {
                                file.CopyTo(stream);
                                model.Display = model.FileName;
                                model.TypeName = physicalPath.Replace(_WebHostEnvironment.WebRootPath, "");
                                model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;

                            }

                            byte[] byteArray = System.IO.File.ReadAllBytes(physicalPath);
                            using (MemoryStream stream = new MemoryStream())
                            {
                                stream.Write(byteArray, 0, (int)byteArray.Length);
                                using (WordprocessingDocument doc = WordprocessingDocument.Open(stream, true))
                                {

                                    HtmlConverterSettings settings = new HtmlConverterSettings()
                                    {
                                        PageTitle = model.Name,
                                    };
                                    XElement html = HtmlConverter.ConvertToHtml(doc, settings);

                                    model.HTMLContent = html.ToStringNewLineOnAttributes();

                                    HtmlAgilityPack.HtmlDocument document = new HtmlAgilityPack.HtmlDocument();
                                    document.LoadHtml(model.HTMLContent);
                                    var nodes = document.DocumentNode.SelectNodes("//body");
                                    foreach (var node in nodes)
                                    {
                                        model.HTMLContent = node.OuterHtml;
                                    }
                                    model.HTMLContent = model.HTMLContent.Replace(@"<body", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</body>", @"<p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<div", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</div>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h1", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h1>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h2", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h2>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h3", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h3>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h4", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h4>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h5", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h5>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<h6", @"<p");
                                    model.HTMLContent = model.HTMLContent.Replace(@"</h6>", @"</p>");
                                    model.HTMLContent = model.HTMLContent.Replace(@"<table", @"<table class=""border""");
                                }
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    string mes = e.Message;
                }
                if (string.IsNullOrEmpty(model.HTMLContent))
                {
                    model.HTMLContent = GlobalHelper.InitializationString;
                }
                if (model.HTMLContent.Contains(GlobalHelper.StateAgencyParentName) == false)
                {
                    if (model.Active == true)
                    {
                        string HTMLContent = GlobalHelper.InitializationString;
                        var physicalPathRead = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, GlobalHelper.BieuMauFileName);
                        using (FileStream fs = new FileStream(physicalPathRead, FileMode.Open))
                        {
                            using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                            {
                                HTMLContent = r.ReadToEnd();
                            }
                        }
                        model.HTMLContent = HTMLContent.Replace(GlobalHelper.MainContent, model.HTMLContent);
                        model.HTMLContent = model.HTMLContent.Replace(GlobalHelper.PageTitle, model.Name);
                    }
                }

                model.Code = model.GetType().Name + "_" + model.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                physicalPath = Path.Combine(folderPath, model.Code);
                isFolderExists = System.IO.Directory.Exists(folderPath);
                if (!isFolderExists)
                {
                    System.IO.Directory.CreateDirectory(folderPath);
                }
                using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(model.HTMLContent);
                        model.Code = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.Code;
                    }
                }
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            await _DocumentTemplateService.SaveAsync(model);
            return model;
        }
    }
}

