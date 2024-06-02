namespace Repository.Implement
{
    public class DanhMucXepLoaiRepository : BaseRepository<DanhMucXepLoai>
    , IDanhMucXepLoaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucXepLoaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

