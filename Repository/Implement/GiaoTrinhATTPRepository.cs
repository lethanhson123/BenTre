namespace Repository.Implement
{
    public class GiaoTrinhATTPRepository : BaseRepository<GiaoTrinhATTP>
    , IGiaoTrinhATTPRepository
    {
    private readonly Data.Context.Context _context;
    public GiaoTrinhATTPRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

