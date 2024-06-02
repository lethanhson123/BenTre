namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPInfoDocumentsController : BaseController<ATTPInfoDocuments, IATTPInfoDocumentsService>
    {
    private readonly IATTPInfoDocumentsService _ATTPInfoDocumentsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPInfoDocumentsController(IATTPInfoDocumentsService ATTPInfoDocumentsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPInfoDocumentsService, WebHostEnvironment)
    {
    _ATTPInfoDocumentsService = ATTPInfoDocumentsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

