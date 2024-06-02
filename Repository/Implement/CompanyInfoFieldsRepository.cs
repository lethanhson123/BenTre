namespace Repository.Implement
{
    public class CompanyInfoFieldsRepository : BaseRepository<CompanyInfoFields>
    , ICompanyInfoFieldsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoFieldsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

