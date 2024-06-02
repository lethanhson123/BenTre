namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhCompaniesController : BaseController<PlanThamDinhCompanies, IPlanThamDinhCompaniesService>
    {
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PlanThamDinhCompaniesController(IPlanThamDinhCompaniesService PlanThamDinhCompaniesService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhCompaniesService, WebHostEnvironment)
        {
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetByListParentIDToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByListParentIDToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (model.ListID != null)
                {
                    if (model.ListID.Count > 0)
                    {
                        result = await _PlanThamDinhCompaniesService.GetByListParentIDToListAsync(model.ListID);
                    }
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync(model.DistrictDataID.Value, model.DanhMucATTPXepLoaiID.Value, model.SoThang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value, model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value, model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value, model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCompanyInfoIDToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByCompanyInfoIDToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByCompanyInfoIDToListAsync(model.CompanyInfoID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCompanyInfoID_NgayGhiNhanAsync")]
        public async Task<PlanThamDinhCompanies> GetByCompanyInfoID_NgayGhiNhanAsync()
        {
            PlanThamDinhCompanies result = new PlanThamDinhCompanies();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByCompanyInfoID_NgayGhiNhanAsync(model.CompanyInfoID.Value, model.NgayGhiNhan.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync(model.ParentID.Value, model.Nam.Value, model.SoDot.Value, model.Active.Value, model.DanhMucATTPXepLoaiID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync(model.ParentID.Value, model.Nam.Value, model.Thang.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync(model.ParentID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync(model.ParentID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByMaSoForWebsiteAsync")]
        public async Task<PlanThamDinhCompanies> GetByMaSoForWebsiteAsync()
        {
            PlanThamDinhCompanies result = new PlanThamDinhCompanies();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetByMaSoForWebsiteAsync(model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByPlanTypeID_DistrictDataIDToListAsync")]
        public async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataIDToListAsync()
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompaniesService.GetSQLByPlanTypeID_DistrictDataIDToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

