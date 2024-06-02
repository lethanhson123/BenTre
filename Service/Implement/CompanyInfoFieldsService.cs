namespace Service.Implement
{
	public class CompanyInfoFieldsService : BaseService<CompanyInfoFields, ICompanyInfoFieldsRepository>
	, ICompanyInfoFieldsService
	{
		private readonly ICompanyInfoFieldsRepository _CompanyInfoFieldsRepository;
		public CompanyInfoFieldsService(ICompanyInfoFieldsRepository CompanyInfoFieldsRepository) : base(CompanyInfoFieldsRepository)
		{
			_CompanyInfoFieldsRepository = CompanyInfoFieldsRepository;
		}

	}
}

