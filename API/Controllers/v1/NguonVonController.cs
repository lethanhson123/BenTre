namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class NguonVonController : BaseController<NguonVon, INguonVonService>
	{
		private readonly INguonVonService _NguonVonService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public NguonVonController(INguonVonService NguonVonService, IWebHostEnvironment WebHostEnvironment) : base(NguonVonService, WebHostEnvironment)
		{
			_NguonVonService = NguonVonService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<nguon_von>("nguon_von");
				var filter = Builders<nguon_von>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<nguon_von> list = document.ToList();
					foreach (var item in list)
					{
						NguonVon itemSave = new NguonVon();
						itemSave.uid = item.uid;
						itemSave.Name = item.title;
						itemSave.fromby = item.fromby;	
						itemSave.from_date = item.from_date;
						itemSave.to_date = item.to_date;
						itemSave.status_id = item.status_id;
						itemSave.total_money_trieu = item.total_money_trieu;
						itemSave.Note = item.notes;

						await _NguonVonService.SaveAsync(itemSave);
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

        [HttpPost]
        [Route("GetByNam_ActiveToListAsync")]
        public async Task<List<NguonVon>> GetByNam_ActiveToListAsync()
        {
            List<NguonVon> result = new List<NguonVon>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _NguonVonService.GetByNam_ActiveToListAsync(model.Nam.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

