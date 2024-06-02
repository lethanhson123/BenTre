namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyStaffExamController : BaseController<CompanyStaffExam, ICompanyStaffExamService>
	{
		private readonly ICompanyStaffExamService _CompanyStaffExamService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly ICompanyStaffExamAnswersService _CompanyStaffExamAnswersService;
		public CompanyStaffExamController(ICompanyStaffExamService CompanyStaffExamService
			, IWebHostEnvironment WebHostEnvironment
			
			, ICompanyStaffExamAnswersService CompanyStaffExamAnswersService
			
			) : base(CompanyStaffExamService, WebHostEnvironment)
		{
			_CompanyStaffExamService = CompanyStaffExamService;
			_WebHostEnvironment = WebHostEnvironment;
			_CompanyStaffExamAnswersService = CompanyStaffExamAnswersService;
		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<company_staff_exam>("company_staff_exam");
				var filter = Builders<company_staff_exam>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_staff_exam> list = document.ToList();
					foreach (var item in list)
					{
						CompanyStaffExam itemSave = new CompanyStaffExam();
						itemSave.fullname = item.fullname;
						itemSave.identity_card = item.identity_card;
						itemSave.phone = item.phone;
						itemSave.point = item.point;
						itemSave.role_name = item.role_name;
						itemSave.exam_id = item.exam_id;						

						await _CompanyStaffExamService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
							if (item.answers != null)
							{
								foreach (var uid in item.answers)
								{
									CompanyStaffExamAnswers companyStaffExamAnswers = new CompanyStaffExamAnswers();
									companyStaffExamAnswers.ParentID = itemSave.ID;
									companyStaffExamAnswers.question_id = uid.question_id;
									companyStaffExamAnswers.answer_id = uid.answer_id;
									await _CompanyStaffExamAnswersService.SaveAsync(companyStaffExamAnswers);
								}
							}
						}
					}
				}
			}
			catch (Exception ex)
			{
				result = ex.Message;
			}
			return result;
		}
	}
}

