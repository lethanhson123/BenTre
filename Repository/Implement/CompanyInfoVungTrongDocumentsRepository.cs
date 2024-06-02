namespace Repository.Implement
{
    public class CompanyInfoVungTrongDocumentsRepository : BaseRepository<CompanyInfoVungTrongDocuments>
    , ICompanyInfoVungTrongDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoVungTrongDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

