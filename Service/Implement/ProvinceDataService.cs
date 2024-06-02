namespace Service.Implement
{
    public class ProvinceDataService : BaseService<ProvinceData, IProvinceDataRepository>
    , IProvinceDataService
    {
    private readonly IProvinceDataRepository _ProvinceDataRepository;
    public ProvinceDataService(IProvinceDataRepository ProvinceDataRepository) : base(ProvinceDataRepository)
    {
    _ProvinceDataRepository = ProvinceDataRepository;
    }
    }
    }

