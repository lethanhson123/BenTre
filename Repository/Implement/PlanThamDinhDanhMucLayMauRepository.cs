namespace Repository.Implement
{
    public class PlanThamDinhDanhMucLayMauRepository : BaseRepository<PlanThamDinhDanhMucLayMau>
    , IPlanThamDinhDanhMucLayMauRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhDanhMucLayMauRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

