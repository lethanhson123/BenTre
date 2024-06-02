namespace Repository.Implement
{
    public class PlanThamDinhCompanyBienBanRepository : BaseRepository<PlanThamDinhCompanyBienBan>
    , IPlanThamDinhCompanyBienBanRepository
    {
    private readonly Data.Context.Context _context;
    public PlanThamDinhCompanyBienBanRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

