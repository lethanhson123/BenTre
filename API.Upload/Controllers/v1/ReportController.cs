namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class ReportController : BaseController<Report, IReportService>
	{
		private readonly IReportService _ReportService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		
		public ReportController(IReportService ReportService, IWebHostEnvironment WebHostEnvironment) : base(ReportService, WebHostEnvironment)
		{
			_ReportService = ReportService;
			_WebHostEnvironment = WebHostEnvironment;			
		}

        [HttpPost]
        [Route("Report0001ToListAsync")]
        public async Task<List<Report>> Report0001ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0001ToListAsync(model.Nam.Value, model.Thang.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0002ToListAsync")]
        public async Task<List<Report>> Report0002ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0002ToListAsync(model.ParentID.Value, model.Nam.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0003ToListAsync")]
        public async Task<List<Report>> Report0003ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0003ToListAsync(model.ParentID.Value, model.Nam.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0004_0005ToListAsync")]
        public async Task<List<Report>> Report0004_0005ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0004_0005ToListAsync(model.ParentID.Value, model.DistrictDataID.Value, model.Nam.Value, model.Thang.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0006ToListAsync")]
        public async Task<List<Report>> Report0006ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0006ToListAsync(model.ParentID.Value, model.DistrictDataID.Value, model.Nam.Value, model.Thang.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportWebsite0001Async")]
        public async Task<Report> ReportWebsite0001Async()
        {
            Report result = new Report();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.ReportWebsite0001Async();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportWebsite0002ToListAsync")]
        public async Task<List<Report>> ReportWebsite0002ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.ReportWebsite0002ToListAsync(model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0007ToListAsync")]
        public async Task<List<Report>> Report0007ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0007ToListAsync(model.Nam.Value, model.Thang.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0008ToListAsync")]
        public async Task<List<Report>> Report0008ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0008ToListAsync(model.Nam.Value, model.Thang.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }


        [HttpPost]
        [Route("ReportPushNotification0000001Async")]
        public async Task<List<Report>> ReportPushNotification0000001Async()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.ReportPushNotification0000001Async();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0009ToListAsync")]
        public async Task<List<Report>> Report0009ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0009ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0010ToListAsync")]
        public async Task<List<Report>> Report0010ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0010ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0011ToListAsync")]
        public async Task<List<Report>> Report0011ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0011ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0012ToListAsync")]
        public async Task<List<Report>> Report0012ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0012ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0013ToListAsync")]
        public async Task<List<Report>> Report0013ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0013ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0014ToListAsync")]
        public async Task<List<Report>> Report0014ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0014ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0015ToListAsync")]
        public async Task<List<Report>> Report0015ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0015ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0016ToListAsync")]
        public async Task<List<Report>> Report0016ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0016ToListAsync(model.PlanTypeID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("Report0017ToListAsync")]
        public async Task<List<Report>> Report0017ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.Report0017ToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportDashboard0001Async")]
        public async Task<Report> ReportDashboard0001Async()
        {
            Report result = new Report();
            try
            {                
                result = await _ReportService.ReportDashboard0001Async();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportDashboard0002ToListAsync")]
        public async Task<List<Report>> ReportDashboard0002ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                result = await _ReportService.ReportDashboard0002ToListAsync();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportDashboard0003ToListAsync")]
        public async Task<List<Report>> ReportDashboard0003ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                result = await _ReportService.ReportDashboard0003ToListAsync();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportDashboard0004ToListAsync")]
        public async Task<List<Report>> ReportDashboard0004ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                result = await _ReportService.ReportDashboard0004ToListAsync();
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("ReportDashboard0005ToListAsync")]
        public async Task<List<Report>> ReportDashboard0005ToListAsync()
        {
            List<Report> result = new List<Report>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _ReportService.ReportDashboard0005ToListAsync(model.Nam.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

