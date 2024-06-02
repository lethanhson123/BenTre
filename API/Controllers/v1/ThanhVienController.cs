namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ThanhVienController : BaseController<ThanhVien, IThanhVienService>
	{
		private readonly IThanhVienService _ThanhVienService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public ThanhVienController(IThanhVienService ThanhVienService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienService, WebHostEnvironment)
		{
			_ThanhVienService = ThanhVienService;
			_WebHostEnvironment = WebHostEnvironment;
		}

        [AllowAnonymous]
        [HttpPost]
		[Route("AuthenticationAsync")]
		public async Task<ThanhVien> AuthenticationAsync()
		{
			ThanhVien result = new ThanhVien();
			try
			{
				result = JsonConvert.DeserializeObject<ThanhVien>(Request.Form["data"]);
				result = await _ThanhVienService.AuthenticationAsync(result);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [AllowAnonymous]
        [HttpPost]
        [Route("AuthenticationToStringAsync")]
        public async Task<string> AuthenticationToStringAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                ThanhVien ThanhVien = JsonConvert.DeserializeObject<ThanhVien>(Request.Form["data"]);
                result = await _ThanhVienService.AuthenticationToStringAsync(ThanhVien);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [AllowAnonymous]
        [HttpPost]
		[Route("AuthenticationFastAsync")]
		public async Task<ThanhVien> AuthenticationFastAsync()
		{
			ThanhVien result = new ThanhVien();
			try
			{
				result = JsonConvert.DeserializeObject<ThanhVien>(Request.Form["data"]);
				result = await _ThanhVienService.AuthenticationFastAsync(result);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByTaiKhoanAsync")]
		public async Task<ThanhVien> GetByTaiKhoanAsync()
		{
			ThanhVien result = new ThanhVien();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByTaiKhoanAsync(model.TaiKhoan);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("ChangePasswordAsync")]
		public async Task<ThanhVien> ChangePasswordAsync()
		{			
			ThanhVien result = new ThanhVien();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.ChangePasswordAsync(model.ThanhVien, model.Password01, model.Password02, model.Password03);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByParentIDOrSearchStringToListAsync")]
		public async Task<List<ThanhVien>> GetByParentIDOrSearchStringToListAsync()
		{			
			List<ThanhVien> result = new List<ThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByParentIDOrSearchStringToListAsync(model.ParentID.Value, model.SearchString);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByCompanyInfoIDToListAsync")]
		public async Task<List<ThanhVien>> GetByCompanyInfoIDToListAsync()
		{
			List<ThanhVien> result = new List<ThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByCompanyInfoIDToListAsync(model.CompanyInfoID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByCompanyInfoIDAndEmptyToListAsync")]
		public async Task<List<ThanhVien>> GetByCompanyInfoIDAndEmptyToListAsync()
		{
			List<ThanhVien> result = new List<ThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByCompanyInfoIDAndEmptyToListAsync(model.CompanyInfoID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByStateAgencyIDToListAsync")]
		public async Task<List<ThanhVien>> GetByStateAgencyIDToListAsync()
		{
			List<ThanhVien> result = new List<ThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByStateAgencyIDToListAsync(model.StateAgencyID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [HttpPost]
        [Route("GetByStateAgencyID_SearchStringToListAsync")]
        public async Task<List<ThanhVien>> GetByStateAgencyID_SearchStringToListAsync()
        {
            List<ThanhVien> result = new List<ThanhVien>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienService.GetByStateAgencyID_SearchStringToListAsync(model.StateAgencyID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByStateAgencyID_ActiveToListAsync")]
        public async Task<List<ThanhVien>> GetByStateAgencyID_ActiveToListAsync()
        {
            List<ThanhVien> result = new List<ThanhVien>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienService.GetByStateAgencyID_ActiveToListAsync(model.StateAgencyID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
		[Route("GetByAgencyDepartmentIDToListAsync")]
		public async Task<List<ThanhVien>> GetByAgencyDepartmentIDToListAsync()
		{
			List<ThanhVien> result = new List<ThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ThanhVienService.GetByAgencyDepartmentIDToListAsync(model.AgencyDepartmentID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [HttpPost]
        [Route("GetByAgencyDepartmentID_ActiveToListAsync")]
        public async Task<List<ThanhVien>> GetByAgencyDepartmentID_ActiveToListAsync()
        {
            List<ThanhVien> result = new List<ThanhVien>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienService.GetByAgencyDepartmentID_ActiveToListAsync(model.AgencyDepartmentID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByListParentID_ActiveToListAsync")]
        public async Task<List<ThanhVien>> GetByListParentID_ActiveToListAsync()
        {
            List<ThanhVien> result = new List<ThanhVien>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienService.GetByListParentID_ActiveToListAsync();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

