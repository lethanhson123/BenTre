namespace Service.Implement
{
    public class CompanyGroupService : BaseService<CompanyGroup, ICompanyGroupRepository>
    , ICompanyGroupService
    {
    private readonly ICompanyGroupRepository _CompanyGroupRepository;
    public CompanyGroupService(ICompanyGroupRepository CompanyGroupRepository) : base(CompanyGroupRepository)
    {
    _CompanyGroupRepository = CompanyGroupRepository;
    }
    }
    }

