using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoVungTrongDocumentsService : BaseService<CompanyInfoVungTrongDocuments, ICompanyInfoVungTrongDocumentsRepository>
    , ICompanyInfoVungTrongDocumentsService
    {
        private readonly ICompanyInfoVungTrongDocumentsRepository _CompanyInfoVungTrongDocumentsRepository;

        private readonly IDocumentTemplateService _DocumentTemplateService;
        public CompanyInfoVungTrongDocumentsService(ICompanyInfoVungTrongDocumentsRepository CompanyInfoVungTrongDocumentsRepository

            , IDocumentTemplateService DocumentTemplateService

        ) : base(CompanyInfoVungTrongDocumentsRepository)
        {
            _CompanyInfoVungTrongDocumentsRepository = CompanyInfoVungTrongDocumentsRepository;

            _DocumentTemplateService = DocumentTemplateService;
        }
        public override async Task<List<CompanyInfoVungTrongDocuments>> GetBySearchStringToListAsync(string searchString)
        {
            List<CompanyInfoVungTrongDocuments> result = new List<CompanyInfoVungTrongDocuments>();
            try
            {
                result = await _CompanyInfoVungTrongDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                if (result.Count == 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(GlobalHelper.PlanTypeIDDangKyMaVungTrong);
                    foreach (DocumentTemplate itemDocumentTemplate in listDocumentTemplate)
                    {
                        CompanyInfoVungTrongDocuments companyInfoVungTrongDocuments = new CompanyInfoVungTrongDocuments();
                        companyInfoVungTrongDocuments.Code = searchString;
                        companyInfoVungTrongDocuments.Name = itemDocumentTemplate.Name;
                        companyInfoVungTrongDocuments.FileName = itemDocumentTemplate.FileName;
                        if (!string.IsNullOrEmpty(itemDocumentTemplate.FileName) && !itemDocumentTemplate.FileName.Contains(".xls") && !itemDocumentTemplate.FileName.Contains(".xlsx"))
                            companyInfoVungTrongDocuments.Display = itemDocumentTemplate.FileName;
                        companyInfoVungTrongDocuments.DocumentTemplateID = itemDocumentTemplate.ID;
                        companyInfoVungTrongDocuments.Active = itemDocumentTemplate.Active;
                        Save(companyInfoVungTrongDocuments);
                    }
                    result = await _CompanyInfoVungTrongDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }

        public override async Task<List<CompanyInfoVungTrongDocuments>> GetBySearchStringAndEmptyToListAsync(string searchString)
        {
            List<CompanyInfoVungTrongDocuments> result = new List<CompanyInfoVungTrongDocuments>();
            try
            {
                CompanyInfoVungTrongDocuments empty = new CompanyInfoVungTrongDocuments();
                result.Add(empty);
                List<CompanyInfoVungTrongDocuments> list = await _CompanyInfoVungTrongDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                if (list.Count == 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(GlobalHelper.PlanTypeIDDangKyMaVungTrong);
                    var listDocumentTemplateStr = JsonConvert.SerializeObject(listDocumentTemplate);    
                    foreach (DocumentTemplate itemDocumentTemplate in listDocumentTemplate)
                    {
                        if (string.IsNullOrEmpty(itemDocumentTemplate.FileName)) {
                            itemDocumentTemplate.FileName = itemDocumentTemplate.FileName;
                        }
                        CompanyInfoVungTrongDocuments companyInfoDonViDongGoiDocuments = new CompanyInfoVungTrongDocuments();
                        companyInfoDonViDongGoiDocuments.Code = searchString;
                        companyInfoDonViDongGoiDocuments.Name = itemDocumentTemplate.Name;
                        companyInfoDonViDongGoiDocuments.FileName = itemDocumentTemplate.FileName;
                        if (!string.IsNullOrEmpty(itemDocumentTemplate.FileName) &&  !itemDocumentTemplate.FileName.Contains(".xls") && !itemDocumentTemplate.FileName.Contains(".xlsx"))
                            companyInfoDonViDongGoiDocuments.Display = itemDocumentTemplate.FileName;
                        companyInfoDonViDongGoiDocuments.DocumentTemplateID = itemDocumentTemplate.ID;
                        companyInfoDonViDongGoiDocuments.Active = itemDocumentTemplate.Active;
                        Save(companyInfoDonViDongGoiDocuments);
                    }
                    list = await _CompanyInfoVungTrongDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();

                    if (list.Count > 0)
                    {
                        result.AddRange(list);
                    }
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
    }
}

