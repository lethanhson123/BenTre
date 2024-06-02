namespace Repository.Implement
{
    public class ATTPInfoProductGroupsRepository : BaseRepository<ATTPInfoProductGroups>
    , IATTPInfoProductGroupsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoProductGroupsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

