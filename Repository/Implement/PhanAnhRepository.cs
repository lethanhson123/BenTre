namespace Repository.Implement
{
    public class PhanAnhRepository : BaseRepository<PhanAnh>
    , IPhanAnhRepository
    {
    private readonly Data.Context.Context _context;
    public PhanAnhRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

