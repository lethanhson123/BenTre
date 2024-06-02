namespace Repository.Implement
{
    public class CompanyInfoGroupsRepository : BaseRepository<CompanyInfoGroups>
    , ICompanyInfoGroupsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoGroupsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

