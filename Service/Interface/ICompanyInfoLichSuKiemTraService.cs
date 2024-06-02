namespace Service.Interface
{
	public interface ICompanyInfoLichSuKiemTraService : IBaseService<CompanyInfoLichSuKiemTra>
	{
		Task<CompanyInfoLichSuKiemTra> GetByParentID_Nam_Thang_NgayAsync(long parentID, int nam, int thang, int ngay);
		Task<List<CompanyInfoLichSuKiemTra>> GetByParentID_NamToListAsync(long parentID, int nam);
	}
}

