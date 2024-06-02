namespace Repository.Implement
{
    public class RegisterHarvestRepository : BaseRepository<RegisterHarvest>
    , IRegisterHarvestRepository
    {
    private readonly Data.Context.Context _context;
    public RegisterHarvestRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

