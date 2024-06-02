namespace Repository.Implement
{
    public class PlanThamDinhDistrictDataRepository : BaseRepository<PlanThamDinhDistrictData>
    , IPlanThamDinhDistrictDataRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhDistrictDataRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

