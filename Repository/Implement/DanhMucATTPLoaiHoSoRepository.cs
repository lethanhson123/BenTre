namespace Repository.Implement
{
    public class DanhMucATTPLoaiHoSoRepository : BaseRepository<DanhMucATTPLoaiHoSo>
    , IDanhMucATTPLoaiHoSoRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucATTPLoaiHoSoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

