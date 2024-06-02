namespace Repository.Implement
{
    public class CompanyInfoDonViDongGoiDocumentsRepository : BaseRepository<CompanyInfoDonViDongGoiDocuments>
    , ICompanyInfoDonViDongGoiDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoDonViDongGoiDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

