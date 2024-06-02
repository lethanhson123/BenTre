namespace Service.Implement
{
    public class DanhMucHinhThucNuoiService : BaseService<DanhMucHinhThucNuoi, IDanhMucHinhThucNuoiRepository>
    , IDanhMucHinhThucNuoiService
    {
    private readonly IDanhMucHinhThucNuoiRepository _DanhMucHinhThucNuoiRepository;
    public DanhMucHinhThucNuoiService(IDanhMucHinhThucNuoiRepository DanhMucHinhThucNuoiRepository) : base(DanhMucHinhThucNuoiRepository)
    {
    _DanhMucHinhThucNuoiRepository = DanhMucHinhThucNuoiRepository;
    }
    }
    }

