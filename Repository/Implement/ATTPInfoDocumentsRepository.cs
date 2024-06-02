namespace Repository.Implement
{
    public class ATTPInfoDocumentsRepository : BaseRepository<ATTPInfoDocuments>
    , IATTPInfoDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

