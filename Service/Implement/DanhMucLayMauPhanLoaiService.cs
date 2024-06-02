namespace Service.Implement
{
    public class DanhMucLayMauPhanLoaiService : BaseService<DanhMucLayMauPhanLoai, IDanhMucLayMauPhanLoaiRepository>
    , IDanhMucLayMauPhanLoaiService
    {
    private readonly IDanhMucLayMauPhanLoaiRepository _DanhMucLayMauPhanLoaiRepository;
    public DanhMucLayMauPhanLoaiService(IDanhMucLayMauPhanLoaiRepository DanhMucLayMauPhanLoaiRepository) : base(DanhMucLayMauPhanLoaiRepository)
    {
    _DanhMucLayMauPhanLoaiRepository = DanhMucLayMauPhanLoaiRepository;
    }
    }
    }

