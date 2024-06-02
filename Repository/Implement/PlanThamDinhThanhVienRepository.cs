namespace Repository.Implement
{
    public class PlanThamDinhThanhVienRepository : BaseRepository<PlanThamDinhThanhVien>
    , IPlanThamDinhThanhVienRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhThanhVienRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

