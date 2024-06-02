namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucHinhThucNuoiController : BaseController<DanhMucHinhThucNuoi, IDanhMucHinhThucNuoiService>
    {
        private readonly IDanhMucHinhThucNuoiService _DanhMucHinhThucNuoiService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public DanhMucHinhThucNuoiController(IDanhMucHinhThucNuoiService DanhMucHinhThucNuoiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucHinhThucNuoiService, WebHostEnvironment)
        {
            _DanhMucHinhThucNuoiService = DanhMucHinhThucNuoiService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

