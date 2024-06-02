namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ProvinceDataController : BaseController<ProvinceData, IProvinceDataService>
	{
		private readonly IProvinceDataService _ProvinceDataService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public ProvinceDataController(IProvinceDataService ProvinceDataService, IWebHostEnvironment WebHostEnvironment) : base(ProvinceDataService, WebHostEnvironment)
		{
			_ProvinceDataService = ProvinceDataService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<province_data>("province_data");
				var filter = Builders<province_data>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<province_data> list = document.ToList();
					foreach (var item in list)
					{
						ProvinceData itemSave = new ProvinceData();
						itemSave.province_id = item.province_id;
						itemSave.Code = item.code;
						itemSave.Name = item.name;
						itemSave.phone_code = item.phone_code;

						await _ProvinceDataService.SaveAsync(itemSave);

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

