namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucXepLoaiController : BaseController<DanhMucXepLoai, IDanhMucXepLoaiService>
	{
		private readonly IDanhMucXepLoaiService _DanhMucXepLoaiService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucXepLoaiController(IDanhMucXepLoaiService DanhMucXepLoaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucXepLoaiService, WebHostEnvironment)
		{
			_DanhMucXepLoaiService = DanhMucXepLoaiService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

