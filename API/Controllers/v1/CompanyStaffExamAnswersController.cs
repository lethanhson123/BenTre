namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyStaffExamAnswersController : BaseController<CompanyStaffExamAnswers, ICompanyStaffExamAnswersService>
	{
		private readonly ICompanyStaffExamAnswersService _CompanyStaffExamAnswersService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyStaffExamAnswersController(ICompanyStaffExamAnswersService CompanyStaffExamAnswersService, IWebHostEnvironment WebHostEnvironment) : base(CompanyStaffExamAnswersService, WebHostEnvironment)
		{
			_CompanyStaffExamAnswersService = CompanyStaffExamAnswersService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		[HttpPost]
		[Route("GetSQLByCompanyExaminationID_ThanhVienIDToListAsync")]
		public async Task<List<CompanyStaffExamAnswers>> GetSQLByCompanyExaminationID_ThanhVienIDToListAsync()
		{
			List<CompanyStaffExamAnswers> result = new List<CompanyStaffExamAnswers>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _CompanyStaffExamAnswersService.GetSQLByCompanyExaminationID_ThanhVienIDToListAsync(model.CompanyExaminationID.Value, model.ThanhVienID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
	}
}

