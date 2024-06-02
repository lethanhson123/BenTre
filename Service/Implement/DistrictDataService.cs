namespace Service.Implement
{
    public class DistrictDataService : BaseService<DistrictData, IDistrictDataRepository>
    , IDistrictDataService
    {
    private readonly IDistrictDataRepository _DistrictDataRepository;
    public DistrictDataService(IDistrictDataRepository DistrictDataRepository) : base(DistrictDataRepository)
    {
    _DistrictDataRepository = DistrictDataRepository;
    }
    }
    }

