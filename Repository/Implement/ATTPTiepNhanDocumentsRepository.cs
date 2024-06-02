namespace Repository.Implement
{
    public class ATTPTiepNhanDocumentsRepository : BaseRepository<ATTPTiepNhanDocuments>
    , IATTPTiepNhanDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPTiepNhanDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

