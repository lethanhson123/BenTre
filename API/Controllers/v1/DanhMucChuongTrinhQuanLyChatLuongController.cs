namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucChuongTrinhQuanLyChatLuongController : BaseController<DanhMucChuongTrinhQuanLyChatLuong, IDanhMucChuongTrinhQuanLyChatLuongService>
	{
		private readonly IDanhMucChuongTrinhQuanLyChatLuongService _DanhMucChuongTrinhQuanLyChatLuongService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucChuongTrinhQuanLyChatLuongController(IDanhMucChuongTrinhQuanLyChatLuongService DanhMucChuongTrinhQuanLyChatLuongService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucChuongTrinhQuanLyChatLuongService, WebHostEnvironment)
		{
			_DanhMucChuongTrinhQuanLyChatLuongService = DanhMucChuongTrinhQuanLyChatLuongService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

