namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class BienBanATTPController : BaseController<BienBanATTP, IBienBanATTPService>
	{
		private readonly IBienBanATTPService _BienBanATTPService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public BienBanATTPController(IBienBanATTPService BienBanATTPService, IWebHostEnvironment WebHostEnvironment) : base(BienBanATTPService, WebHostEnvironment)
		{
			_BienBanATTPService = BienBanATTPService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<bienban_attp>("bienban_attp");
				var filter = Builders<bienban_attp>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<bienban_attp> list = document.ToList();
					foreach (var item in list)
					{
						BienBanATTP itemSave = new BienBanATTP();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.HTMLContent = item.content;
						itemSave.type_id = item.type_id;
						itemSave.group_id = item.group_id;						
						await _BienBanATTPService.SaveAsync(itemSave);
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

