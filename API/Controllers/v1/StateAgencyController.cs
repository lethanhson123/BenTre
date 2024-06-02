using Service.Implement;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class StateAgencyController : BaseController<StateAgency, IStateAgencyService>
    {
    private readonly IStateAgencyService _StateAgencyService;
    private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IStateAgencyMenusService _StateAgencyMenusService;
        public StateAgencyController(
        IStateAgencyService StateAgencyService
       , IWebHostEnvironment WebHostEnvironment
       , IStateAgencyMenusService StateAgencyMenusService
        ) : base(StateAgencyService, WebHostEnvironment)
    {
    _StateAgencyService = StateAgencyService;
    _WebHostEnvironment = WebHostEnvironment;

    _StateAgencyMenusService = StateAgencyMenusService;
        }
        [HttpPost]
        [Route("CovertAsync")]
        public virtual async Task<string> CovertAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
                var collection = client.GetDatabase("bentredb").GetCollection<state_agency>("state_agency");
                var filter = Builders<state_agency>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<state_agency> list = document.ToList();
                    foreach (var item in list)
                    {
                        StateAgency itemSave = new StateAgency();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.name;
                        itemSave.province_id = item.province_id;
                        itemSave.district_id = item.district_id;
                        itemSave.ward_id = item.ward_id;
                        itemSave.level_id = item.level_id;
                        itemSave.type_id = item.type_id;
                        itemSave.email = item.email;
                        itemSave.phone = item.phone;
                        itemSave.address = item.address;
                        itemSave.HTMLContent = item.descriptions;
                        itemSave.CreatedDate = item.create_on;
                        itemSave.LastUpdatedDate = item.modify_on;
                        await _StateAgencyService.SaveAsync(itemSave);
                        if (itemSave.ID > 0)
                        {
                            if (item.menus != null)
                            {
                                foreach (string uid in item.menus)
                                {
                                    StateAgencyMenus stateAgencyMenus = new StateAgencyMenus();
                                    stateAgencyMenus.ParentID = itemSave.ID;
                                    stateAgencyMenus.uid = uid;                             
                                    await _StateAgencyMenusService.SaveAsync(stateAgencyMenus);
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

