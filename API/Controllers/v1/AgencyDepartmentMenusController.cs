namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class AgencyDepartmentMenusController : BaseController<AgencyDepartmentMenus, IAgencyDepartmentMenusService>
	{
		private readonly IAgencyDepartmentMenusService _AgencyDepartmentMenusService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public AgencyDepartmentMenusController(IAgencyDepartmentMenusService AgencyDepartmentMenusService, IWebHostEnvironment WebHostEnvironment) : base(AgencyDepartmentMenusService, WebHostEnvironment)
		{
			_AgencyDepartmentMenusService = AgencyDepartmentMenusService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

