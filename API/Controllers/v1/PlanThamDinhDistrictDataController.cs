namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhDistrictDataController : BaseController<PlanThamDinhDistrictData, IPlanThamDinhDistrictDataService>
    {
        private readonly IPlanThamDinhDistrictDataService _PlanThamDinhDistrictDataService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PlanThamDinhDistrictDataController(IPlanThamDinhDistrictDataService PlanThamDinhDistrictDataService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhDistrictDataService, WebHostEnvironment)
        {
            _PlanThamDinhDistrictDataService = PlanThamDinhDistrictDataService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

