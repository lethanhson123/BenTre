namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoProductGroupsController : BaseController<CompanyInfoProductGroups, ICompanyInfoProductGroupsService>
	{
		private readonly ICompanyInfoProductGroupsService _CompanyInfoProductGroupsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoProductGroupsController(ICompanyInfoProductGroupsService CompanyInfoProductGroupsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoProductGroupsService, WebHostEnvironment)
		{
			_CompanyInfoProductGroupsService = CompanyInfoProductGroupsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

