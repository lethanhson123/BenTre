namespace Repository.Implement
{
    public class ProvinceDataRepository : BaseRepository<ProvinceData>
    , IProvinceDataRepository
    {
    private readonly Data.Context.Context _context;
    public ProvinceDataRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

