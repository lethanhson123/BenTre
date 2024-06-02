namespace Repository.Implement
{
    public class TapTinDinhKemRepository : BaseRepository<TapTinDinhKem>
    , ITapTinDinhKemRepository
    {
    private readonly Data.Context.Context _context;
    public TapTinDinhKemRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

