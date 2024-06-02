namespace Repository.Implement
{
    public class SpeciesRepository : BaseRepository<Species>
    , ISpeciesRepository
    {
    private readonly Data.Context.Context _context;
    public SpeciesRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

