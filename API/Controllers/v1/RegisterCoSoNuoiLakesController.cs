namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class RegisterCoSoNuoiLakesController : BaseController<RegisterCoSoNuoiLakes, IRegisterCoSoNuoiLakesService>
    {
    private readonly IRegisterCoSoNuoiLakesService _RegisterCoSoNuoiLakesService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public RegisterCoSoNuoiLakesController(IRegisterCoSoNuoiLakesService RegisterCoSoNuoiLakesService, IWebHostEnvironment WebHostEnvironment) : base(RegisterCoSoNuoiLakesService, WebHostEnvironment)
    {
    _RegisterCoSoNuoiLakesService = RegisterCoSoNuoiLakesService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

