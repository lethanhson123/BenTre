namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class WardDataController : BaseController<WardData, IWardDataService>
	{
		private readonly IWardDataService _WardDataService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public WardDataController(IWardDataService WardDataService, IWebHostEnvironment WebHostEnvironment) : base(WardDataService, WebHostEnvironment)
		{
			_WardDataService = WardDataService;
			_WebHostEnvironment = WebHostEnvironment;
		}

		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<ward_data>("ward_data");
				var filter = Builders<ward_data>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<ward_data> list = document.ToList();
					foreach (var item in list)
					{
						WardData itemSave = new WardData();
						itemSave.ward_id = item.ward_id;
						itemSave.Code = item.code;
						itemSave.Name = item.name;
						itemSave.division_type = item.division_type;
						itemSave.short_code = item.short_code;
						itemSave.district_id = item.district_id;
						await _WardDataService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
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

