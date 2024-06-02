namespace Repository.Implement
{
    public class CompanyLakeRepository : BaseRepository<CompanyLake>
    , ICompanyLakeRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyLakeRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

