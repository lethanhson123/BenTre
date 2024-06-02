namespace Repository.Implement
{
    public class AgencyUserRepository : BaseRepository<AgencyUser>
    , IAgencyUserRepository
    {
    private readonly Data.Context.Context _context;
    public AgencyUserRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

