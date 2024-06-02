namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ThanhVienPhanQuyenChucNangController : BaseController<ThanhVienPhanQuyenChucNang, IThanhVienPhanQuyenChucNangService>
	{
		private readonly IThanhVienPhanQuyenChucNangService _ThanhVienPhanQuyenChucNangService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public ThanhVienPhanQuyenChucNangController(IThanhVienPhanQuyenChucNangService ThanhVienPhanQuyenChucNangService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienPhanQuyenChucNangService, WebHostEnvironment)
		{
			_ThanhVienPhanQuyenChucNangService = ThanhVienPhanQuyenChucNangService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		[HttpPost]
		[Route("GetSQLByParentIDToListAsync")]
		public async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByParentIDToListAsync()
		{
			List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienPhanQuyenChucNangService.GetSQLByParentIDToListAsync(model.ParentID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetSQLByDanhMucThanhVienIDToListAsync")]
		public async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucThanhVienIDToListAsync()
		{
			List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienPhanQuyenChucNangService.GetSQLByDanhMucThanhVienIDToListAsync(model.DanhMucThanhVienID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetSQLByAgencyDepartmentIDToListAsync")]
		public async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByAgencyDepartmentIDToListAsync()
		{
			List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienPhanQuyenChucNangService.GetSQLByAgencyDepartmentIDToListAsync(model.AgencyDepartmentID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetSQLByDanhMucChucDanhIDToListAsync")]
		public async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucChucDanhIDToListAsync()
		{
			List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienPhanQuyenChucNangService.GetSQLByDanhMucChucDanhIDToListAsync(model.DanhMucChucDanhID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [HttpPost]
        [Route("GetByDanhMucChucNangID_001AndEmptyToListAsync")]
        public async Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_001AndEmptyToListAsync()
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienPhanQuyenChucNangService.GetByDanhMucChucNangID_001AndEmptyToListAsync(model.DanhMucChucNangID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByDanhMucChucNangID_002AndEmptyToListAsync")]
        public async Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_002AndEmptyToListAsync()
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienPhanQuyenChucNangService.GetByDanhMucChucNangID_002AndEmptyToListAsync(model.DanhMucChucNangID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

