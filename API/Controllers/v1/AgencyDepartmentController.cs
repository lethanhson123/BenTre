namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class AgencyDepartmentController : BaseController<AgencyDepartment, IAgencyDepartmentService>
	{
		private readonly IAgencyDepartmentService _AgencyDepartmentService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly IAgencyDepartmentMenusService _AgencyDepartmentMenusService;
		private readonly IAgencyMenuService _AgencyMenuService;
		public AgencyDepartmentController(IAgencyDepartmentService AgencyDepartmentService

			, IWebHostEnvironment WebHostEnvironment

			, IAgencyDepartmentMenusService AgencyDepartmentMenusService
			, IAgencyMenuService AgencyMenuService


			) : base(AgencyDepartmentService, WebHostEnvironment)
		{
			_AgencyDepartmentService = AgencyDepartmentService;
			_WebHostEnvironment = WebHostEnvironment;

			_AgencyDepartmentMenusService = AgencyDepartmentMenusService;
			_AgencyMenuService = AgencyMenuService;

		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{				
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<agency_department>("agency_department");
				var filter = Builders<agency_department>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<agency_department> list = document.ToList();
					foreach (var item in list)
					{
						AgencyDepartment itemSave = new AgencyDepartment();
						itemSave.uid = item.uid;
						itemSave.Name = item.name;
						itemSave.agency_id = item.agency_id;
						await _AgencyDepartmentService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
							if (item.menus != null)
							{
								foreach (string uid in item.menus)
								{
									AgencyDepartmentMenus agencyDepartmentMenus = new AgencyDepartmentMenus();
									agencyDepartmentMenus.ParentID = itemSave.ID;
									agencyDepartmentMenus.uid = uid;
									AgencyMenu agencyMenu = await _AgencyMenuService.GetByuidAsync(uid);
									if (agencyMenu.ID > 0)
									{
										agencyDepartmentMenus.AgencyMenuID = agencyMenu.ID;
									}
									await _AgencyDepartmentMenusService.SaveAsync(agencyDepartmentMenus);
								}
							}
						}
					}
				}
			}
			catch (Exception ex)
			{
				string message = ex.Message;
			}
			return result;
		}
	}
}

