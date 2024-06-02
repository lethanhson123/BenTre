namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucUngDungController : BaseController<DanhMucUngDung, IDanhMucUngDungService>
	{
		private readonly IDanhMucUngDungService _DanhMucUngDungService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucUngDungController(IDanhMucUngDungService DanhMucUngDungService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucUngDungService, WebHostEnvironment)
		{
			_DanhMucUngDungService = DanhMucUngDungService;
			_WebHostEnvironment = WebHostEnvironment;
		}		
	}
}

