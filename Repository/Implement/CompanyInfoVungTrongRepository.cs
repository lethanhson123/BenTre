namespace Repository.Implement
{
    public class CompanyInfoVungTrongRepository : BaseRepository<CompanyInfoVungTrong>
    , ICompanyInfoVungTrongRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoVungTrongRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

