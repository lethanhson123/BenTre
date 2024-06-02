namespace Repository.Implement
{
    public class CompanyInfoRepository : BaseRepository<CompanyInfo>
    , ICompanyInfoRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

