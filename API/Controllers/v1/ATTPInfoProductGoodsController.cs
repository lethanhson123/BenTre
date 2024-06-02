namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ATTPInfoProductGoodsController : BaseController<ATTPInfoProductGoods, IATTPInfoProductGoodsService>
    {
    private readonly IATTPInfoProductGoodsService _ATTPInfoProductGoodsService;
    private readonly IWebHostEnvironment _WebHostEnvironment;
    public ATTPInfoProductGoodsController(IATTPInfoProductGoodsService ATTPInfoProductGoodsService, IWebHostEnvironment WebHostEnvironment) : base(ATTPInfoProductGoodsService, WebHostEnvironment)
    {
    _ATTPInfoProductGoodsService = ATTPInfoProductGoodsService;
    _WebHostEnvironment = WebHostEnvironment;
    }
    }
    }

