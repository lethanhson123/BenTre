namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanTypeController : BaseController<PlanType, IPlanTypeService>
    {
    private readonly IPlanTypeService _PlanTypeService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public PlanTypeController(IPlanTypeService PlanTypeService, IWebHostEnvironment WebHostEnvironment) : base(PlanTypeService, WebHostEnvironment)
    {
    _PlanTypeService = PlanTypeService;
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
                var collection = client.GetDatabase("bentredb").GetCollection<plan_type>("plan_type");
                var filter = Builders<plan_type>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<plan_type> list = document.ToList();
                    foreach (var item in list)
                    {
                        PlanType itemSave = new PlanType();
                        itemSave.uid= item.uid;
                        itemSave.Name = item.name;
                        itemSave.Active = item.is_update;

                        await _PlanTypeService.SaveAsync(itemSave);
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

