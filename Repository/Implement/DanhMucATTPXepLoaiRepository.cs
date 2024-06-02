namespace Repository.Implement
{
    public class DanhMucATTPXepLoaiRepository : BaseRepository<DanhMucATTPXepLoai>
    , IDanhMucATTPXepLoaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucATTPXepLoaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

