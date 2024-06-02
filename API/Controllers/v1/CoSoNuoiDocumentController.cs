namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CoSoNuoiDocumentController : BaseController<CoSoNuoiDocument, ICoSoNuoiDocumentService>
	{
		private readonly ICoSoNuoiDocumentService _CoSoNuoiDocumentService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public CoSoNuoiDocumentController(ICoSoNuoiDocumentService CoSoNuoiDocumentService, IWebHostEnvironment WebHostEnvironment) : base(CoSoNuoiDocumentService, WebHostEnvironment)
		{
			_CoSoNuoiDocumentService = CoSoNuoiDocumentService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<cosonuoi_document>("cosonuoi_document");
				var filter = Builders<cosonuoi_document>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<cosonuoi_document> list = document.ToList();
					foreach (var item in list)
					{
						CoSoNuoiDocument itemSave = new CoSoNuoiDocument();
						itemSave.register_id = item.register_id;
						itemSave.document_name = item.document_name;
						itemSave.document_id = item.document_id;
						itemSave.status_id = item.status_id;
						itemSave.file_mau = item.file_mau;
						itemSave.Note = item.notes;

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

						await _CoSoNuoiDocumentService.SaveAsync(itemSave);
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

