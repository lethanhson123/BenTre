namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucBienBanATTPController : BaseController<DanhMucBienBanATTP, IDanhMucBienBanATTPService>
	{
		private readonly IDanhMucBienBanATTPService _DanhMucBienBanATTPService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucBienBanATTPController(IDanhMucBienBanATTPService DanhMucBienBanATTPService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucBienBanATTPService, WebHostEnvironment)
		{
			_DanhMucBienBanATTPService = DanhMucBienBanATTPService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

