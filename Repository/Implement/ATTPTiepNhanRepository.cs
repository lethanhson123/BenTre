namespace Repository.Implement
{
    public class ATTPTiepNhanRepository : BaseRepository<ATTPTiepNhan>
    , IATTPTiepNhanRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPTiepNhanRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

