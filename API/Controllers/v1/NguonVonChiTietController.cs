namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class NguonVonChiTietController : BaseController<NguonVonChiTiet, INguonVonChiTietService>
    {
        private readonly INguonVonChiTietService _NguonVonChiTietService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public NguonVonChiTietController(INguonVonChiTietService NguonVonChiTietService, IWebHostEnvironment WebHostEnvironment) : base(NguonVonChiTietService, WebHostEnvironment)
        {
            _NguonVonChiTietService = NguonVonChiTietService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

