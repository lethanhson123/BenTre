namespace Service.Interface
{
	public interface IATTPInfoService : IBaseService<ATTPInfo>
	{
		Task<List<ATTPInfo>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID);
		Task<List<ATTPInfo>> GetBySearchString_ParentID_DanhMucATTPLoaiHoSoID_DanhMucATTPTinhTrangID_DanhMucATTPXepLoaiIDToListAsync(string searchString
			, long parentID			
			, long danhMucATTPLoaiHoSoID
			, long danhMucATTPTinhTrangID
			, long danhMucATTPXepLoaiID);

		Task<List<ATTPInfo>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active);

    }
}

