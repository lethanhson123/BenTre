namespace Repository.Implement
{
    public class KienThucATTPRepository : BaseRepository<KienThucATTP>
    , IKienThucATTPRepository
    {
    private readonly Data.Context.Context _context;
    public KienThucATTPRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

