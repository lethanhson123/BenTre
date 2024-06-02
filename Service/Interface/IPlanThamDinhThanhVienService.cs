namespace Service.Interface
{
	public interface IPlanThamDinhThanhVienService : IBaseService<PlanThamDinhThanhVien>
	{
		Task<List<PlanThamDinhThanhVien>> GetByListParentIDToListAsync(List<long> listParentID);
	}
}

