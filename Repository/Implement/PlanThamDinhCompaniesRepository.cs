namespace Repository.Implement
{
    public class PlanThamDinhCompaniesRepository : BaseRepository<PlanThamDinhCompanies>
    , IPlanThamDinhCompaniesRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhCompaniesRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

