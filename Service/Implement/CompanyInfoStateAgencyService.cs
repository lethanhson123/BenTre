namespace Service.Implement
{
    public class CompanyInfoStateAgencyService : BaseService<CompanyInfoStateAgency, ICompanyInfoStateAgencyRepository>
    , ICompanyInfoStateAgencyService
    {
    private readonly ICompanyInfoStateAgencyRepository _CompanyInfoStateAgencyRepository;
    public CompanyInfoStateAgencyService(ICompanyInfoStateAgencyRepository CompanyInfoStateAgencyRepository) : base(CompanyInfoStateAgencyRepository)
    {
    _CompanyInfoStateAgencyRepository = CompanyInfoStateAgencyRepository;
    }
    }
    }

