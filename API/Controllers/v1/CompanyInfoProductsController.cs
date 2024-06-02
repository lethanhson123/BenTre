namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoProductsController : BaseController<CompanyInfoProducts, ICompanyInfoProductsService>
	{
		private readonly ICompanyInfoProductsService _CompanyInfoProductsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyInfoProductsController(ICompanyInfoProductsService CompanyInfoProductsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoProductsService, WebHostEnvironment)
		{
			_CompanyInfoProductsService = CompanyInfoProductsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

