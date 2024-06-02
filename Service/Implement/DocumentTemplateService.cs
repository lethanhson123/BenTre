using Service.Interface;
using System.Runtime.InteropServices;

namespace Service.Implement
{
    public class DocumentTemplateService : BaseService<DocumentTemplate, IDocumentTemplateRepository>
    , IDocumentTemplateService
    {
        private readonly IDocumentTemplateRepository _DocumentTemplateRepository;
        public DocumentTemplateService(IDocumentTemplateRepository DocumentTemplateRepository) : base(DocumentTemplateRepository)
        {
            _DocumentTemplateRepository = DocumentTemplateRepository;
        }
        public override void Initialization(DocumentTemplate model)
        {
            BaseInitialization(model);
            if (!string.IsNullOrEmpty(model.HTMLContent))
            {
                model.HTMLContent = model.HTMLContent.Replace(@"font-family:VNI-Times", "");
                model.HTMLContent = model.HTMLContent.Replace(@"</body>", "");
                model.HTMLContent = model.HTMLContent.Replace(@"</html>", "");
                model.HTMLContent = model.HTMLContent.Replace(@"<meta charset=""utf-8"" />", "");
                model.HTMLContent = model.HTMLContent + "</body>";
                model.HTMLContent = model.HTMLContent + "</html>";                
            }         
            
            model.Active = false;
        }
    }
}

