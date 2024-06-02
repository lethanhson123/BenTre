namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ATTPInfoController : BaseController<ATTPInfo, IATTPInfoService>
	{
		private readonly IATTPInfoService _ATTPInfoService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly IATTPInfoDocumentsService _ATTPInfoDocumentsService;
		private readonly IATTPInfoProductBadsService _ATTPInfoProductBadsService;
		private readonly IATTPInfoProductGoodsService _ATTPInfoProductGoodsService;
		private readonly IATTPInfoProductGroupsService _ATTPInfoProductGroupsService;
		private readonly IATTPInfoTimelinesService _ATTPInfoTimelinesService;
		public ATTPInfoController(IATTPInfoService ATTPInfoService

			, IWebHostEnvironment WebHostEnvironment

			, IATTPInfoDocumentsService ATTPInfoDocumentsService
			, IATTPInfoProductBadsService ATTPInfoProductBadsService
			, IATTPInfoProductGoodsService ATTPInfoProductGoodsService
			, IATTPInfoProductGroupsService ATTPInfoProductGroupsService
			, IATTPInfoTimelinesService ATTPInfoTimelinesService

			) : base(ATTPInfoService, WebHostEnvironment)
		{
			_ATTPInfoService = ATTPInfoService;
			_WebHostEnvironment = WebHostEnvironment;

			_ATTPInfoDocumentsService = ATTPInfoDocumentsService;
			_ATTPInfoProductBadsService = ATTPInfoProductBadsService;
			_ATTPInfoProductGoodsService = ATTPInfoProductGoodsService;
			_ATTPInfoProductGroupsService = ATTPInfoProductGroupsService;
			_ATTPInfoTimelinesService = ATTPInfoTimelinesService;

		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<attp_info>("attp_info");
				var filter = Builders<attp_info>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<attp_info> list = document.ToList();
					foreach (var item in list)
					{
						ATTPInfo itemSave = new ATTPInfo();
						itemSave.uid = item.uid;
						itemSave.Code = item.code;
						itemSave.company_id = item.company_id;
						itemSave.product_des = item.product_des;
						itemSave.reason_notes = item.reason_notes;
						itemSave.status_id = item.status_id;
						itemSave.create_from = item.create_from;
						itemSave.form_type_id = item.form_type_id;
						itemSave.send_date = item.send_date;
						itemSave.cer_level = item.cer_level;
						itemSave.agency_id = item.agency_id;
						itemSave.thamdinh_uid = item.thamdinh_uid;
						itemSave.cer_notes = item.cer_notes;
						itemSave.cer_begin_date = item.cer_begin_date;
						itemSave.cer_code = item.cer_code;
						if (item.cer_file != null)
						{
							itemSave.file_name = item.cer_file.file_name;
							itemSave.file_id = item.cer_file.file_id;
							itemSave.file_path = item.cer_file.file_path;
							itemSave.server_upload = item.cer_file.server_upload;
							itemSave.provider = item.cer_file.provider;
							itemSave.size_kb = item.cer_file.size_kb;
							itemSave.document_name = item.cer_file.document_name;
							itemSave.document_type = item.cer_file.document_type;
							itemSave.mine_type = item.cer_file.mine_type;
							itemSave.ext = item.cer_file.ext;
						}
						await _ATTPInfoService.SaveAsync(itemSave);

						if (itemSave.ID > 0)
						{
							if (item.product_groups != null)
							{
								foreach (string uid in item.product_groups)
								{
									ATTPInfoProductGroups aTTPInfoProductGroups = new ATTPInfoProductGroups();
									aTTPInfoProductGroups.ParentID = itemSave.ID;
									aTTPInfoProductGroups.uid = uid;
									await _ATTPInfoProductGroupsService.SaveAsync(aTTPInfoProductGroups);
								}
							}
							if (item.documents != null)
							{
								foreach (var itemDocument in item.documents)
								{
									ATTPInfoDocuments aTTPInfoDocuments = new ATTPInfoDocuments();
									aTTPInfoDocuments.ParentID = itemSave.ID;
									aTTPInfoDocuments.file_name = itemDocument.file_name;
									aTTPInfoDocuments.file_id = itemDocument.file_id;
									aTTPInfoDocuments.file_path = itemDocument.file_path;
									aTTPInfoDocuments.server_upload = itemDocument.server_upload;
									aTTPInfoDocuments.provider = itemDocument.provider;
									aTTPInfoDocuments.size_kb = itemDocument.size_kb;
									aTTPInfoDocuments.document_name = itemDocument.document_name;
									aTTPInfoDocuments.document_type = itemDocument.document_type;
									aTTPInfoDocuments.mine_type = itemDocument.mine_type;
									aTTPInfoDocuments.ext = itemDocument.ext;
									await _ATTPInfoDocumentsService.SaveAsync(aTTPInfoDocuments);
								}
							}
							if (item.timelines != null)
							{
								foreach (var attp_info_timelines in item.timelines)
								{
									ATTPInfoTimelines aTTPInfoTimelines = new ATTPInfoTimelines();
									aTTPInfoTimelines.ParentID = itemSave.ID;
									aTTPInfoTimelines.status_id = attp_info_timelines.status_id;
									aTTPInfoTimelines.Note = attp_info_timelines.notes;

									await _ATTPInfoTimelinesService.SaveAsync(aTTPInfoTimelines);
								}
							}
							if (item.product_bads != null)
							{
								foreach (string uid in item.product_bads)
								{
									ATTPInfoProductBads aTTPInfoProductBads = new ATTPInfoProductBads();
									aTTPInfoProductBads.ParentID = itemSave.ID;
									aTTPInfoProductBads.uid = uid;
									await _ATTPInfoProductBadsService.SaveAsync(aTTPInfoProductBads);
								}
							}
							if (item.product_goods != null)
							{
								foreach (string uid in item.product_goods)
								{
									ATTPInfoProductGoods aTTPInfoProductGoods = new ATTPInfoProductGoods();
									aTTPInfoProductGoods.ParentID = itemSave.ID;
									aTTPInfoProductGoods.uid = uid;
									await _ATTPInfoProductGoodsService.SaveAsync(aTTPInfoProductGoods);
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
		[HttpPost]
		[Route("GetBySearchString_DanhMucATTPTinhTrangIDToListAsync")]
		public async Task<List<ATTPInfo>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync()
		{
			List<ATTPInfo> result = new List<ATTPInfo>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ATTPInfoService.GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(model.SearchString, model.DanhMucATTPTinhTrangID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}

		[HttpPost]
		[Route("GetBySearchString_ParentID_DanhMucATTPLoaiHoSoID_DanhMucATTPTinhTrangID_DanhMucATTPXepLoaiIDToListAsync")]
		public async Task<List<ATTPInfo>> GetBySearchString_ParentID_DanhMucATTPLoaiHoSoID_DanhMucATTPTinhTrangID_DanhMucATTPXepLoaiIDToListAsync()
		{
			List<ATTPInfo> result = new List<ATTPInfo>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _ATTPInfoService.GetBySearchString_ParentID_DanhMucATTPLoaiHoSoID_DanhMucATTPTinhTrangID_DanhMucATTPXepLoaiIDToListAsync(model.SearchString, model.ParentID.Value, model.DanhMucATTPLoaiHoSoID.Value, model.DanhMucATTPTinhTrangID.Value, model.DanhMucATTPXepLoaiID.Value);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [HttpPost]
        [Route("GetByDanhMucATTPTinhTrangID_ActiveToListAsync")]
        public async Task<List<ATTPInfo>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync()
        {
            List<ATTPInfo> result = new List<ATTPInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ATTPInfoService.GetByDanhMucATTPTinhTrangID_ActiveToListAsync(model.DanhMucATTPTinhTrangID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

