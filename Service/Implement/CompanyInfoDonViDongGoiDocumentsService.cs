using Service.Interface;
using System.Collections.Generic;

namespace Service.Implement
{
    public class CompanyInfoDonViDongGoiDocumentsService : BaseService<CompanyInfoDonViDongGoiDocuments, ICompanyInfoDonViDongGoiDocumentsRepository>
    , ICompanyInfoDonViDongGoiDocumentsService
    {
        private readonly ICompanyInfoDonViDongGoiDocumentsRepository _CompanyInfoDonViDongGoiDocumentsRepository;

        private readonly IDocumentTemplateService _DocumentTemplateService;

        public CompanyInfoDonViDongGoiDocumentsService(ICompanyInfoDonViDongGoiDocumentsRepository CompanyInfoDonViDongGoiDocumentsRepository
            , IDocumentTemplateService DocumentTemplateService
        ) : base(CompanyInfoDonViDongGoiDocumentsRepository)
        {
            _CompanyInfoDonViDongGoiDocumentsRepository = CompanyInfoDonViDongGoiDocumentsRepository;

            _DocumentTemplateService = DocumentTemplateService;
        }
        public override async Task<List<CompanyInfoDonViDongGoiDocuments>> GetBySearchStringToListAsync(string searchString)
        {
            List<CompanyInfoDonViDongGoiDocuments> result = new List<CompanyInfoDonViDongGoiDocuments>();
            try
            {
                result = await _CompanyInfoDonViDongGoiDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                if (result.Count == 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(GlobalHelper.PlanTypeIDDangKyMaDongGoi);
                    foreach (DocumentTemplate itemDocumentTemplate in listDocumentTemplate)
                    {
                        CompanyInfoDonViDongGoiDocuments CompanyInfoDonViDongGoiDocuments = new CompanyInfoDonViDongGoiDocuments();
                        CompanyInfoDonViDongGoiDocuments.Code = searchString;
                        CompanyInfoDonViDongGoiDocuments.Name = itemDocumentTemplate.Name;
                        CompanyInfoDonViDongGoiDocuments.FileName = itemDocumentTemplate.FileName;
                        if (!string.IsNullOrEmpty(itemDocumentTemplate.FileName) && !itemDocumentTemplate.FileName.Contains(".xls") && !itemDocumentTemplate.FileName.Contains(".xlsx"))
                            CompanyInfoDonViDongGoiDocuments.Display = itemDocumentTemplate.FileName;
                        CompanyInfoDonViDongGoiDocuments.DocumentTemplateID = itemDocumentTemplate.ID;
                        CompanyInfoDonViDongGoiDocuments.Active = itemDocumentTemplate.Active;
                        Save(CompanyInfoDonViDongGoiDocuments);
                    }
                    result = await _CompanyInfoDonViDongGoiDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }

        public override async Task<List<CompanyInfoDonViDongGoiDocuments>> GetBySearchStringAndEmptyToListAsync(string searchString)
        {
            List<CompanyInfoDonViDongGoiDocuments> result = new List<CompanyInfoDonViDongGoiDocuments>();
            try
            {
                CompanyInfoDonViDongGoiDocuments empty = new CompanyInfoDonViDongGoiDocuments();
                result.Add(empty);
                List<CompanyInfoDonViDongGoiDocuments> list = await _CompanyInfoDonViDongGoiDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                if (list.Count == 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(GlobalHelper.PlanTypeIDDangKyMaDongGoi);
                    foreach (DocumentTemplate itemDocumentTemplate in listDocumentTemplate)
                    {
                        CompanyInfoDonViDongGoiDocuments CompanyInfoDonViDongGoiDocuments = new CompanyInfoDonViDongGoiDocuments();
                        CompanyInfoDonViDongGoiDocuments.Code = searchString;
                        CompanyInfoDonViDongGoiDocuments.Name = itemDocumentTemplate.Name;
                        CompanyInfoDonViDongGoiDocuments.FileName = itemDocumentTemplate.FileName;
                        if(!string.IsNullOrEmpty(itemDocumentTemplate.FileName) && !itemDocumentTemplate.FileName.Contains(".xls") && !itemDocumentTemplate.FileName.Contains(".xlsx")) 
                            CompanyInfoDonViDongGoiDocuments.Display = itemDocumentTemplate.FileName;
                        CompanyInfoDonViDongGoiDocuments.DocumentTemplateID = itemDocumentTemplate.ID;
                        CompanyInfoDonViDongGoiDocuments.Active = itemDocumentTemplate.Active;
                        Save(CompanyInfoDonViDongGoiDocuments);
                    }
                    list = await _CompanyInfoDonViDongGoiDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();

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

