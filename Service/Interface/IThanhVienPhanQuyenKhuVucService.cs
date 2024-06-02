namespace Service.Interface
{
	public interface IThanhVienPhanQuyenKhuVucService : IBaseService<ThanhVienPhanQuyenKhuVuc>
	{
		Task<List<ThanhVienPhanQuyenKhuVuc>> GetSQLByParentIDAndDanhMucTinhThanhIDToListAsync(long parentID, long danhMucTinhThanhID);
	}
}

