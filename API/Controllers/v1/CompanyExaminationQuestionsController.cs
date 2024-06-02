namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyExaminationQuestionsController : BaseController<CompanyExaminationQuestions, ICompanyExaminationQuestionsService>
	{
		private readonly ICompanyExaminationQuestionsService _CompanyExaminationQuestionsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyExaminationQuestionsController(ICompanyExaminationQuestionsService CompanyExaminationQuestionsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyExaminationQuestionsService, WebHostEnvironment)
		{
			_CompanyExaminationQuestionsService = CompanyExaminationQuestionsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

