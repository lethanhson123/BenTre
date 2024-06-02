namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyLakeController : BaseController<CompanyLake, ICompanyLakeService>
	{
		private readonly ICompanyLakeService _CompanyLakeService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyLakeController(ICompanyLakeService CompanyLakeService, IWebHostEnvironment WebHostEnvironment) : base(CompanyLakeService, WebHostEnvironment)
		{
			_CompanyLakeService = CompanyLakeService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<company_lake>("company_lake");
				var filter = Builders<company_lake>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_lake> list = document.ToList();
					foreach (var item in list)
					{
						CompanyLake itemSave = new CompanyLake();
						itemSave.uid = item.uid;
						itemSave.company_id = item.company_id;
						itemSave.acreage = item.acreage;
						itemSave.unit_id = item.unit_id;
						itemSave.unit_name = item.unit_name;
						itemSave.Name = item.title;
						itemSave.Code = item.code;
						itemSave.species_name = item.species_name;
						itemSave.species_id = item.species_id;
						itemSave.latitude = item.latitude;
						itemSave.longitude = item.longitude;
						itemSave.district_id = item.district_id;
						itemSave.ward_id = item.ward_id;
						itemSave.hamlet = item.hamlet;
						itemSave.address = item.address;
						itemSave.type_id = item.type_id;						

						await _CompanyLakeService.SaveAsync(itemSave);
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

