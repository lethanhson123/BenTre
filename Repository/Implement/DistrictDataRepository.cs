namespace Repository.Implement
{
    public class DistrictDataRepository : BaseRepository<DistrictData>
    , IDistrictDataRepository
    {
    private readonly Data.Context.Context _context;
    public DistrictDataRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

