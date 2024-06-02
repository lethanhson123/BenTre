namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class KienThucATTPController : BaseController<KienThucATTP, IKienThucATTPService>
	{
		private readonly IKienThucATTPService _KienThucATTPService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public KienThucATTPController(IKienThucATTPService KienThucATTPService, IWebHostEnvironment WebHostEnvironment) : base(KienThucATTPService, WebHostEnvironment)
		{
			_KienThucATTPService = KienThucATTPService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<kien_thuc_attp>("kien_thuc_attp");
				var filter = Builders<kien_thuc_attp>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<kien_thuc_attp> list = document.ToList();
					foreach (var item in list)
					{
						KienThucATTP itemSave = new KienThucATTP();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.group_id = item.group_id;
						itemSave.Description = item.short_des;
						itemSave.HTMLContent = item.content;						
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

						await _KienThucATTPService.SaveAsync(itemSave);
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

