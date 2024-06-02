namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyGroupController : BaseController<CompanyGroup, ICompanyGroupService>
	{
		private readonly ICompanyGroupService _CompanyGroupService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyGroupController(ICompanyGroupService CompanyGroupService, IWebHostEnvironment WebHostEnvironment) : base(CompanyGroupService, WebHostEnvironment)
		{
			_CompanyGroupService = CompanyGroupService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<company_group>("company_group");
				var filter = Builders<company_group>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_group> list = document.ToList();
					foreach (var item in list)
					{
						CompanyGroup itemSave = new CompanyGroup();
						itemSave.uid = item.uid.Value.ToString();
						itemSave.Name = item.name;
						await _CompanyGroupService.SaveAsync(itemSave);
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

