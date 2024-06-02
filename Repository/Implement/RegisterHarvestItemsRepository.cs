namespace Repository.Implement
{
    public class RegisterHarvestItemsRepository : BaseRepository<RegisterHarvestItems>
    , IRegisterHarvestItemsRepository
    {
    private readonly Data.Context.Context _context;
    public RegisterHarvestItemsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

