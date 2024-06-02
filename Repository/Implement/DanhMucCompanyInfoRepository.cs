namespace Repository.Implement
{
    public class DanhMucCompanyInfoRepository : BaseRepository<DanhMucCompanyInfo>
    , IDanhMucCompanyInfoRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucCompanyInfoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

