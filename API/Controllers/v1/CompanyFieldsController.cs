namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyFieldsController : BaseController<CompanyFields, ICompanyFieldsService>
	{
		private readonly ICompanyFieldsService _CompanyFieldsService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyFieldsController(ICompanyFieldsService CompanyFieldsService, IWebHostEnvironment WebHostEnvironment) : base(CompanyFieldsService, WebHostEnvironment)
		{
			_CompanyFieldsService = CompanyFieldsService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<company_fields>("company_fields");
				var filter = Builders<company_fields>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_fields> list = document.ToList();
					foreach (var item in list)
					{
						CompanyFields itemSave = new CompanyFields();
						itemSave.uid = item.uid.Value.ToString();					
						itemSave.Name = item.name;
						await _CompanyFieldsService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{							
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

