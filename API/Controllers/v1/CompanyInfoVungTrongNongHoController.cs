namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoVungTrongNongHoController : BaseController<CompanyInfoVungTrongNongHo, ICompanyInfoVungTrongNongHoService>
    {
    private readonly ICompanyInfoVungTrongNongHoService _CompanyInfoVungTrongNongHoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyInfoVungTrongNongHoController(ICompanyInfoVungTrongNongHoService CompanyInfoVungTrongNongHoService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoVungTrongNongHoService, WebHostEnvironment)
    {
    _CompanyInfoVungTrongNongHoService = CompanyInfoVungTrongNongHoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

