namespace Repository.Implement
{
    public class CompanyUserRepository : BaseRepository<CompanyUser>
    , ICompanyUserRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyUserRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

