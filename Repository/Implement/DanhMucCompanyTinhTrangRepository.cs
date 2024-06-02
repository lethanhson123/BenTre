namespace Repository.Implement
{
    public class DanhMucCompanyTinhTrangRepository : BaseRepository<DanhMucCompanyTinhTrang>
    , IDanhMucCompanyTinhTrangRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucCompanyTinhTrangRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

