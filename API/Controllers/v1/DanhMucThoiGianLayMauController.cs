namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucThoiGianLayMauController : BaseController<DanhMucThoiGianLayMau, IDanhMucThoiGianLayMauService>
    {
    private readonly IDanhMucThoiGianLayMauService _DanhMucThoiGianLayMauService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucThoiGianLayMauController(IDanhMucThoiGianLayMauService DanhMucThoiGianLayMauService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucThoiGianLayMauService, WebHostEnvironment)
    {
    _DanhMucThoiGianLayMauService = DanhMucThoiGianLayMauService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

