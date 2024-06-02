namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoVungTrongController : BaseController<CompanyInfoVungTrong, ICompanyInfoVungTrongService>
    {
        private readonly ICompanyInfoVungTrongService _CompanyInfoVungTrongService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public CompanyInfoVungTrongController(ICompanyInfoVungTrongService CompanyInfoVungTrongService, IWebHostEnvironment WebHostEnvironment) : base(CompanyInfoVungTrongService, WebHostEnvironment)
        {
            _CompanyInfoVungTrongService = CompanyInfoVungTrongService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetBySearchString_DanhMucATTPTinhTrangIDToListAsync")]
        public async Task<List<CompanyInfoVungTrong>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync()
        {
            List<CompanyInfoVungTrong> result = new List<CompanyInfoVungTrong>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoVungTrongService.GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(model.SearchString, model.DanhMucATTPTinhTrangID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }

        [HttpPost]
        [Route("GetByDanhMucATTPTinhTrangID_ActiveToListAsync")]
        public async Task<List<CompanyInfoVungTrong>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync()
        {
            List<CompanyInfoVungTrong> result = new List<CompanyInfoVungTrong>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoVungTrongService.GetByDanhMucATTPTinhTrangID_ActiveToListAsync(model.DanhMucATTPTinhTrangID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

