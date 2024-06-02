namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class PlanThamDinhCompanyProductGroupController : BaseController<PlanThamDinhCompanyProductGroup, IPlanThamDinhCompanyProductGroupService>
	{
		private readonly IPlanThamDinhCompanyProductGroupService _PlanThamDinhCompanyProductGroupService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public PlanThamDinhCompanyProductGroupController(IPlanThamDinhCompanyProductGroupService PlanThamDinhCompanyProductGroupService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhCompanyProductGroupService, WebHostEnvironment)
		{
			_PlanThamDinhCompanyProductGroupService = PlanThamDinhCompanyProductGroupService;
			_WebHostEnvironment = WebHostEnvironment;
		}
        [HttpPost]
        [Route("GetByPlanThamDinhIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDToListAsync()
        {
            List<PlanThamDinhCompanyProductGroup> result = new List<PlanThamDinhCompanyProductGroup>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyProductGroupService.GetByPlanThamDinhIDToListAsync(model.PlanThamDinhID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhIDAndEmptyToListAsync")]
        public async Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDAndEmptyToListAsync()
        {
            List<PlanThamDinhCompanyProductGroup> result = new List<PlanThamDinhCompanyProductGroup>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyProductGroupService.GetByPlanThamDinhIDAndEmptyToListAsync(model.PlanThamDinhID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

