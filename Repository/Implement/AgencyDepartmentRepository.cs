namespace Repository.Implement
{
    public class AgencyDepartmentRepository : BaseRepository<AgencyDepartment>
    , IAgencyDepartmentRepository
    {
    private readonly Data.Context.Context _context;
    public AgencyDepartmentRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

