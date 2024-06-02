namespace Repository.Implement
{
    public class DanhMucDangKyCapGiayRepository : BaseRepository<DanhMucDangKyCapGiay>
    , IDanhMucDangKyCapGiayRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucDangKyCapGiayRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

