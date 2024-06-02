namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ThanhVienPhanQuyenKhuVucController : BaseController<ThanhVienPhanQuyenKhuVuc, IThanhVienPhanQuyenKhuVucService>
	{
		private readonly IThanhVienPhanQuyenKhuVucService _ThanhVienPhanQuyenKhuVucService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public ThanhVienPhanQuyenKhuVucController(IThanhVienPhanQuyenKhuVucService ThanhVienPhanQuyenKhuVucService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienPhanQuyenKhuVucService, WebHostEnvironment)
		{
			_ThanhVienPhanQuyenKhuVucService = ThanhVienPhanQuyenKhuVucService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		
	}
}

