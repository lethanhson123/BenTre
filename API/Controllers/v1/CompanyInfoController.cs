

namespace API.Controllers.v1
{
	[ApiController]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CompanyInfoController : BaseController<CompanyInfo, ICompanyInfoService>
	{
		private readonly ICompanyInfoService _CompanyInfoService;
		private readonly IWebHostEnvironment _WebHostEnvironment;

		private readonly ICompanyInfoFieldsService _CompanyInfoFieldsService;
		private readonly ICompanyInfoGroupsService _CompanyInfoGroupsService;
		private readonly ICompanyInfoProductsService _CompanyInfoProductsService;
		private readonly ICompanyInfoProductGroupsService _CompanyInfoProductGroupsService;
		private readonly ICompanyInfoSpeciesService _CompanyInfoSpeciesService;
		public CompanyInfoController(ICompanyInfoService CompanyInfoService

			, IWebHostEnvironment WebHostEnvironment


			, ICompanyInfoFieldsService CompanyInfoFieldsService
			, ICompanyInfoGroupsService CompanyInfoGroupsService
			, ICompanyInfoProductsService CompanyInfoProductsService
			, ICompanyInfoProductGroupsService CompanyInfoProductGroupsService
			, ICompanyInfoSpeciesService CompanyInfoSpeciesService

			) : base(CompanyInfoService, WebHostEnvironment)
		{
			_CompanyInfoService = CompanyInfoService;
			_WebHostEnvironment = WebHostEnvironment;

			_CompanyInfoFieldsService = CompanyInfoFieldsService;
			_CompanyInfoGroupsService = CompanyInfoGroupsService;
			_CompanyInfoProductsService = CompanyInfoProductsService;
			_CompanyInfoProductGroupsService = CompanyInfoProductGroupsService;
			_CompanyInfoSpeciesService = CompanyInfoSpeciesService;
		}
		[HttpPost]
		[Route("CovertAsync")]
		public virtual async Task<string> CovertAsync()
		{
			string result = GlobalHelper.InitializationString;
			try
			{
				var client = new MongoClient(GlobalHelper.MongodbServerConectionString);
				var collection = client.GetDatabase("bentredb").GetCollection<company_info>("company_info");
				var filter = Builders<company_info>.Filter.Empty;
				using (var document = collection.Find(filter).ToCursor())
				{
					List<company_info> list = document.ToList();
					foreach (var item in list)
					{
						CompanyInfo itemSave = new CompanyInfo();
						itemSave.uid = item.uid;
						itemSave.Name = item.name;
						itemSave.type_id = item.type_id;
						itemSave.agency_id = item.agency_id;
						itemSave.province_id = item.province_id;
						itemSave.district_id = item.district_id;
						itemSave.ward_id = item.ward_id;
						itemSave.address = item.address;
						itemSave.fullname = item.fullname;
						itemSave.identity_card = item.identity_card;
						itemSave.email = item.email;
						itemSave.phone = item.phone;
						itemSave.business_number = item.business_number;
						itemSave.business_number_date = item.business_number_date;
						itemSave.business_number_place = item.business_number_place;
						itemSave.tax_code = item.tax_code;
						itemSave.status_id = item.status_id;
						itemSave.latitude = item.latitude;
						itemSave.longitude = item.longitude;
						itemSave.agency_approved = item.agency_approved;
						itemSave.approved_on = item.approved_on;
						itemSave.number_lake = item.number_lake;
						itemSave.hamlet = item.hamlet;
						itemSave.lake_code = item.lake_code;
						itemSave.product_des = item.product_des;
						itemSave.attp_status = item.attp_status;
						itemSave.attp_rank = item.attp_rank;
						itemSave.is_tapchat = item.is_tapchat;
						itemSave.tapchat_vipham = item.tapchat_vipham;
						itemSave.scope_id = item.scope_id;
						itemSave.role_name = item.role_name;
						itemSave.Code = item.code;

						if (item.attp_info != null)
						{
							itemSave.hoso_id = item.attp_info.hoso_id;
							itemSave.attp_code = item.attp_info.attp_code;
							itemSave.attp_rank = item.attp_info.attp_rank;
							itemSave.product_des = item.attp_info.product_des;
							itemSave.last_thamdinh = item.attp_info.last_thamdinh;
							itemSave.thamdinh_id = item.attp_info.thamdinh_id;
							itemSave.attp_next = item.attp_info.attp_next;
							itemSave.attp_begin = item.attp_info.attp_begin;
							if (item.attp_info.mucloi != null)
							{
								itemSave.se = item.attp_info.mucloi.se;
								itemSave.ma = item.attp_info.mucloi.ma;
								itemSave.mi = item.attp_info.mucloi.mi;
								itemSave.dat = item.attp_info.mucloi.dat;
							}

							if (item.attp_info.attp_cer != null)
							{
								itemSave.file_name = item.attp_info.attp_cer.file_name;
								itemSave.file_id = item.attp_info.attp_cer.file_id;
								itemSave.file_path = item.attp_info.attp_cer.file_path;
								itemSave.server_upload = item.attp_info.attp_cer.server_upload;
								itemSave.provider = item.attp_info.attp_cer.provider;
								itemSave.size_kb = item.attp_info.attp_cer.size_kb;
								itemSave.document_name = item.attp_info.attp_cer.document_name;
								itemSave.document_type = item.attp_info.attp_cer.document_type;
								itemSave.mine_type = item.attp_info.attp_cer.mine_type;
								itemSave.ext = item.attp_info.attp_cer.ext;
							}
						}

						if (item.cosonuoi != null)
						{
							itemSave.hinhthucnuoi = item.cosonuoi.hinhthucnuoi;
							itemSave.hinhthucnuoi_name = item.cosonuoi.hinhthucnuoi_name;
							itemSave.number_lake = item.cosonuoi.number_lake;
							itemSave.acreage_cs = item.cosonuoi.acreage_cs;
							itemSave.unit_id = item.cosonuoi.unit_id;
							itemSave.unit_name = item.cosonuoi.unit_name;
							itemSave.Code = item.cosonuoi.code;
						}


						await _CompanyInfoService.SaveAsync(itemSave);
						if (itemSave.ID > 0)
						{
							if (item.groups != null)
							{
								foreach (var uid in item.groups)
								{
									CompanyInfoGroups companyInfoGroups = new CompanyInfoGroups();
									companyInfoGroups.ParentID = itemSave.ID;
									companyInfoGroups.status_id = uid;
									await _CompanyInfoGroupsService.SaveAsync(companyInfoGroups);
								}
							}
							if (item.fields != null)
							{
								foreach (var uid in item.fields)
								{
									CompanyInfoFields companyInfoFields = new CompanyInfoFields();
									companyInfoFields.ParentID = itemSave.ID;
									companyInfoFields.status_id = uid;
									await _CompanyInfoFieldsService.SaveAsync(companyInfoFields);
								}
							}
							if (item.products != null)
							{
								foreach (var uid in item.products)
								{
									CompanyInfoProducts companyInfoProducts = new CompanyInfoProducts();
									companyInfoProducts.ParentID = itemSave.ID;
									companyInfoProducts.uid = uid;
									await _CompanyInfoProductsService.SaveAsync(companyInfoProducts);
								}
							}
							if (item.attp_info != null)
							{
								if (item.attp_info.product_groups != null)
								{
									foreach (var uid in item.attp_info.product_groups)
									{
										CompanyInfoProductGroups companyInfoProductGroups = new CompanyInfoProductGroups();
										companyInfoProductGroups.ParentID = itemSave.ID;
										companyInfoProductGroups.uid = uid;
										await _CompanyInfoProductGroupsService.SaveAsync(companyInfoProductGroups);
									}
								}
							}
							if (item.cosonuoi != null)
							{
								if (item.cosonuoi.species != null)
								{
									foreach (var uid in item.cosonuoi.species)
									{
										CompanyInfoSpecies companyInfoSpecies = new CompanyInfoSpecies();
										companyInfoSpecies.ParentID = itemSave.ID;
										companyInfoSpecies.uid = uid;
										await _CompanyInfoSpeciesService.SaveAsync(companyInfoSpecies);
									}
								}
							}
						}
					}
				}
			}
			catch (Exception ex)
			{
				result = ex.Message;
			}
			return result;
		}

		[HttpPost]
		[Route("GetByParentIDOrSearchStringToListAsync")]
		public async Task<List<CompanyInfo>> GetByParentIDOrSearchStringToListAsync()
		{
			List<CompanyInfo> result = new List<CompanyInfo>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _CompanyInfoService.GetByParentIDOrSearchStringToListAsync(model.ParentID.Value, model.SearchString);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync")]
		public async Task<List<CompanyInfo>> GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync()
		{
			List<CompanyInfo> result = new List<CompanyInfo>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _CompanyInfoService.GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync(model.ParentID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
		[HttpPost]
		[Route("GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync")]
		public async Task<List<CompanyInfo>> GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync()
		{
			List<CompanyInfo> result = new List<CompanyInfo>();
			try
			{
				BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
				result = await _CompanyInfoService.GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync(model.DanhMucCompanyTinhTrangID.Value, model.SearchString);
			}
			catch (Exception ex)
			{
				string mes = ex.Message;
			}
			return result;
		}
        [HttpPost]
        [Route("GetByDistrictDataID_ActiveToListAsync")]
        public async Task<List<CompanyInfo>> GetByDistrictDataID_ActiveToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByDistrictDataID_ActiveToListAsync(model.DistrictDataID.Value, model.Active.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByDistrictDataIDToListAsync")]
        public async Task<List<CompanyInfo>> GetByDistrictDataIDToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByDistrictDataIDToListAsync(model.DistrictDataID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByDistrictDataID_Page_PageSizeToListAsync")]
        public async Task<List<CompanyInfo>> GetByDistrictDataID_Page_PageSizeToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByDistrictDataID_Page_PageSizeToListAsync(model.DistrictDataID.Value, model.Page.Value, model.PageSize.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByDistrictDataID_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByDistrictDataID_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByDistrictDataID_SearchStringToListAsync(model.DistrictDataID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_Active_Page_PageSizeToListAsync")]
        public async Task<List<CompanyInfo>> GetByParentID_Active_Page_PageSizeToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByParentID_Active_Page_PageSizeToListAsync(model.ParentID.Value, model.Active.Value, model.Page.Value, model.PageSize.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_Active_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByParentID_Active_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByParentID_Active_SearchStringToListAsync(model.ParentID.Value, model.Active.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActive_Page_PageSizeToListAsync")]
        public async Task<List<CompanyInfo>> GetByActive_Page_PageSizeToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByActive_Page_PageSizeToListAsync(model.Active.Value, model.Page.Value, model.PageSize.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActive_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByActive_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByActive_SearchStringToListAsync( model.Active.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(model.PlanTypeID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync(model.PlanTypeID.Value, model.DanhMucATTPXepLoaiID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync(model.PlanTypeID.Value, model.DanhMucATTPTinhTrangID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync")]
        public async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(model.Active.Value, model.PlanTypeID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync")]
        public async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync(model.Active.Value, model.PlanTypeID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString, model.Page.Value, model.PageSize.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync")]
        public async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoService.GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync(model.Active.Value, model.PlanTypeID.Value, model.DistrictDataID.Value, model.WardDataID.Value, model.SearchString, model.ID, model.Page.Value, model.PageSize.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}

