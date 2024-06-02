namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoStateAgencyController : BaseController<CompanyInfoStateAgency, ICompanyInfoStateAgencyService>
	{
		private readonly ICompanyInfoStateAgencyService _CompanyInfoStateAgencyService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoStateAgencyController(ICompanyInfoStateAgencyService CompanyInfoStateAgencyService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoStateAgencyService, WebHostEnvironment)
		{
			_CompanyInfoStateAgencyService = CompanyInfoStateAgencyService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

