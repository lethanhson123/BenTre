namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class SpeciesController : BaseController<Species, ISpeciesService>
    {
        private readonly ISpeciesService _SpeciesService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public SpeciesController(ISpeciesService SpeciesService
            , IWebHostEnvironment WebHostEnvironment

            ) : base(SpeciesService, WebHostEnvironment)
        {
            _SpeciesService = SpeciesService;
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
                var collection = client.GetDatabase("bentredb").GetCollection<species>("species");
                var filter = Builders<species>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<species> list = document.ToList();
                    foreach (var item in list)
                    {
                        Species itemSave = new Species();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.title;
                        itemSave.group_id = itemSave.group_id;
                        itemSave.family = item.family;
                        itemSave.scientific_name = item.scientific_name;
                        itemSave.Active = item.is_active;


                        await _SpeciesService.SaveAsync(itemSave);
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

