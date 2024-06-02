namespace Repository.Implement
{
    public class CompanyInfoLichSuKiemTraRepository : BaseRepository<CompanyInfoLichSuKiemTra>
    , ICompanyInfoLichSuKiemTraRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoLichSuKiemTraRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

