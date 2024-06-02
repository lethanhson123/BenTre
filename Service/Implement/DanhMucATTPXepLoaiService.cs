namespace Service.Implement
{
    public class DanhMucATTPXepLoaiService : BaseService<DanhMucATTPXepLoai, IDanhMucATTPXepLoaiRepository>
    , IDanhMucATTPXepLoaiService
    {
    private readonly IDanhMucATTPXepLoaiRepository _DanhMucATTPXepLoaiRepository;
    public DanhMucATTPXepLoaiService(IDanhMucATTPXepLoaiRepository DanhMucATTPXepLoaiRepository) : base(DanhMucATTPXepLoaiRepository)
    {
    _DanhMucATTPXepLoaiRepository = DanhMucATTPXepLoaiRepository;
    }
    }
    }

