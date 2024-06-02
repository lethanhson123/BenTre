
namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class AgencyMenuController : BaseController<AgencyMenu, IAgencyMenuService>
	{
		private readonly IAgencyMenuService _AgencyMenuService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public AgencyMenuController(IAgencyMenuService AgencyMenuService, IWebHostEnvironment WebHostEnvironment) : base(AgencyMenuService, WebHostEnvironment)
		{
			_AgencyMenuService = AgencyMenuService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<agency_menu>("agency_menu");
				var filter = Builders<agency_menu>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<agency_menu> list = document.ToList();
					foreach (var item in list)
					{
						AgencyMenu itemSave = new AgencyMenu();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.path_url = item.path_url;
						itemSave.image_path = item.image_path;
						itemSave.color_str = item.color_str;
						itemSave.is_mobile = item.is_mobile;
						await _AgencyMenuService.SaveAsync(itemSave);
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

