namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class DistrictDataController : BaseController<DistrictData, IDistrictDataService>
	{
		private readonly IDistrictDataService _DistrictDataService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public DistrictDataController(IDistrictDataService DistrictDataService, IWebHostEnvironment WebHostEnvironment) : base(DistrictDataService, WebHostEnvironment)
		{
			_DistrictDataService = DistrictDataService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<district_data>("district_data");
				var filter = Builders<district_data>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<district_data> list = document.ToList();
					foreach (var item in list)
					{
						DistrictData itemSave = new DistrictData();
						itemSave.district_id = item.district_id;
						itemSave.Code = item.code;
						itemSave.Name = item.name;
						itemSave.division_type = item.division_type;
						itemSave.short_code = item.short_code;
						itemSave.province_id = item.province_id;
						itemSave.is_nt2mv = item.is_nt2mv;
						itemSave.Active = item.is_nt2mv;

						await _DistrictDataService.SaveAsync(itemSave);
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

