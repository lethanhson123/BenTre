namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoDonViDongGoiSanPhamController : BaseController<CompanyInfoDonViDongGoiSanPham, ICompanyInfoDonViDongGoiSanPhamService>
    {
    private readonly ICompanyInfoDonViDongGoiSanPhamService _CompanyInfoDonViDongGoiSanPhamService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public CompanyInfoDonViDongGoiSanPhamController(ICompanyInfoDonViDongGoiSanPhamService CompanyInfoDonViDongGoiSanPhamService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoDonViDongGoiSanPhamService, WebHostEnvironment)
    {
    _CompanyInfoDonViDongGoiSanPhamService = CompanyInfoDonViDongGoiSanPhamService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

