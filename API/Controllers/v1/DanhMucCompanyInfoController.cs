namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucCompanyInfoController : BaseController<DanhMucCompanyInfo, IDanhMucCompanyInfoService>
    {
    private readonly IDanhMucCompanyInfoService _DanhMucCompanyInfoService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public DanhMucCompanyInfoController(IDanhMucCompanyInfoService DanhMucCompanyInfoService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucCompanyInfoService, WebHostEnvironment)
    {
    _DanhMucCompanyInfoService = DanhMucCompanyInfoService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

