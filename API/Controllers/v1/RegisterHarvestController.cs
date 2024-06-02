namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class RegisterHarvestController : BaseController<RegisterHarvest, IRegisterHarvestService>
    {
        private readonly IRegisterHarvestService _RegisterHarvestService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IRegisterHarvestItemsService _RegisterHarvestItemsService;
        public RegisterHarvestController(IRegisterHarvestService RegisterHarvestService
            , IWebHostEnvironment WebHostEnvironment
            ,IRegisterHarvestItemsService registerHarvestItemsService) : base(RegisterHarvestService, WebHostEnvironment)
        {
            _RegisterHarvestService = RegisterHarvestService;
            _WebHostEnvironment = WebHostEnvironment;


            _RegisterHarvestItemsService = registerHarvestItemsService;
        }
        [HttpPost]
        [Route("CovertAsync")]
        public virtual async Task<string> CovertAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
                var collection = client.GetDatabase("bentredb").GetCollection<register_harvest>("register_harvest");
                var filter = Builders<register_harvest>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<register_harvest> list = document.ToList();
                    foreach (var item in list)
                    {
                        RegisterHarvest itemSave = new RegisterHarvest();
                        itemSave.from_date = item.from_date;
                        itemSave.to_date = item.to_date;
                        itemSave.species_id = item.species_id;
                        itemSave.species_name = item.species_name;
                        itemSave.company_id = item.company_id;
                        itemSave.count_kiemsoat = item.count_kiemsoat;
                        itemSave.uid = item.uid;
                        await _RegisterHarvestService.SaveAsync(itemSave);
                        if (itemSave.ID > 0)
                        {
                            if (item.items != null)
                            {
                                foreach (var itemSub in item.items)
                                {
                                    RegisterHarvestItems RegisterHarvestItems = new RegisterHarvestItems();
                                    RegisterHarvestItems.ParentID = itemSave.ID;
                                    RegisterHarvestItems.from_date = itemSub.from_date;
                                    RegisterHarvestItems.quantity = itemSub.quantity;
                                    RegisterHarvestItems.unit_id = itemSub.unit_id;
                                    RegisterHarvestItems.unit_name = itemSub.unit_name;
                                    RegisterHarvestItems.address = itemSub.address;
                                    RegisterHarvestItems.place_buy = itemSub.place_buy;
                                    RegisterHarvestItems.Note = itemSub.notes;
                                    RegisterHarvestItems.uid = itemSub.uid;
                                    RegisterHarvestItems.status_id = itemSub.status_id;
                                    RegisterHarvestItems.kiemsoat_id = itemSub.kiemsoat_id;
                                    await _RegisterHarvestItemsService.SaveAsync(RegisterHarvestItems);
                                 
                                }
                            }
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

