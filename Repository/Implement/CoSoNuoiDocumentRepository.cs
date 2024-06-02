namespace Repository.Implement
{
    public class CoSoNuoiDocumentRepository : BaseRepository<CoSoNuoiDocument>
    , ICoSoNuoiDocumentRepository
    {
    private readonly Data.Context.Context _context;
    public CoSoNuoiDocumentRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

