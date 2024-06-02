namespace Repository.Implement
{
    public class DocumentTemplateRepository : BaseRepository<DocumentTemplate>
    , IDocumentTemplateRepository
    {
    private readonly Data.Context.Context _context;
    public DocumentTemplateRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

