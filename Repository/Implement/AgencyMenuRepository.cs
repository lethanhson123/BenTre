namespace Repository.Implement
{
    public class AgencyMenuRepository : BaseRepository<AgencyMenu>
    , IAgencyMenuRepository
    {
    private readonly Data.Context.Context _context;
    public AgencyMenuRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

