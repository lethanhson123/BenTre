namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucATTPXepLoaiController : BaseController<DanhMucATTPXepLoai, IDanhMucATTPXepLoaiService>
	{
		private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucATTPXepLoaiController(IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucATTPXepLoaiService, WebHostEnvironment)
		{
			_DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

