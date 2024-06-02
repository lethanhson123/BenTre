namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucATTPTinhTrangController : BaseController<DanhMucATTPTinhTrang, IDanhMucATTPTinhTrangService>
	{
		private readonly IDanhMucATTPTinhTrangService _DanhMucATTPTinhTrangService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucATTPTinhTrangController(IDanhMucATTPTinhTrangService DanhMucATTPTinhTrangService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucATTPTinhTrangService, WebHostEnvironment)
		{
			_DanhMucATTPTinhTrangService = DanhMucATTPTinhTrangService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

