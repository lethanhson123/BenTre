namespace Repository.Implement
{
    public class PlanThamDinhDanhMucLayMauChiTieuRepository : BaseRepository<PlanThamDinhDanhMucLayMauChiTieu>
    , IPlanThamDinhDanhMucLayMauChiTieuRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhDanhMucLayMauChiTieuRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

