namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucCompanyTinhTrangController : BaseController<DanhMucCompanyTinhTrang, IDanhMucCompanyTinhTrangService>
	{
		private readonly IDanhMucCompanyTinhTrangService _DanhMucCompanyTinhTrangService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucCompanyTinhTrangController(IDanhMucCompanyTinhTrangService DanhMucCompanyTinhTrangService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucCompanyTinhTrangService, WebHostEnvironment)
		{
			_DanhMucCompanyTinhTrangService = DanhMucCompanyTinhTrangService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

