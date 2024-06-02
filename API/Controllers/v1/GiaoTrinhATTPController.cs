namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class GiaoTrinhATTPController : BaseController<GiaoTrinhATTP, IGiaoTrinhATTPService>
	{
		private readonly IGiaoTrinhATTPService _GiaoTrinhATTPService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public GiaoTrinhATTPController(IGiaoTrinhATTPService GiaoTrinhATTPService, IWebHostEnvironment WebHostEnvironment) : base(GiaoTrinhATTPService, WebHostEnvironment)
		{
			_GiaoTrinhATTPService = GiaoTrinhATTPService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<giaotrinh_attp>("giaotrinh_attp");
				var filter = Builders<giaotrinh_attp>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<giaotrinh_attp> list = document.ToList();
					foreach (var item in list)
					{
						GiaoTrinhATTP itemSave = new GiaoTrinhATTP();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.group_id = item.group_id;
						if (item.file_attach != null)
						{
							itemSave.file_name = item.file_attach.file_name;
							itemSave.file_id = item.file_attach.file_id;
							itemSave.file_path = item.file_attach.file_path;
							itemSave.server_upload = item.file_attach.server_upload;
							itemSave.provider = item.file_attach.provider;
							itemSave.size_kb = item.file_attach.size_kb;
							itemSave.document_name = item.file_attach.document_name;
							itemSave.document_type = item.file_attach.document_type;
							itemSave.mine_type = item.file_attach.mine_type;
							itemSave.ext = item.file_attach.ext;
						}

						await _GiaoTrinhATTPService.SaveAsync(itemSave);
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

