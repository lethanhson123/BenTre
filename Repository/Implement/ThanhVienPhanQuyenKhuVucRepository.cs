namespace Repository.Implement
{
	public class ThanhVienPhanQuyenKhuVucRepository : BaseRepository<ThanhVienPhanQuyenKhuVuc>
	, IThanhVienPhanQuyenKhuVucRepository
	{
		private readonly Data.Context.Context _context;
		public ThanhVienPhanQuyenKhuVucRepository(Data.Context.Context context) : base(context)
		{
			_context = context;
		}
	}
}

