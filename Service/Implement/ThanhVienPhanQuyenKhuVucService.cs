namespace Service.Implement
{
	public class ThanhVienPhanQuyenKhuVucService : BaseService<ThanhVienPhanQuyenKhuVuc, IThanhVienPhanQuyenKhuVucRepository>
	, IThanhVienPhanQuyenKhuVucService
	{
		private readonly IThanhVienPhanQuyenKhuVucRepository _ThanhVienPhanQuyenKhuVucRepository;
		public ThanhVienPhanQuyenKhuVucService(IThanhVienPhanQuyenKhuVucRepository ThanhVienPhanQuyenKhuVucRepository) : base(ThanhVienPhanQuyenKhuVucRepository)
		{
			_ThanhVienPhanQuyenKhuVucRepository = ThanhVienPhanQuyenKhuVucRepository;
		}		
		public virtual async Task<List<ThanhVienPhanQuyenKhuVuc>> GetSQLByParentIDAndDanhMucTinhThanhIDToListAsync(long parentID, long danhMucTinhThanhID)
		{
			List<ThanhVienPhanQuyenKhuVuc> result = new List<ThanhVienPhanQuyenKhuVuc>();
			SqlParameter[] parameters =
			{
					new SqlParameter("@ParentID",parentID),
					new SqlParameter("@DanhMucTinhThanhID",danhMucTinhThanhID),
			};
			result = await GetByStoredProcedureToListAsync("sp_ThanhVienPhanQuyenKhuVucSelectItemsByParentIDAndDanhMucTinhThanhID", parameters);
			return result;
		}
	}
}

