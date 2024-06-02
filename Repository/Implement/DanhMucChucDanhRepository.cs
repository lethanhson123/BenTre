namespace Repository.Implement
{
    public class DanhMucChucDanhRepository : BaseRepository<DanhMucChucDanh>
    , IDanhMucChucDanhRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucChucDanhRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

