namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoVungTrongToaDoController : BaseController<CompanyInfoVungTrongToaDo, ICompanyInfoVungTrongToaDoService>
    {
    private readonly ICompanyInfoVungTrongToaDoService _CompanyInfoVungTrongToaDoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyInfoVungTrongToaDoController(ICompanyInfoVungTrongToaDoService CompanyInfoVungTrongToaDoService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoVungTrongToaDoService, WebHostEnvironment)
    {
    _CompanyInfoVungTrongToaDoService = CompanyInfoVungTrongToaDoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

