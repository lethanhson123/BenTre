namespace Repository.Implement
{
    public class BienBanATTPRepository : BaseRepository<BienBanATTP>
    , IBienBanATTPRepository
    {
    private readonly Data.Context.Context _context;
    public BienBanATTPRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

