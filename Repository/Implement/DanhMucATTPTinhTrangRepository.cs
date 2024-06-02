namespace Repository.Implement
{
    public class DanhMucATTPTinhTrangRepository : BaseRepository<DanhMucATTPTinhTrang>
    , IDanhMucATTPTinhTrangRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucATTPTinhTrangRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

