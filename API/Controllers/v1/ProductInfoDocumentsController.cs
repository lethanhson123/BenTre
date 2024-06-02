namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ProductInfoDocumentsController : BaseController<ProductInfoDocuments, IProductInfoDocumentsService>
    {
    private readonly IProductInfoDocumentsService _ProductInfoDocumentsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ProductInfoDocumentsController(IProductInfoDocumentsService ProductInfoDocumentsService, IWebHostEnvironment WebHostEnvironment) : base(ProductInfoDocumentsService, WebHostEnvironment)
    {
    _ProductInfoDocumentsService = ProductInfoDocumentsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

