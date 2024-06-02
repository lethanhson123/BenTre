namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoGroupsController : BaseController<CompanyInfoGroups, ICompanyInfoGroupsService>
	{
		private readonly ICompanyInfoGroupsService _CompanyInfoGroupsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoGroupsController(ICompanyInfoGroupsService CompanyInfoGroupsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoGroupsService, WebHostEnvironment)
		{
			_CompanyInfoGroupsService = CompanyInfoGroupsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

