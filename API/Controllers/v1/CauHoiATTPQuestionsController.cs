namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CauHoiATTPQuestionsController : BaseController<CauHoiATTPQuestions, ICauHoiATTPQuestionsService>
	{
		private readonly ICauHoiATTPQuestionsService _CauHoiATTPQuestionsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CauHoiATTPQuestionsController(ICauHoiATTPQuestionsService CauHoiATTPQuestionsService, IWebHostEnvironment WebHostEnvironment) : base(CauHoiATTPQuestionsService, WebHostEnvironment)
		{
			_CauHoiATTPQuestionsService = CauHoiATTPQuestionsService;
			_WebHostEnvironment = WebHostEnvironment;
		}
	}
}

