namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoDonViDongGoiController : BaseController<CompanyInfoDonViDongGoi, ICompanyInfoDonViDongGoiService>
    {
        private readonly ICompanyInfoDonViDongGoiService _CompanyInfoDonViDongGoiService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public CompanyInfoDonViDongGoiController(ICompanyInfoDonViDongGoiService CompanyInfoDonViDongGoiService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoDonViDongGoiService, WebHostEnvironment)
        {
            _CompanyInfoDonViDongGoiService = CompanyInfoDonViDongGoiService;
            _WebHostEnvironment = WebHostEnvironment;
        }

        [HttpPost]
        [Route("GetBySearchString_DanhMucATTPTinhTrangIDToListAsync")]
        public async Task<List<CompanyInfoDonViDongGoi>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync()
        {
            List<CompanyInfoDonViDongGoi> result = new List<CompanyInfoDonViDongGoi>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoDonViDongGoiService.GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(model.SearchString, model.DanhMucATTPTinhTrangID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }

        [HttpPost]
        [Route("GetByDanhMucATTPTinhTrangID_ActiveToListAsync")]
        public async Task<List<CompanyInfoDonViDongGoi>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync()
        {
            List<CompanyInfoDonViDongGoi> result = new List<CompanyInfoDonViDongGoi>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoDonViDongGoiService.GetByDanhMucATTPTinhTrangID_ActiveToListAsync(model.DanhMucATTPTinhTrangID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

