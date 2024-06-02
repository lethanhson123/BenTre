namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPInfoProductGroupsController : BaseController<ATTPInfoProductGroups, IATTPInfoProductGroupsService>
    {
    private readonly IATTPInfoProductGroupsService _ATTPInfoProductGroupsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPInfoProductGroupsController(IATTPInfoProductGroupsService ATTPInfoProductGroupsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPInfoProductGroupsService, WebHostEnvironment)
    {
    _ATTPInfoProductGroupsService = ATTPInfoProductGroupsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

