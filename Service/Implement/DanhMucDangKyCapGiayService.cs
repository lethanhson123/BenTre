namespace Service.Implement
{
    public class DanhMucDangKyCapGiayService : BaseService<DanhMucDangKyCapGiay, IDanhMucDangKyCapGiayRepository>
    , IDanhMucDangKyCapGiayService
    {
    private readonly IDanhMucDangKyCapGiayRepository _DanhMucDangKyCapGiayRepository;
    public DanhMucDangKyCapGiayService(IDanhMucDangKyCapGiayRepository DanhMucDangKyCapGiayRepository) : base(DanhMucDangKyCapGiayRepository)
    {
    _DanhMucDangKyCapGiayRepository = DanhMucDangKyCapGiayRepository;
    }
    }
    }

