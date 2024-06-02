namespace Service.Interface
{
    public interface IPlanThamDinhDanhMucLayMauService : IBaseService<PlanThamDinhDanhMucLayMau>
    {
        Task<List<PlanThamDinhDanhMucLayMau>> GetSQLByParentIDToListAsync(long ParentID);
        Task<List<PlanThamDinhDanhMucLayMau>> GetByParentID_IsGoiYToListAsync(long ParentID, bool IsGoiY);
    }
}

