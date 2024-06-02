namespace Service.Interface
{
	public interface IThanhVienService : IBaseService<ThanhVien>
	{
		Task<ThanhVien> ChangePasswordAsync(ThanhVien model, string password01, string password02, string password03);
		Task<ThanhVien> AuthenticationAsync(ThanhVien model);
		Task<string> AuthenticationToStringAsync(ThanhVien model);
        Task<ThanhVien> AuthenticationFastAsync(ThanhVien model);
		Task<ThanhVien> GetByTaiKhoanAsync(string taiKhoan);		
		Task<List<ThanhVien>> GetByParentIDOrSearchStringToListAsync(long parentID, string searchString);
		Task<List<ThanhVien>> GetByCompanyInfoIDToListAsync(long companyInfoID);
		Task<List<ThanhVien>> GetByCompanyInfoIDAndEmptyToListAsync(long companyInfoID);
		Task<List<ThanhVien>> GetByStateAgencyIDToListAsync(long stateAgencyID);
		Task<List<ThanhVien>> GetByStateAgencyID_SearchStringToListAsync(long stateAgencyID, string searchString);
        Task<List<ThanhVien>> GetByStateAgencyID_ActiveToListAsync(long stateAgencyID, bool active);
        Task<List<ThanhVien>> GetByAgencyDepartmentIDToListAsync(long agencyDepartmentID);
		Task<List<ThanhVien>> GetByAgencyDepartmentID_ActiveToListAsync(long agencyDepartmentID, bool active);
		Task<List<ThanhVien>> GetByListParentID_ActiveToListAsync();

    }
}

