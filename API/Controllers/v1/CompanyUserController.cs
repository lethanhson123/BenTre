namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyUserController : BaseController<CompanyUser, ICompanyUserService>
	{
		private readonly ICompanyUserService _CompanyUserService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CompanyUserController(ICompanyUserService CompanyUserService, IWebHostEnvironment WebHostEnvironment) : base(CompanyUserService, WebHostEnvironment)
		{
			_CompanyUserService = CompanyUserService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<company_user>("company_user");
				var filter = Builders<company_user>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_user> list = document.ToList();
					foreach (var item in list)
					{
						CompanyUser itemSave = new CompanyUser();
						itemSave.username = item.username;
						itemSave.fullname = item.fullname;
						itemSave.email = item.email;
						itemSave.phone = item.phone;
						itemSave.password_salt = item.password_salt;
						itemSave.password_hash = item.password_hash;
						itemSave.company_id = item.company_id;
						itemSave.Active = item.is_active;
						itemSave.role_id = item.role_id;

						await _CompanyUserService.SaveAsync(itemSave);
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

