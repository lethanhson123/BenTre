namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucLayMauController : BaseController<DanhMucLayMau, IDanhMucLayMauService>
    {
        private readonly IDanhMucLayMauService _DanhMucLayMauService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public DanhMucLayMauController(IDanhMucLayMauService DanhMucLayMauService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucLayMauService, WebHostEnvironment)
        {
            _DanhMucLayMauService = DanhMucLayMauService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

