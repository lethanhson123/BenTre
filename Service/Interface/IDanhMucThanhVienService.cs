namespace Service.Interface
{
	public interface IDanhMucThanhVienService : IBaseService<DanhMucThanhVien>
	{
		Task<List<DanhMucThanhVien>> GetByCompanyInfoThanhVienToListAsync();
	}
}

