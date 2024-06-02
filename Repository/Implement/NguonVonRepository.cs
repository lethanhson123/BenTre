namespace Repository.Implement
{
    public class NguonVonRepository : BaseRepository<NguonVon>
    , INguonVonRepository
    {
    private readonly Data.Context.Context _context;
    public NguonVonRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

