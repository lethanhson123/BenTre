namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class ThanhVienThongBaoController : BaseController<ThanhVienThongBao, IThanhVienThongBaoService>
    {
        private readonly IThanhVienThongBaoService _ThanhVienThongBaoService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public ThanhVienThongBaoController(IThanhVienThongBaoService ThanhVienThongBaoService, IWebHostEnvironment WebHostEnvironment) : base(ThanhVienThongBaoService, WebHostEnvironment)
        {
            _ThanhVienThongBaoService = ThanhVienThongBaoService;
            _WebHostEnvironment = WebHostEnvironment;
        }
        [HttpPost]
        [Route("GetByThanhVienID_ReadJSONFileToListAsync")]
        public async Task<List<ThanhVienThongBao>> GetByThanhVienID_ReadJSONFileToListAsync()
        {
            List<ThanhVienThongBao> result = new List<ThanhVienThongBao>();
            BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            if (model.ThanhVienID > 0)
            {
                ThanhVienThongBao thanhVienThongBao = new ThanhVienThongBao();
                string fileName = model.ThanhVienID + ".json";
                string filePath = Path.Combine(_WebHostEnvironment.WebRootPath, thanhVienThongBao.GetType().Name, fileName);
                string content = GlobalHelper.InitializationString;
                try
                {
                    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                    {
                        using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                        {
                            content = await r.ReadToEndAsync();
                        }
                    }
                }
                catch (Exception ex)
                {
                    string message = ex.Message;
                }
                result = JsonConvert.DeserializeObject<List<ThanhVienThongBao>>(content);
            }
            return result;
        }
    }
}

