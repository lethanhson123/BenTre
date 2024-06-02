namespace Repository.Implement
{
    public class CompanyInfoSpeciesRepository : BaseRepository<CompanyInfoSpecies>
    , ICompanyInfoSpeciesRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoSpeciesRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

