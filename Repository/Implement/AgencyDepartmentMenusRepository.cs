namespace Repository.Implement
{
    public class AgencyDepartmentMenusRepository : BaseRepository<AgencyDepartmentMenus>
    , IAgencyDepartmentMenusRepository
    {
    private readonly Data.Context.Context _context;
    public AgencyDepartmentMenusRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

