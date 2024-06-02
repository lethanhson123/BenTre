namespace Service.Interface
{
	public interface IPlanThamDinhService : IBaseService<PlanThamDinh>
	{
		Task<PlanThamDinh> CopyAsync(PlanThamDinh model);
        Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThucToListAsync(string searchString, DateTime ngayBatDau, DateTime ngayKetThuc);
		Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(string searchString, DateTime ngayBatDau, DateTime ngayKetThuc, bool active);
		Task<List<PlanThamDinh>> GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(long parentID, string searchString, DateTime ngayBatDau, DateTime ngayKetThuc, bool active);
		Task<List<PlanThamDinh>> GetByParentID_Nam_SoDot_ActiveToListAsync(long parentID, int nam, int soDot, bool active);
		Task<List<PlanThamDinh>> GetByParentID_Nam_ActiveToListAsync(long parentID, int nam, bool active);
        Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync(long stateAgencyID, int nam, int thang);
        Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync(long thanhVienID, int nam, int thang);
    }
}

