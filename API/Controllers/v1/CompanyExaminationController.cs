namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyExaminationController : BaseController<CompanyExamination, ICompanyExaminationService>
	{
		private readonly ICompanyExaminationService _CompanyExaminationService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly ICompanyExaminationQuestionsService _CompanyExaminationQuestionsService;
		public CompanyExaminationController(ICompanyExaminationService CompanyExaminationService
			, IWebHostEnvironment WebHostEnvironment
			
			, ICompanyExaminationQuestionsService CompanyExaminationQuestionsService
			
			) : base(CompanyExaminationService, WebHostEnvironment)
		{
			_CompanyExaminationService = CompanyExaminationService;
			_WebHostEnvironment = WebHostEnvironment;

			_CompanyExaminationQuestionsService = CompanyExaminationQuestionsService;
		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<company_examination>("company_examination");
				var filter = Builders<company_examination>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_examination> list = document.ToList();
					foreach (var item in list)
					{
						CompanyExamination itemSave = new CompanyExamination();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.company_id = item.company_id;
						itemSave.group_id = item.group_id;
						await _CompanyExaminationService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
							if (item.questions != null)
							{
								foreach (string uid in item.questions)
								{
									CompanyExaminationQuestions companyExaminationQuestions = new CompanyExaminationQuestions();
									companyExaminationQuestions.ParentID = itemSave.ID;
									companyExaminationQuestions.uid = uid;									
									await _CompanyExaminationQuestionsService.SaveAsync(companyExaminationQuestions);
								}
							}
						}
					}
				}
			}
			catch (Exception ex)
			{
				string message = ex.Message;
			}
			return result;
		}
	}
}

