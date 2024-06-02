namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ThanhVienLichSuThongBaoController : BaseController<ThanhVienLichSuThongBao, IThanhVienLichSuThongBaoService>
    {
        private readonly IThanhVienLichSuThongBaoService _ThanhVienLichSuThongBaoService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public ThanhVienLichSuThongBaoController(IThanhVienLichSuThongBaoService ThanhVienLichSuThongBaoService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienLichSuThongBaoService, WebHostEnvironment)
        {
            _ThanhVienLichSuThongBaoService = ThanhVienLichSuThongBaoService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetByFileNameToListAsync")]
        public async Task<List<ThanhVienLichSuThongBao>> GetByFileNameToListAsync()
        {
            List<ThanhVienLichSuThongBao> result = new List<ThanhVienLichSuThongBao>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ThanhVienLichSuThongBaoService.GetByFileNameToListAsync(model.TypeName);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

