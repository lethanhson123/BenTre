namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ProductInfoController : BaseController<ProductInfo, IProductInfoService>
    {
        private readonly IProductInfoService _ProductInfoService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public ProductInfoController(IProductInfoService ProductInfoService, IWebHostEnvironment WebHostEnvironment) : base(ProductInfoService, WebHostEnvironment)
        {
            _ProductInfoService = ProductInfoService;
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
                var collection = client.GetDatabase("bentredb").GetCollection<product_info>("product_info");
                var filter = Builders<product_info>.Filter.Empty;
                using (var document = collection.Find(filter).ToCursor())
                {
                    List<product_info> list = document.ToList();
                    foreach (var item in list)
                    {
                        ProductInfo itemSave = new ProductInfo();
                        itemSave.uid = item.uid;
                        itemSave.Name = item.name;
                        itemSave.Code = item.code;
                        itemSave.gs1_code = item.gs1_code;
                        itemSave.group_id = item.group_id;
                        itemSave.species_id = item.species_id;
                        itemSave.company_id = item.company_id;
                        itemSave.unit_id = item.unit_id;
                        itemSave.unit_name = item.unit_name;
                        itemSave.Active = item.is_delete;
                        itemSave.is_public = item.is_public;
                        itemSave.congbo_note = item.congbo_note;
                        itemSave.CreatedDate = item.modify_on;
                        itemSave.congbo_date = item.congbo_date;
                        itemSave.send_note = item.send_note;
                        itemSave.create_on = item.create_on;
                        itemSave.send_date = item.send_date;

                        if (item.price != null)
                        {
                            itemSave.price_val = item.price.price_val;
                            itemSave.price_min = item.price.price_min;
                            itemSave.price_max = item.price.price_max;

                        }

                        if (item.file_congbo != null)
                        {
                            itemSave.file_name = item.file_congbo.file_name;
                            itemSave.file_id = item.file_congbo.file_id;
                            itemSave.file_path = item.file_congbo.file_path;
                            itemSave.server_upload = item.file_congbo.server_upload;
                            itemSave.provider = item.file_congbo.provider;
                            itemSave.size_kb = item.file_congbo.size_kb;
                            itemSave.document_name = item.file_congbo.document_name;
                            itemSave.document_type = item.file_congbo.document_type;
                            itemSave.mine_type = item.file_congbo.mine_type;
                            itemSave.ext = item.file_congbo.ext;
                        }

                        await _ProductInfoService.SaveAsync(itemSave);


                        if (itemSave.ID > 0)
                        {

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
        [Route("GetByBatDau_KetThucToListAsync")]
        public async Task<List<ProductInfo>> GetByBatDau_KetThucToListAsync()
        {
            List<ProductInfo> result = new List<ProductInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ProductInfoService.GetByBatDau_KetThucToListAsync(model.BatDau.Value, model.KetThuc.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

