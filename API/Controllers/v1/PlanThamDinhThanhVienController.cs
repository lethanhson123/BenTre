namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class PlanThamDinhThanhVienController : BaseController<PlanThamDinhThanhVien, IPlanThamDinhThanhVienService>
	{
		private readonly IPlanThamDinhThanhVienService _PlanThamDinhThanhVienService;
		private readonly IWebHostEnvironment _WebHostEnvironment;
		public PlanThamDinhThanhVienController(IPlanThamDinhThanhVienService PlanThamDinhThanhVienService, IWebHostEnvironment WebHostEnvironment) : base(PlanThamDinhThanhVienService, WebHostEnvironment)
		{
			_PlanThamDinhThanhVienService = PlanThamDinhThanhVienService;
			_WebHostEnvironment = WebHostEnvironment;
		}
		[HttpPost]
		[Route("GetByListParentIDToListAsync")]
		public async Task<List<PlanThamDinhThanhVien>> GetByListParentIDToListAsync()
		{
			List<PlanThamDinhThanhVien> result = new List<PlanThamDinhThanhVien>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				if (model.ListID != null)
				{
					if (model.ListID.Count > 0)
					{
						result = await _PlanThamDinhThanhVienService.GetByListParentIDToListAsync(model.ListID);
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

