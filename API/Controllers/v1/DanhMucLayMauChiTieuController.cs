namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucLayMauChiTieuController : BaseController<DanhMucLayMauChiTieu, IDanhMucLayMauChiTieuService>
    {
        private readonly IDanhMucLayMauChiTieuService _DanhMucLayMauChiTieuService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public DanhMucLayMauChiTieuController(IDanhMucLayMauChiTieuService DanhMucLayMauChiTieuService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucLayMauChiTieuService, WebHostEnvironment)
        {
            _DanhMucLayMauChiTieuService = DanhMucLayMauChiTieuService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

