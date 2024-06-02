

namespace Service.Interface
{
	public interface IPlanThamDinhCompaniesService : IBaseService<PlanThamDinhCompanies>
	{
		Task<List<PlanThamDinhCompanies>> GetByListParentIDToListAsync(List<long> listParentID);
		Task<List<PlanThamDinhCompanies>> GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync(long districtDataID, long danhMucATTPXepLoaiID, int soThang);
		Task<List<PlanThamDinhCompanies>> GetByCompanyInfoIDToListAsync(long companyInfoID);
        Task<PlanThamDinhCompanies> GetByCompanyInfoID_NgayGhiNhanAsync(long companyInfoID, DateTime ngayGhiNhan);
		Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync(long planThamDinhParentID, int nam, int soDot, bool active, long danhMucATTPXepLoaiID);
        Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync(long planThamDinhParentID, int nam, int thang, bool active);
		Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync(long planThamDinhParentID, long districtDataID, long wardDataID, bool active);
		Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync(long planThamDinhParentID, long districtDataID, long wardDataID, bool active);
		Task<PlanThamDinhCompanies> GetSQLByByPlanThamDinhParentID_CompanyInfoIDAsync(long planThamDinhParentID, long companyInfoID);
		Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync(long planTypeID, long districtDataID, int nam, int thang);
		Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync(long planTypeID, long districtDataID, int nam, int thang);
        Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync(long planTypeID, long districtDataID, int nam, int thang);
        Task<PlanThamDinhCompanies> GetByMaSoForWebsiteAsync(string maSo);
		Task<string> InsertItemsByDataTableAsync(DataTable table);
		Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataIDToListAsync(long planTypeID, long districtDataID);
    }
}

