namespace Service.Implement
{
    public class TapTinDinhKemService : BaseService<TapTinDinhKem, ITapTinDinhKemRepository>
    , ITapTinDinhKemService
    {
    private readonly ITapTinDinhKemRepository _HinhAnhRepository;
    public TapTinDinhKemService(ITapTinDinhKemRepository HinhAnhRepository) : base(HinhAnhRepository)
    {
    _HinhAnhRepository = HinhAnhRepository;
    }
    }
    }

