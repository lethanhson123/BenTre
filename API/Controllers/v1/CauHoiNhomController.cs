namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CauHoiNhomController : BaseController<CauHoiNhom, ICauHoiNhomService>
	{
		private readonly ICauHoiNhomService _CauHoiNhomService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CauHoiNhomController(ICauHoiNhomService CauHoiNhomService, IWebHostEnvironment WebHostEnvironment) : base(CauHoiNhomService, WebHostEnvironment)
		{
			_CauHoiNhomService = CauHoiNhomService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<cauhoinhom>("cauhoinhom");
				var filter = Builders<cauhoinhom>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<cauhoinhom> list = document.ToList();
					foreach (var item in list)
					{
						CauHoiNhom itemSave = new CauHoiNhom();
						itemSave.uid = item.uid.Value.ToString();
						itemSave.Name = item.title;						
						await _CauHoiNhomService.SaveAsync(itemSave);
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

