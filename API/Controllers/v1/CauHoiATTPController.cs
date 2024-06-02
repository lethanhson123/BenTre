namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CauHoiATTPController : BaseController<CauHoiATTP, ICauHoiATTPService>
	{
		private readonly ICauHoiATTPService _CauHoiATTPService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly ICauHoiATTPQuestionsService _CauHoiATTPQuestionsService;
        
        public CauHoiATTPController(ICauHoiATTPService CauHoiATTPService
			, IWebHostEnvironment WebHostEnvironment

			, ICauHoiATTPQuestionsService CauHoiATTPQuestionsService

			) : base(CauHoiATTPService, WebHostEnvironment)
		{
			_CauHoiATTPService = CauHoiATTPService;
			_WebHostEnvironment = WebHostEnvironment;

			_CauHoiATTPQuestionsService = CauHoiATTPQuestionsService;
		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<cau_hoi_attp>("cau_hoi_attp");
				var filter = Builders<cau_hoi_attp>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<cau_hoi_attp> list = document.ToList();
					foreach (var item in list)
					{
						CauHoiATTP itemSave = new CauHoiATTP();
						//itemSave.uid = item.uid;
						//itemSave.Name = item.title;
						//itemSave.group_id = item.group_id;
						itemSave = await _CauHoiATTPService.GetByuidAsync(item.uid);
						if (itemSave.ID > 0)
						{
							if (item.questions != null)
							{
								foreach (var itemSub in item.questions)
								{
									CauHoiATTPQuestions cauHoiATTPQuestions = new CauHoiATTPQuestions();
									cauHoiATTPQuestions.ParentID = itemSave.ID;
									//cauHoiATTPQuestions.uid = itemSub.uid.Value.ToString();
									cauHoiATTPQuestions.Name = itemSub.title;
									cauHoiATTPQuestions.is_ans = itemSub.is_ans;
									await _CauHoiATTPQuestionsService.SaveAsync(cauHoiATTPQuestions);
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

