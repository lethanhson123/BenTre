namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucATTPLoaiHoSoController : BaseController<DanhMucATTPLoaiHoSo, IDanhMucATTPLoaiHoSoService>
	{
		private readonly IDanhMucATTPLoaiHoSoService _DanhMucATTPLoaiHoSoService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucATTPLoaiHoSoController(IDanhMucATTPLoaiHoSoService DanhMucATTPLoaiHoSoService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucATTPLoaiHoSoService, WebHostEnvironment)
		{
			_DanhMucATTPLoaiHoSoService = DanhMucATTPLoaiHoSoService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

