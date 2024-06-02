namespace Repository.Implement
{
    public class DanhMucLayMauPhanLoaiRepository : BaseRepository<DanhMucLayMauPhanLoai>
    , IDanhMucLayMauPhanLoaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucLayMauPhanLoaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

