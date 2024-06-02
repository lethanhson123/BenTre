namespace Repository.Implement
{
    public class ATTPInfoTimelinesRepository : BaseRepository<ATTPInfoTimelines>
    , IATTPInfoTimelinesRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoTimelinesRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

