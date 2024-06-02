namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPInfoProductBadsController : BaseController<ATTPInfoProductBads, IATTPInfoProductBadsService>
    {
    private readonly IATTPInfoProductBadsService _ATTPInfoProductBadsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPInfoProductBadsController(IATTPInfoProductBadsService ATTPInfoProductBadsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPInfoProductBadsService, WebHostEnvironment)
    {
    _ATTPInfoProductBadsService = ATTPInfoProductBadsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

