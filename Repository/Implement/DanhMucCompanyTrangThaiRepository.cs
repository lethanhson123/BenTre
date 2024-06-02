namespace Repository.Implement
{
    public class DanhMucCompanyTrangThaiRepository : BaseRepository<DanhMucCompanyTrangThai>
    , IDanhMucCompanyTrangThaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucCompanyTrangThaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

