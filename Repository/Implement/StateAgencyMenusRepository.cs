namespace Repository.Implement
{
    public class StateAgencyMenusRepository : BaseRepository<StateAgencyMenus>
    , IStateAgencyMenusRepository
    {
    private readonly Data.Context.Context _context;
    public StateAgencyMenusRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

