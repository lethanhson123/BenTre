namespace Repository.Implement
{
    public class WardDataRepository : BaseRepository<WardData>
    , IWardDataRepository
    {
    private readonly Data.Context.Context _context;
    public WardDataRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

