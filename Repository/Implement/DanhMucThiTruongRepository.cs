namespace Repository.Implement
{
    public class DanhMucThiTruongRepository : BaseRepository<DanhMucThiTruong>
    , IDanhMucThiTruongRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucThiTruongRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

