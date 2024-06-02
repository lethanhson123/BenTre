namespace Repository.Implement
{
    public class PlanThamDinhRepository : BaseRepository<PlanThamDinh>
    , IPlanThamDinhRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

