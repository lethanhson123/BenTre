namespace Repository.Interface
{
	public interface IBaseRepository<T> where T : BaseModel
	{
		DbSet<T> DbSet();
		int Add(T model);
		Task<int> AddAsync(T model);
		int Update(T model);
		Task<int> UpdateAsync(T model);
		int Remove(long ID);
		Task<int> RemoveAsync(long ID);
		int AddRange(List<T> list);
		Task<int> AddRangeAsync(List<T> list);
		int UpdateRange(List<T> list);
		Task<int> UpdateRangeAsync(List<T> list);
		int RemoveRange(List<T> list);
		Task<int> RemoveRangeAsync(List<T> list);
		IQueryable<T> GetByCondition(Expression<Func<T, bool>> whereCondition);
		T GetByID(long ID);
		Task<T> GetByIDAsync(long ID);
		T GetByName(string name);
		Task<T> GetByNameAsync(string name);
		T GetByCode(string code);
		Task<T> GetByCodeAsync(string code);
		T GetByuid(string uid);
		Task<T> GetByuidAsync(string uid);
		List<T> GetAllToList();
		Task<List<T>> GetAllToListAsync();
		List<T> GetByIDToList(long ID);
		Task<List<T>> GetByIDToListAsync(long ID);
		List<T> GetByActiveToList(bool active);
		Task<List<T>> GetByActiveToListAsync(bool active);
		List<T> GetByParentIDToList(long parentID);
		Task<List<T>> GetByParentIDToListAsync(long parentID);
		List<T> GetByParentIDAndActiveToList(long parentID, bool active);
		Task<List<T>> GetByParentIDAndActiveToListAsync(long parentID, bool active);
		List<T> GetByParentIDAndCodeToList(long parentID, string code);
		Task<List<T>> GetByParentIDAndCodeToListAsync(long parentID, string code);
		List<T> GetByParentIDAndCodeAndActiveToList(long parentID, string code, bool active);
		Task<List<T>> GetByParentIDAndCodeAndActiveToListAsync(long parentID, string code, bool active);
		List<T> GetByParentIDAndstatus_idToList(long parentID, long status_id);
		Task<List<T>> GetByParentIDAndstatus_idToListAsync(long parentID, long status_id);
		T GetByParentIDAndstatus_id(long parentID, long status_id);
		Task<T> GetByParentIDAndstatus_idAsync(long parentID, long status_id);
		List<T> GetByLastUpdatedMembershipIDToList(long lastUpdatedMembershipID);
		Task<List<T>> GetByLastUpdatedMembershipIDToListAsync(long lastUpdatedMembershipID);
		List<T> GetByLastUpdatedMembershipIDAndActiveToList(long lastUpdatedMembershipID, bool active);
		Task<List<T>> GetByLastUpdatedMembershipIDAndActiveToListAsync(long lastUpdatedMembershipID, bool active);
		List<T> GetByParentIDAndLastUpdatedMembershipIDToList(long parentID, long lastUpdatedMembershipID);
		Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDToListAsync(long parentID, long lastUpdatedMembershipID);
		List<T> GetByParentIDAndLastUpdatedMembershipIDAndActiveToList(long parentID, long lastUpdatedMembershipID, bool active);
		Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync(long parentID, long lastUpdatedMembershipID, bool active);
		List<T> GetBySearchStringToList(string searchString);
		Task<List<T>> GetBySearchStringToListAsync(string searchString);
		List<T> GetByPageAndPageSizeToList(int page, int pageSize);
		Task<List<T>> GetByPageAndPageSizeToListAsync(int page, int pageSize);
		string ExecuteNonQueryByStoredProcedure(string storedProcedureName, params SqlParameter[] parameters);
		Task<string> ExecuteNonQueryByStoredProcedureAsync(string storedProcedureName, params SqlParameter[] parameters);
		List<T> GetByStoredProcedureToList(string storedProcedureName, params SqlParameter[] parameters);
		Task<List<T>> GetByStoredProcedureToListAsync(string storedProcedureName, params SqlParameter[] parameters);
	}
}
