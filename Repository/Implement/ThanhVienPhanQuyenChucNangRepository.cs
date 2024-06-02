namespace Repository.Implement
{
	public class ThanhVienPhanQuyenChucNangRepository : BaseRepository<ThanhVienPhanQuyenChucNang>
	, IThanhVienPhanQuyenChucNangRepository
	{
		private readonly Data.Context.Context _context;
		public ThanhVienPhanQuyenChucNangRepository(Data.Context.Context context) : base(context)
		{
			_context = context;
		}
	}
}

