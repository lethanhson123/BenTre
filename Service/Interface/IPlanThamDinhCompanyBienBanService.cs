namespace Service.Interface
{
	public interface IPlanThamDinhCompanyBienBanService : IBaseService<PlanThamDinhCompanyBienBan>
	{
        Task<int> SyncAsync(long ParentID, long PlanThamDinhID, long DanhMucProductGroupID);
        Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_BienBanATTPParentIDToListAsync(long parentID, long bienBanATTPParentID);
		Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_DanhMucProductGroupIDToListAsync(long parentID, long danhMucProductGroupID);
        Task<List<PlanThamDinhCompanyBienBan>> GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync(long planThamDinhID, long danhMucProductGroupID);

    }
}

