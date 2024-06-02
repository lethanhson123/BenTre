namespace Repository.Implement
{
    public class CamKet17Repository : BaseRepository<CamKet17>
    , ICamKet17Repository
    {
    private readonly Data.Context.Context _context;
    public CamKet17Repository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

