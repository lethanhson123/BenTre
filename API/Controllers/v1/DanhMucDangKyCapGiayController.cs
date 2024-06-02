namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucDangKyCapGiayController : BaseController<DanhMucDangKyCapGiay, IDanhMucDangKyCapGiayService>
	{
		private readonly IDanhMucDangKyCapGiayService _DanhMucDangKyCapGiayService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucDangKyCapGiayController(IDanhMucDangKyCapGiayService DanhMucDangKyCapGiayService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucDangKyCapGiayService, WebHostEnvironment)
		{
			_DanhMucDangKyCapGiayService = DanhMucDangKyCapGiayService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

