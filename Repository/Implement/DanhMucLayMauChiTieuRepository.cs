namespace Repository.Implement
{
    public class DanhMucLayMauChiTieuRepository : BaseRepository<DanhMucLayMauChiTieu>
    , IDanhMucLayMauChiTieuRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucLayMauChiTieuRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

