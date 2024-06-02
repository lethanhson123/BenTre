namespace Repository.Implement
{
    public class CompanyInfoVungTrongToaDoRepository : BaseRepository<CompanyInfoVungTrongToaDo>
    , ICompanyInfoVungTrongToaDoRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoVungTrongToaDoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

