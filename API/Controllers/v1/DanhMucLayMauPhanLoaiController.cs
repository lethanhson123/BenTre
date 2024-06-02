namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucLayMauPhanLoaiController : BaseController<DanhMucLayMauPhanLoai, IDanhMucLayMauPhanLoaiService>
    {
    private readonly IDanhMucLayMauPhanLoaiService _DanhMucLayMauPhanLoaiService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucLayMauPhanLoaiController(IDanhMucLayMauPhanLoaiService DanhMucLayMauPhanLoaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucLayMauPhanLoaiService, WebHostEnvironment)
    {
    _DanhMucLayMauPhanLoaiService = DanhMucLayMauPhanLoaiService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

