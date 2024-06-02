namespace Service.Implement
{
    public class DanhMucATTPTinhTrangService : BaseService<DanhMucATTPTinhTrang, IDanhMucATTPTinhTrangRepository>
    , IDanhMucATTPTinhTrangService
    {
    private readonly IDanhMucATTPTinhTrangRepository _DanhMucATTPTinhTrangRepository;
    public DanhMucATTPTinhTrangService(IDanhMucATTPTinhTrangRepository DanhMucATTPTinhTrangRepository) : base(DanhMucATTPTinhTrangRepository)
    {
    _DanhMucATTPTinhTrangRepository = DanhMucATTPTinhTrangRepository;
    }
    }
    }

