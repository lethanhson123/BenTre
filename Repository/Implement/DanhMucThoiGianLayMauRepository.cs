namespace Repository.Implement
{
    public class DanhMucThoiGianLayMauRepository : BaseRepository<DanhMucThoiGianLayMau>
    , IDanhMucThoiGianLayMauRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucThoiGianLayMauRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

