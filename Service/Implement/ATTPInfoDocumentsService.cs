using Service.Interface;

namespace Service.Implement
{
	public class ATTPInfoDocumentsService : BaseService<ATTPInfoDocuments, IATTPInfoDocumentsRepository>
	, IATTPInfoDocumentsService
	{
		private readonly IATTPInfoDocumentsRepository _ATTPInfoDocumentsRepository;

		private readonly IDocumentTemplateService _DocumentTemplateService;
		public ATTPInfoDocumentsService(IATTPInfoDocumentsRepository ATTPInfoDocumentsRepository

			, IDocumentTemplateService documentTemplateService

			) : base(ATTPInfoDocumentsRepository)
		{
			_ATTPInfoDocumentsRepository = ATTPInfoDocumentsRepository;


			_DocumentTemplateService = documentTemplateService;
		}
		public override async Task<List<ATTPInfoDocuments>> GetBySearchStringToListAsync(string searchString)
		{
			List<ATTPInfoDocuments> result = new List<ATTPInfoDocuments>();
			try
			{
				result = await _ATTPInfoDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
				if (result.Count == 0)
				{
					List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(GlobalHelper.PlanTypeIDDangKyATTP);
					foreach (DocumentTemplate itemDocumentTemplate in listDocumentTemplate)
					{
						ATTPInfoDocuments aTTPInfoDocuments = new ATTPInfoDocuments();
						aTTPInfoDocuments.Code = searchString;
						aTTPInfoDocuments.Name = itemDocumentTemplate.Name;
						aTTPInfoDocuments.Description = itemDocumentTemplate.FileName;
						aTTPInfoDocuments.DocumentTemplateID = itemDocumentTemplate.ID;
						Save(aTTPInfoDocuments);
					}
					result = await _ATTPInfoDocumentsRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
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

