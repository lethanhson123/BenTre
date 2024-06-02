namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucThamDinhKetQuaDanhGiaController : BaseController<DanhMucThamDinhKetQuaDanhGia, IDanhMucThamDinhKetQuaDanhGiaService>
	{
		private readonly IDanhMucThamDinhKetQuaDanhGiaService _DanhMucThamDinhKetQuaDanhGiaService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucThamDinhKetQuaDanhGiaController(IDanhMucThamDinhKetQuaDanhGiaService DanhMucThamDinhKetQuaDanhGiaService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucThamDinhKetQuaDanhGiaService, WebHostEnvironment)
		{
			_DanhMucThamDinhKetQuaDanhGiaService = DanhMucThamDinhKetQuaDanhGiaService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

