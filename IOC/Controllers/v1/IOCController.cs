namespace IOC.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class IOCController : Controller
    {
		private readonly IReportService _ReportService;		
		
		public IOCController(IReportService ReportService)
		{
			_ReportService = ReportService;				
		}

        [HttpGet]
        [Route("GetByKey_Nam_ThangToListAsync")]
        public async Task<List<Service.Model.IOC>> GetByKey_Nam_ThangToListAsync(string key, int nam, int thang)
        {
            List<Service.Model.IOC> result = new List<Service.Model.IOC>();
            try
            {
                if (!string.IsNullOrEmpty(key))
                {
                    if (key == GlobalHelper.Key)
                    {
                        result = await _ReportService.ReportIOC0001ToListAsync(nam, thang);
                    }
                }
                
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }        
    }
}

