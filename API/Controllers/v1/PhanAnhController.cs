namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PhanAnhController : BaseController<PhanAnh, IPhanAnhService>
    {
        private readonly IPhanAnhService _PhanAnhService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public PhanAnhController(IPhanAnhService PhanAnhService, IWebHostEnvironment WebHostEnvironment) : base(PhanAnhService, WebHostEnvironment)
        {
            _PhanAnhService = PhanAnhService;
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
                var collection = client.GetDatabase("bentredb").GetCollection<phananh>("phananh");
                var filter = Builders<phananh>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<phananh> list = document.ToList();
                    foreach (var item in list)
                    {
                        PhanAnh itemSave = new PhanAnh();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.title;
                        itemSave.group_id = item.group_id;
                        itemSave.fullname = item.fullname;
                        itemSave.phone = item.phone;
                        itemSave.email = item.email;
                        itemSave.HTMLContent = item.contents;
                        itemSave.status_id = item.status_id;
                        itemSave.CreatedDate = item.create_on;
                        itemSave.LastUpdatedDate = item.modify_on;
                        await _PhanAnhService.SaveAsync(itemSave);
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

