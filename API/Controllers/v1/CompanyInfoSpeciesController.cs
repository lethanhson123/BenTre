namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoSpeciesController : BaseController<CompanyInfoSpecies, ICompanyInfoSpeciesService>
	{
		private readonly ICompanyInfoSpeciesService _CompanyInfoSpeciesService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoSpeciesController(ICompanyInfoSpeciesService CompanyInfoSpeciesService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoSpeciesService, WebHostEnvironment)
		{
			_CompanyInfoSpeciesService = CompanyInfoSpeciesService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

