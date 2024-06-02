using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;

namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ProductGroupController : BaseController<ProductGroup, IProductGroupService>
	{
		private readonly IProductGroupService _ProductGroupService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public ProductGroupController(IProductGroupService ProductGroupService, IWebHostEnvironment WebHostEnvironment) : base(ProductGroupService, WebHostEnvironment)
		{
			_ProductGroupService = ProductGroupService;
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
				var collection = client.GetDatabase("bentredb").GetCollection<product_group>("product_group");
				var filter = Builders<product_group>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<product_group> list = document.ToList();
					foreach (var item in list)
					{
						ProductGroup itemSave = new ProductGroup();

						itemSave.uid = item.uid;
						itemSave = await _ProductGroupService.GetByuidAsync(itemSave.uid);

						itemSave.uid = item.uid;
						itemSave.Name = item.name;
						itemSave.type_id = item.type_id;

						await _ProductGroupService.SaveAsync(itemSave);
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

