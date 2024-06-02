namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class AgencyUserController : BaseController<AgencyUser, IAgencyUserService>
	{
		private readonly IAgencyUserService _AgencyUserService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public AgencyUserController(IAgencyUserService AgencyUserService, IWebHostEnvironment WebHostEnvironment) : base(AgencyUserService, WebHostEnvironment)
		{
			_AgencyUserService = AgencyUserService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<agency_user>("agency_user");
				var filter = Builders<agency_user>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<agency_user> list = document.ToList();
					foreach (var item in list)
					{
						AgencyUser itemSave = new AgencyUser();
						itemSave.uid = item.uid;
						itemSave.Name = item.name;
						itemSave.agency_id = item.agency_id;
						itemSave.type_id = item.type_id;
						itemSave.username = item.username;
						itemSave.password_salt = item.password_salt;
						itemSave.password_hash = item.password_hash;
						itemSave.phone = item.phone;
						itemSave.email = item.email;
						itemSave.status_id = item.status_id;
						itemSave.role_name = item.role_name;
						itemSave.Description = item.descriptions;
						itemSave.department_id = item.department_id;						
						await _AgencyUserService.SaveAsync(itemSave);
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

