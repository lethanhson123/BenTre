namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoDonViDongGoiThiTruongController : BaseController<CompanyInfoDonViDongGoiThiTruong, ICompanyInfoDonViDongGoiThiTruongService>
    {
    private readonly ICompanyInfoDonViDongGoiThiTruongService _CompanyInfoDonViDongGoiThiTruongService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyInfoDonViDongGoiThiTruongController(ICompanyInfoDonViDongGoiThiTruongService CompanyInfoDonViDongGoiThiTruongService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoDonViDongGoiThiTruongService, WebHostEnvironment)
    {
    _CompanyInfoDonViDongGoiThiTruongService = CompanyInfoDonViDongGoiThiTruongService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

