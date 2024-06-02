namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhController : BaseController<PlanThamDinh, IPlanThamDinhService>
    {
        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IWebHostEnvironment _WebHostEnvironment;       
        
        public PlanThamDinhController(
          IPlanThamDinhService PlanThamDinhService
        , IWebHostEnvironment WebHostEnvironment       
        
        ) : base(PlanThamDinhService, WebHostEnvironment)
        {
            _PlanThamDinhService = PlanThamDinhService;
            _WebHostEnvironment = WebHostEnvironment;           
            
        }
        [HttpPost]
        [Route("CopyAsync")]
        public async Task<PlanThamDinh> CopyAsync()
        {
            PlanThamDinh result = new PlanThamDinh();
            try
            {
                PlanThamDinh model = JsonConvert.DeserializeObject<PlanThamDinh>(Request.Form["data"]);
                result = await _PlanThamDinhService.CopyAsync(model);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchString_NgayBatDau_NgayKetThucToListAsync")]
        public async Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThucToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetBySearchString_NgayBatDau_NgayKetThucToListAsync(model.SearchString, model.BatDau.Value, model.KetThuc.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync")]
        public async Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(model.SearchString, model.BatDau.Value, model.KetThuc.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync")]
        public async Task<List<PlanThamDinh>> GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(model.ParentID.Value, model.SearchString, model.BatDau.Value, model.KetThuc.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_Nam_SoDot_ActiveToListAsync")]
        public async Task<List<PlanThamDinh>> GetByParentID_Nam_SoDot_ActiveToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetByParentID_Nam_SoDot_ActiveToListAsync(model.ParentID.Value, model.Nam.Value, model.SoDot.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_Nam_ActiveToListAsync")]
        public async Task<List<PlanThamDinh>> GetByParentID_Nam_ActiveToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetByParentID_Nam_ActiveToListAsync(model.ParentID.Value, model.Nam.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync")]
        public async Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync(model.StateAgencyID.Value, model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync")]
        public async Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync()
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhService.GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync(model.ThanhVienID.Value, model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

