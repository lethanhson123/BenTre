namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucThiTruongController : BaseController<DanhMucThiTruong, IDanhMucThiTruongService>
	{
		private readonly IDanhMucThiTruongService _DanhMucThiTruongService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucThiTruongController(IDanhMucThiTruongService DanhMucThiTruongService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucThiTruongService, WebHostEnvironment)
		{
			_DanhMucThiTruongService = DanhMucThiTruongService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

