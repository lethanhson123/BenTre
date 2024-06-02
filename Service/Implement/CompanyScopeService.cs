namespace Service.Implement
{
    public class CompanyScopeService : BaseService<CompanyScope, ICompanyScopeRepository>
    , ICompanyScopeService
    {
    private readonly ICompanyScopeRepository _CompanyScopeRepository;
    public CompanyScopeService(ICompanyScopeRepository CompanyScopeRepository) : base(CompanyScopeRepository)
    {
    _CompanyScopeRepository = CompanyScopeRepository;
    }
    }
    }

