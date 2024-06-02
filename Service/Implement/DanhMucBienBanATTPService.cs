namespace Service.Implement
{
    public class DanhMucBienBanATTPService : BaseService<DanhMucBienBanATTP, IDanhMucBienBanATTPRepository>
    , IDanhMucBienBanATTPService
    {
    private readonly IDanhMucBienBanATTPRepository _DanhMucBienBanATTPRepository;
    public DanhMucBienBanATTPService(IDanhMucBienBanATTPRepository DanhMucBienBanATTPRepository) : base(DanhMucBienBanATTPRepository)
    {
    _DanhMucBienBanATTPRepository = DanhMucBienBanATTPRepository;
    }
    }
    }

