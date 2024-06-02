namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DanhMucChucNangController : BaseController<DanhMucChucNang, IDanhMucChucNangService>
	{
		private readonly IDanhMucChucNangService _DanhMucChucNangService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DanhMucChucNangController(IDanhMucChucNangService DanhMucChucNangService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucChucNangService, WebHostEnvironment)
		{
			_DanhMucChucNangService = DanhMucChucNangService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		[HttpPost]
		[Route("GetSQLByThanhVienIDToListAsync")]
		public async Task<List<DanhMucChucNang>> GetSQLByThanhVienIDToListAsync()
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _DanhMucChucNangService.GetSQLByThanhVienIDToListAsync(model.ThanhVienID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetSQLByThanhVienID_ActiveToListAsync")]
		public async Task<List<DanhMucChucNang>> GetSQLByThanhVienID_ActiveToListAsync()
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _DanhMucChucNangService.GetSQLByThanhVienID_ActiveToListAsync(model.ThanhVienID.Value, model.Active.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync")]
		public async Task<List<DanhMucChucNang>> GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync()
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _DanhMucChucNangService.GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync(model.ThanhVienID.Value, model.Active.Value, model.DanhMucUngDungID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByDanhMucUngDungIDToListAsync")]
		public async Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDToListAsync()
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result= await _DanhMucChucNangService.GetByDanhMucUngDungIDToListAsync(model.DanhMucUngDungID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByDanhMucUngDungIDAndEmptyToListAsync")]
		public async Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDAndEmptyToListAsync()
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _DanhMucChucNangService.GetByDanhMucUngDungIDAndEmptyToListAsync(model.DanhMucUngDungID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        
    }
}

