namespace Service.Implement
{
    public class DanhMucXepLoaiService : BaseService<DanhMucXepLoai, IDanhMucXepLoaiRepository>
    , IDanhMucXepLoaiService
    {
    private readonly IDanhMucXepLoaiRepository _DanhMucXepLoaiRepository;
    public DanhMucXepLoaiService(IDanhMucXepLoaiRepository DanhMucXepLoaiRepository) : base(DanhMucXepLoaiRepository)
    {
    _DanhMucXepLoaiRepository = DanhMucXepLoaiRepository;
    }
    }
    }

