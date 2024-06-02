namespace Repository.Implement
{
    public class CompanyInfoProductsRepository : BaseRepository<CompanyInfoProducts>
    , ICompanyInfoProductsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoProductsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

