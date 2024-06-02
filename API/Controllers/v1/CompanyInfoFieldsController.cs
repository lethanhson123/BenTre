namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoFieldsController : BaseController<CompanyInfoFields, ICompanyInfoFieldsService>
	{
		private readonly ICompanyInfoFieldsService _CompanyInfoFieldsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoFieldsController(ICompanyInfoFieldsService CompanyInfoFieldsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoFieldsService, WebHostEnvironment)
		{
			_CompanyInfoFieldsService = CompanyInfoFieldsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

