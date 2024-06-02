namespace Service.Interface
{
	public interface ICompanyInfoService : IBaseService<CompanyInfo>
	{
		Task<List<CompanyInfo>> GetByParentIDOrSearchStringToListAsync(long parentID, string searchString);
		Task<CompanyInfo> GetByDKKDAsync(string DKKD);
		Task<List<CompanyInfo>> GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync(long parentID, long districtDataID, long wardDataID, string searchString);
		Task<List<CompanyInfo>> GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync(long danhMucCompanyTinhTrangID, string searchString);
		Task<List<CompanyInfo>> GetByDistrictDataID_ActiveToListAsync(long districtDataID, bool active);
		Task<List<CompanyInfo>> GetByDistrictDataIDToListAsync(long districtDataID);
		Task<List<CompanyInfo>> GetByDistrictDataID_Page_PageSizeToListAsync(long districtDataID,int page, int pageSize);
		Task<List<CompanyInfo>> GetByDistrictDataID_SearchStringToListAsync(long districtDataID, string searchString);
        Task<List<CompanyInfo>> GetByParentID_Active_Page_PageSizeToListAsync(long parentID, bool active, int page, int pageSize);
		Task<List<CompanyInfo>> GetByParentID_Active_SearchStringToListAsync(long parentID, bool active, string searchString);
        Task<List<CompanyInfo>> GetByActive_Page_PageSizeToListAsync(bool active, int page, int pageSize);
        Task<List<CompanyInfo>> GetByActive_SearchStringToListAsync(bool active, string searchString);
		Task<List<CompanyInfo>> GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString);
		Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DanhMucATTPXepLoaiID, long DistrictDataID, long WardDataID, string SearchString);
        Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DanhMucATTPTinhTrangID, long DistrictDataID, long WardDataID, string SearchString);
		Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString);
		Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString, int page, int pageSize);
		Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString, long ID, int page, int pageSize);
    }
}

