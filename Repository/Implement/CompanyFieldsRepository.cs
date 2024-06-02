namespace Repository.Implement
{
    public class CompanyFieldsRepository : BaseRepository<CompanyFields>
    , ICompanyFieldsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyFieldsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

