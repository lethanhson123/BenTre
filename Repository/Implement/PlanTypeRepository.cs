namespace Repository.Implement
{
    public class PlanTypeRepository : BaseRepository<PlanType>
    , IPlanTypeRepository
    {
    private readonly Data.Context.Context _context;
    public PlanTypeRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

