namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyScopeController : BaseController<CompanyScope, ICompanyScopeService>
	{
		private readonly ICompanyScopeService _CompanyScopeService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyScopeController(ICompanyScopeService CompanyScopeService, IWebHostEnvironment WebHostEnvironment) : base(CompanyScopeService, WebHostEnvironment)
		{
			_CompanyScopeService = CompanyScopeService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<company_scope>("company_scope");
				var filter = Builders<company_scope>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_scope> list = document.ToList();
					foreach (var item in list)
					{
						CompanyScope itemSave = new CompanyScope();
						itemSave.uid = item.uid;					
						itemSave.Name = item.name;
						
						await _CompanyScopeService.SaveAsync(itemSave);
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

