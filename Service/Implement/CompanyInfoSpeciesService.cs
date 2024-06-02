namespace Service.Implement
{
    public class CompanyInfoSpeciesService : BaseService<CompanyInfoSpecies, ICompanyInfoSpeciesRepository>
    , ICompanyInfoSpeciesService
    {
    private readonly ICompanyInfoSpeciesRepository _CompanyInfoSpeciesRepository;
    public CompanyInfoSpeciesService(ICompanyInfoSpeciesRepository CompanyInfoSpeciesRepository) : base(CompanyInfoSpeciesRepository)
    {
    _CompanyInfoSpeciesRepository = CompanyInfoSpeciesRepository;
    }
    }
    }

