namespace Service.Implement
{
	public class DanhMucThanhVienService : BaseService<DanhMucThanhVien, IDanhMucThanhVienRepository>
	, IDanhMucThanhVienService
	{
		private readonly IDanhMucThanhVienRepository _DanhMucThanhVienRepository;
		public DanhMucThanhVienService(IDanhMucThanhVienRepository DanhMucThanhVienRepository) : base(DanhMucThanhVienRepository)
		{
			_DanhMucThanhVienRepository = DanhMucThanhVienRepository;
		}
		public virtual async Task<List<DanhMucThanhVien>> GetByCompanyInfoThanhVienToListAsync()
		{
			List<DanhMucThanhVien> result = new List<DanhMucThanhVien>();
			result = await GetByCondition(item => item.ID == GlobalHelper.DanhMucThanhVienIDDoanhNghiep || item.ID == GlobalHelper.DanhMucThanhVienIDNhanVien).ToListAsync();
			return result;
		}
	}
}

