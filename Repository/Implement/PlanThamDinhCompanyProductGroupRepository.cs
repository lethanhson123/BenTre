namespace Repository.Implement
{
    public class PlanThamDinhCompanyProductGroupRepository : BaseRepository<PlanThamDinhCompanyProductGroup>
    , IPlanThamDinhCompanyProductGroupRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhCompanyProductGroupRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

