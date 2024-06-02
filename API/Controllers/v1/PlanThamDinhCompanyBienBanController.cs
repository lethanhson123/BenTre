
namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhCompanyBienBanController : BaseController<PlanThamDinhCompanyBienBan, IPlanThamDinhCompanyBienBanService>
    {
        private readonly IPlanThamDinhCompanyBienBanService _PlanThamDinhCompanyBienBanService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PlanThamDinhCompanyBienBanController(IPlanThamDinhCompanyBienBanService PlanThamDinhCompanyBienBanService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhCompanyBienBanService, WebHostEnvironment)
        {
            _PlanThamDinhCompanyBienBanService = PlanThamDinhCompanyBienBanService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("SaveListAsync")]
        public override async Task<List<PlanThamDinhCompanyBienBan>> SaveListAsync()
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            try
            {
                result = JsonConvert.DeserializeObject<List<PlanThamDinhCompanyBienBan>>(Request.Form["data"]);
                if (result.Count > 0)
                {
                    PlanThamDinhCompanyBienBan model = result[0];
                    foreach (PlanThamDinhCompanyBienBan item in result)
                    {
                        await _PlanThamDinhCompanyBienBanService.SaveAsync(item);
                    }
                    if (model.PlanThamDinhID > 0)
                    {
                        await _PlanThamDinhCompanyBienBanService.SyncAsync(GlobalHelper.InitializationNumber, model.PlanThamDinhID.Value, model.DanhMucProductGroupID.Value);
                    }                   
                    if (model.ParentID > 0)
                    {
                        await _PlanThamDinhCompanyBienBanService.SyncAsync(model.ParentID.Value, GlobalHelper.InitializationNumber, model.DanhMucProductGroupID.Value);
                    }                   
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByParentID_BienBanATTPParentIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_BienBanATTPParentIDToListAsync()
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyBienBanService.GetSQLByParentID_BienBanATTPParentIDToListAsync(model.ParentID.Value, model.BienBanATTPParentID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByParentID_DanhMucProductGroupIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_DanhMucProductGroupIDToListAsync()
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyBienBanService.GetSQLByParentID_DanhMucProductGroupIDToListAsync(model.ParentID.Value, model.DanhMucProductGroupID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync()
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyBienBanService.GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync(model.PlanThamDinhID.Value, model.DanhMucProductGroupID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

