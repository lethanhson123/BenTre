namespace Repository.Implement
{
    public class ATTPInfoProductBadsRepository : BaseRepository<ATTPInfoProductBads>
    , IATTPInfoProductBadsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoProductBadsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

