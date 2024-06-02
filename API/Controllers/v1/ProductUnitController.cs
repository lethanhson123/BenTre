namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ProductUnitController : BaseController<ProductUnit, IProductUnitService>
    {
    private readonly IProductUnitService _ProductUnitService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ProductUnitController(IProductUnitService ProductUnitService, IWebHostEnvironment WebHostEnvironment) : base(ProductUnitService, WebHostEnvironment)
    {
    _ProductUnitService = ProductUnitService;
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
                var collection = client.GetDatabase("bentredb").GetCollection<product_unit>("product_unit");
                var filter = Builders<product_unit>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<product_unit> list = document.ToList();
                    foreach (var item in list)
                    {
                        ProductUnit itemSave = new ProductUnit();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.name;

                        await _ProductUnitService.SaveAsync(itemSave);

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

