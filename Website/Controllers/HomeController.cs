
namespace Website.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IKienThucATTPService _KienThucATTPService;
        private readonly IReportService _ReportService;
        public HomeController(ILogger<HomeController> logger

            , IKienThucATTPService kienThucATTPService
            , IReportService ReportService
            )
        {
            _logger = logger;
            _KienThucATTPService = kienThucATTPService;
            _ReportService = ReportService;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Tag(string SearchString)
        {
            ViewModel model = new ViewModel();
            model.SearchString = SearchString;
            return View(model);
        }
        public IActionResult Detail(string Code, long ID)
        {
            KienThucATTP model = _KienThucATTPService.GetByID(ID);
            return View(model);
        }          
        public IActionResult Search()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }


    }
}
