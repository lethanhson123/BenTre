namespace Repository.Implement
{
    public class CompanyGroupRepository : BaseRepository<CompanyGroup>
    , ICompanyGroupRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyGroupRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

