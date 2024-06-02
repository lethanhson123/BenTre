namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucCompanyTrangThaiController : BaseController<DanhMucCompanyTrangThai, IDanhMucCompanyTrangThaiService>
	{
		private readonly IDanhMucCompanyTrangThaiService _DanhMucCompanyTrangThaiService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucCompanyTrangThaiController(IDanhMucCompanyTrangThaiService DanhMucCompanyTrangThaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucCompanyTrangThaiService, WebHostEnvironment)
		{
			_DanhMucCompanyTrangThaiService = DanhMucCompanyTrangThaiService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

