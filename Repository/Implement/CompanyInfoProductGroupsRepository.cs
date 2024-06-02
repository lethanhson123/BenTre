namespace Repository.Implement
{
    public class CompanyInfoProductGroupsRepository : BaseRepository<CompanyInfoProductGroups>
    , ICompanyInfoProductGroupsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoProductGroupsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

