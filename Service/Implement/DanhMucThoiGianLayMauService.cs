namespace Service.Implement
{
    public class DanhMucThoiGianLayMauService : BaseService<DanhMucThoiGianLayMau, IDanhMucThoiGianLayMauRepository>
    , IDanhMucThoiGianLayMauService
    {
    private readonly IDanhMucThoiGianLayMauRepository _DanhMucThoiGianLayMauRepository;
    public DanhMucThoiGianLayMauService(IDanhMucThoiGianLayMauRepository DanhMucThoiGianLayMauRepository) : base(DanhMucThoiGianLayMauRepository)
    {
    _DanhMucThoiGianLayMauRepository = DanhMucThoiGianLayMauRepository;
    }
    }
    }

