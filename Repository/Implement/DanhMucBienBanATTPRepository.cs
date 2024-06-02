namespace Repository.Implement
{
    public class DanhMucBienBanATTPRepository : BaseRepository<DanhMucBienBanATTP>
    , IDanhMucBienBanATTPRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucBienBanATTPRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

