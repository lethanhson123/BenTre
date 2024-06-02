namespace Repository.Implement
{
    public class StateAgencyRepository : BaseRepository<StateAgency>
    , IStateAgencyRepository
    {
    private readonly Data.Context.Context _context;
    public StateAgencyRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

