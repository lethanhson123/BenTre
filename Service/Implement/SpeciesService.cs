namespace Service.Implement
{
    public class SpeciesService : BaseService<Species, ISpeciesRepository>
    , ISpeciesService
    {
    private readonly ISpeciesRepository _SpeciesRepository;
    public SpeciesService(ISpeciesRepository SpeciesRepository) : base(SpeciesRepository)
    {
    _SpeciesRepository = SpeciesRepository;
    }
    }
    }

