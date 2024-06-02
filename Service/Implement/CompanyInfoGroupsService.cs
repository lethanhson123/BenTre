namespace Service.Implement
{
	public class CompanyInfoGroupsService : BaseService<CompanyInfoGroups, ICompanyInfoGroupsRepository>
	, ICompanyInfoGroupsService
	{
		private readonly ICompanyInfoGroupsRepository _CompanyInfoGroupsRepository;
		public CompanyInfoGroupsService(ICompanyInfoGroupsRepository CompanyInfoGroupsRepository) : base(CompanyInfoGroupsRepository)
		{
			_CompanyInfoGroupsRepository = CompanyInfoGroupsRepository;
		}
	}
}

