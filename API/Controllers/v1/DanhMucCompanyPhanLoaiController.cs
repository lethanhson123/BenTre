namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucCompanyPhanLoaiController : BaseController<DanhMucCompanyPhanLoai, IDanhMucCompanyPhanLoaiService>
	{
		private readonly IDanhMucCompanyPhanLoaiService _DanhMucCompanyPhanLoaiService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucCompanyPhanLoaiController(IDanhMucCompanyPhanLoaiService DanhMucCompanyPhanLoaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucCompanyPhanLoaiService, WebHostEnvironment)
		{
			_DanhMucCompanyPhanLoaiService = DanhMucCompanyPhanLoaiService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

