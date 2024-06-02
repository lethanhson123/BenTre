namespace Repository.Implement
{
    public class CompanyScopeRepository : BaseRepository<CompanyScope>
    , ICompanyScopeRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyScopeRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

