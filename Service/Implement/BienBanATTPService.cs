namespace Service.Implement
{
    public class BienBanATTPService : BaseService<BienBanATTP, IBienBanATTPRepository>
    , IBienBanATTPService
    {
    private readonly IBienBanATTPRepository _BienBanATTPRepository;
    public BienBanATTPService(IBienBanATTPRepository BienBanATTPRepository) : base(BienBanATTPRepository)
    {
    _BienBanATTPRepository = BienBanATTPRepository;
    }
    }
    }

