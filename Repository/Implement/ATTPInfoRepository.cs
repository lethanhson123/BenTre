namespace Repository.Implement
{
    public class ATTPInfoRepository : BaseRepository<ATTPInfo>
    , IATTPInfoRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

