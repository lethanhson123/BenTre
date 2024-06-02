namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPInfoTimelinesController : BaseController<ATTPInfoTimelines, IATTPInfoTimelinesService>
    {
    private readonly IATTPInfoTimelinesService _ATTPInfoTimelinesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPInfoTimelinesController(IATTPInfoTimelinesService ATTPInfoTimelinesService, IWebHostEnvironment WebHostEnvironment) : base(ATTPInfoTimelinesService, WebHostEnvironment)
    {
    _ATTPInfoTimelinesService = ATTPInfoTimelinesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

