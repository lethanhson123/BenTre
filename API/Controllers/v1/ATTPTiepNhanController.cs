namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ATTPTiepNhanController : BaseController<ATTPTiepNhan, IATTPTiepNhanService>
	{
		private readonly IATTPTiepNhanService _ATTPTiepNhanService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly IATTPTiepNhanDocumentsService _ATTPTiepNhanDocumentsService;
		private readonly IATTPTiepNhanProductGroupsService _ATTPTiepNhanProductGroupsService;
		public ATTPTiepNhanController(IATTPTiepNhanService ATTPTiepNhanService
			
			, IWebHostEnvironment WebHostEnvironment

			, IATTPTiepNhanDocumentsService ATTPTiepNhanDocumentsService
			, IATTPTiepNhanProductGroupsService ATTPTiepNhanProductGroupsService
			) : base(ATTPTiepNhanService, WebHostEnvironment)
		{
			_ATTPTiepNhanService = ATTPTiepNhanService;
			_WebHostEnvironment = WebHostEnvironment;

			_ATTPTiepNhanDocumentsService = ATTPTiepNhanDocumentsService;
			_ATTPTiepNhanProductGroupsService = ATTPTiepNhanProductGroupsService;
		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<attp_tiepnhan>("attp_tiepnhan");
				var filter = Builders<attp_tiepnhan>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<attp_tiepnhan> list = document.ToList();
					foreach (var item in list)
					{
						ATTPTiepNhan itemSave = new ATTPTiepNhan();
						itemSave.uid = item.uid;
						
						await _ATTPTiepNhanService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
							if (item.product_groups != null)
							{
								foreach (string uid in item.product_groups)
								{
									ATTPTiepNhanProductGroups aTTPTiepNhanProductGroups = new ATTPTiepNhanProductGroups();
									aTTPTiepNhanProductGroups.ParentID = itemSave.ID;
									aTTPTiepNhanProductGroups.uid = uid;									
									await _ATTPTiepNhanProductGroupsService.SaveAsync(aTTPTiepNhanProductGroups);
								}
							}
							if (item.documents != null)
							{
								foreach (var itemDocument in item.documents)
								{
									ATTPTiepNhanDocuments aTTPTiepNhanDocuments = new ATTPTiepNhanDocuments();
									aTTPTiepNhanDocuments.ParentID = itemSave.ID;
									aTTPTiepNhanDocuments.file_name = itemDocument.file_name;
									aTTPTiepNhanDocuments.file_id = itemDocument.file_id;
									aTTPTiepNhanDocuments.file_path = itemDocument.file_path;
									aTTPTiepNhanDocuments.server_upload = itemDocument.server_upload;
									aTTPTiepNhanDocuments.provider = itemDocument.provider;
									aTTPTiepNhanDocuments.size_kb = itemDocument.size_kb;
									aTTPTiepNhanDocuments.document_name = itemDocument.document_name;
									aTTPTiepNhanDocuments.document_type = itemDocument.document_type;
									aTTPTiepNhanDocuments.mine_type = itemDocument.mine_type;
									aTTPTiepNhanDocuments.ext = itemDocument.ext;
									await _ATTPTiepNhanDocumentsService.SaveAsync(aTTPTiepNhanDocuments);
								}
							}
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

