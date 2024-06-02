namespace Repository.Implement
{
    public class CauHoiATTPRepository : BaseRepository<CauHoiATTP>
    , ICauHoiATTPRepository
    {
    private readonly Data.Context.Context _context;
    public CauHoiATTPRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

