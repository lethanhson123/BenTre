namespace Repository.Implement
{
    public class DanhMucLayMauRepository : BaseRepository<DanhMucLayMau>
    , IDanhMucLayMauRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucLayMauRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

