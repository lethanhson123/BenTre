namespace Repository.Implement
{
    public class ATTPTiepNhanProductGroupsRepository : BaseRepository<ATTPTiepNhanProductGroups>
    , IATTPTiepNhanProductGroupsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPTiepNhanProductGroupsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

