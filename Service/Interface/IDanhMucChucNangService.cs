namespace Service.Interface
{
	public interface IDanhMucChucNangService : IBaseService<DanhMucChucNang>
	{
		Task<List<DanhMucChucNang>> GetSQLByThanhVienIDToListAsync(long thanhVienID);
		Task<List<DanhMucChucNang>> GetSQLByThanhVienID_ActiveToListAsync(long thanhVienID, bool active);
		Task<List<DanhMucChucNang>> GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync(long thanhVienID, bool active, long danhMucUngDungID);
		Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDToListAsync(long danhMucUngDungID);
		Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDAndEmptyToListAsync(long danhMucUngDungID);
		

    }
}

