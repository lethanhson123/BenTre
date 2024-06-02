namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPTiepNhanDocumentsController : BaseController<ATTPTiepNhanDocuments, IATTPTiepNhanDocumentsService>
    {
    private readonly IATTPTiepNhanDocumentsService _ATTPTiepNhanDocumentsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPTiepNhanDocumentsController(IATTPTiepNhanDocumentsService ATTPTiepNhanDocumentsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPTiepNhanDocumentsService, WebHostEnvironment)
    {
    _ATTPTiepNhanDocumentsService = ATTPTiepNhanDocumentsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

