namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class RegisterCoSoNuoiDocumentsController : BaseController<RegisterCoSoNuoiDocuments, IRegisterCoSoNuoiDocumentsService>
    {
    private readonly IRegisterCoSoNuoiDocumentsService _RegisterCoSoNuoiDocumentsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public RegisterCoSoNuoiDocumentsController(IRegisterCoSoNuoiDocumentsService RegisterCoSoNuoiDocumentsService, IWebHostEnvironment WebHostEnvironment) : base(RegisterCoSoNuoiDocumentsService, WebHostEnvironment)
    {
    _RegisterCoSoNuoiDocumentsService = RegisterCoSoNuoiDocumentsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

