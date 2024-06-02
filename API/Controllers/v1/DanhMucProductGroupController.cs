namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DanhMucProductGroupController : BaseController<DanhMucProductGroup, IDanhMucProductGroupService>
    {
        private readonly IDanhMucProductGroupService _DanhMucProductGroupService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public DanhMucProductGroupController(IDanhMucProductGroupService DanhMucProductGroupService, IWebHostEnvironment WebHostEnvironment) : base(DanhMucProductGroupService, WebHostEnvironment)
        {
            _DanhMucProductGroupService = DanhMucProductGroupService;
            _WebHostEnvironment = WebHostEnvironment;
        }
    }
}

