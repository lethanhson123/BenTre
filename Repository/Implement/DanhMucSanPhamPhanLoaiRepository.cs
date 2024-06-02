namespace Repository.Implement
{
    public class DanhMucSanPhamPhanLoaiRepository : BaseRepository<DanhMucSanPhamPhanLoai>
    , IDanhMucSanPhamPhanLoaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucSanPhamPhanLoaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

