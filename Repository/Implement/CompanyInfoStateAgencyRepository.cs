namespace Repository.Implement
{
    public class CompanyInfoStateAgencyRepository : BaseRepository<CompanyInfoStateAgency>
    , ICompanyInfoStateAgencyRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoStateAgencyRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

