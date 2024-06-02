namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoDonViDongGoiNongHoController : BaseController<CompanyInfoDonViDongGoiNongHo, ICompanyInfoDonViDongGoiNongHoService>
    {
    private readonly ICompanyInfoDonViDongGoiNongHoService _CompanyInfoDonViDongGoiNongHoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyInfoDonViDongGoiNongHoController(ICompanyInfoDonViDongGoiNongHoService CompanyInfoDonViDongGoiNongHoService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoDonViDongGoiNongHoService, WebHostEnvironment)
    {
    _CompanyInfoDonViDongGoiNongHoService = CompanyInfoDonViDongGoiNongHoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

