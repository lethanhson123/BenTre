namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class TapTinDinhKemController : BaseController<TapTinDinhKem, ITapTinDinhKemService>
    {
    private readonly ITapTinDinhKemService _HinhAnhService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public TapTinDinhKemController(ITapTinDinhKemService HinhAnhService, IWebHostEnvironment WebHostEnvironment) : base(HinhAnhService, WebHostEnvironment)
    {
    _HinhAnhService = HinhAnhService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

