namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucSanPhamPhanLoaiController : BaseController<DanhMucSanPhamPhanLoai, IDanhMucSanPhamPhanLoaiService>
	{
		private readonly IDanhMucSanPhamPhanLoaiService _DanhMucSanPhamPhanLoaiService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucSanPhamPhanLoaiController(IDanhMucSanPhamPhanLoaiService DanhMucSanPhamPhanLoaiService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucSanPhamPhanLoaiService, WebHostEnvironment)
		{
			_DanhMucSanPhamPhanLoaiService = DanhMucSanPhamPhanLoaiService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

