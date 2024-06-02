namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucChucDanhController : BaseController<DanhMucChucDanh, IDanhMucChucDanhService>
	{
		private readonly IDanhMucChucDanhService _DanhMucChucDanhService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucChucDanhController(IDanhMucChucDanhService DanhMucChucDanhService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucChucDanhService, WebHostEnvironment)
		{
			_DanhMucChucDanhService = DanhMucChucDanhService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

