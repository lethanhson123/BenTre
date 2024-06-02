namespace Service.Implement
{
    public class CompanyFieldsService : BaseService<CompanyFields, ICompanyFieldsRepository>
    , ICompanyFieldsService
    {
    private readonly ICompanyFieldsRepository _CompanyFieldsRepository;
    public CompanyFieldsService(ICompanyFieldsRepository CompanyFieldsRepository) : base(CompanyFieldsRepository)
    {
    _CompanyFieldsRepository = CompanyFieldsRepository;
    }
    }
    }

