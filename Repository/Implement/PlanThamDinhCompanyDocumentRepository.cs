namespace Repository.Implement
{
    public class PlanThamDinhCompanyDocumentRepository : BaseRepository<PlanThamDinhCompanyDocument>
    , IPlanThamDinhCompanyDocumentRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhCompanyDocumentRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

