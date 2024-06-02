using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhDanhMucLayMauController : BaseController<PlanThamDinhDanhMucLayMau, IPlanThamDinhDanhMucLayMauService>
    {
        private readonly IPlanThamDinhDanhMucLayMauService _PlanThamDinhDanhMucLayMauService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PlanThamDinhDanhMucLayMauController(IPlanThamDinhDanhMucLayMauService PlanThamDinhDanhMucLayMauService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhDanhMucLayMauService, WebHostEnvironment)
        {
            _PlanThamDinhDanhMucLayMauService = PlanThamDinhDanhMucLayMauService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetSQLByParentIDToListAsync")]
        public async Task<List<PlanThamDinhDanhMucLayMau>> GetSQLByParentIDToListAsync()
        {
            List<PlanThamDinhDanhMucLayMau> result = new List<PlanThamDinhDanhMucLayMau>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhDanhMucLayMauService.GetSQLByParentIDToListAsync(model.ParentID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringAndSortOrderAndEmptyToListAsync")]
        public virtual async Task<List<PlanThamDinhDanhMucLayMau>> GetBySearchStringAndSortOrderAndEmptyToListAsync()
        {
            List<PlanThamDinhDanhMucLayMau> result = new List<PlanThamDinhDanhMucLayMau>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                PlanThamDinhDanhMucLayMau empty = new PlanThamDinhDanhMucLayMau();
                result.Add(empty);
                List<PlanThamDinhDanhMucLayMau> list = await _PlanThamDinhDanhMucLayMauService.GetBySearchStringToListAsync(baseParameter.SearchString);
                if (list.Count > 0)
                {
                    list = list.Where(item => item.SortOrder == baseParameter.SortOrder).ToList();
                    result.AddRange(list);
                }

            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_IsGoiYToListAsync")]
        public async Task<List<PlanThamDinhDanhMucLayMau>> GetByParentID_IsGoiYToListAsync()
        {
            List<PlanThamDinhDanhMucLayMau> result = new List<PlanThamDinhDanhMucLayMau>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhDanhMucLayMauService.GetByParentID_IsGoiYToListAsync(model.ParentID.Value, model.IsGoiY.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

