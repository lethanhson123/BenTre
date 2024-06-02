namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPTiepNhanProductGroupsController : BaseController<ATTPTiepNhanProductGroups, IATTPTiepNhanProductGroupsService>
    {
    private readonly IATTPTiepNhanProductGroupsService _ATTPTiepNhanProductGroupsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPTiepNhanProductGroupsController(IATTPTiepNhanProductGroupsService ATTPTiepNhanProductGroupsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPTiepNhanProductGroupsService, WebHostEnvironment)
    {
    _ATTPTiepNhanProductGroupsService = ATTPTiepNhanProductGroupsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

