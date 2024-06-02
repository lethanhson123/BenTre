namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucThanhVienController : BaseController<DanhMucThanhVien, IDanhMucThanhVienService>
	{
		private readonly IDanhMucThanhVienService _DanhMucThanhVienService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucThanhVienController(IDanhMucThanhVienService DanhMucThanhVienService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucThanhVienService, WebHostEnvironment)
		{
			_DanhMucThanhVienService = DanhMucThanhVienService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		[HttpPost]
		[Route("GetByCompanyInfoThanhVienToListAsync")]
		public async Task<List<DanhMucThanhVien>> GetByCompanyInfoThanhVienToListAsync()
		{
			List<DanhMucThanhVien> result = new List<DanhMucThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _DanhMucThanhVienService.GetByCompanyInfoThanhVienToListAsync();
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
	}
}

