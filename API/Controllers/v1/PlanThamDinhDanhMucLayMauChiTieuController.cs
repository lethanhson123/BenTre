namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhDanhMucLayMauChiTieuController : BaseController<PlanThamDinhDanhMucLayMauChiTieu, IPlanThamDinhDanhMucLayMauChiTieuService>
    {
        private readonly IPlanThamDinhDanhMucLayMauChiTieuService _PlanThamDinhDanhMucLayMauChiTieuService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PlanThamDinhDanhMucLayMauChiTieuController(IPlanThamDinhDanhMucLayMauChiTieuService PlanThamDinhDanhMucLayMauChiTieuService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhDanhMucLayMauChiTieuService, WebHostEnvironment)
        {
            _PlanThamDinhDanhMucLayMauChiTieuService = PlanThamDinhDanhMucLayMauChiTieuService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

