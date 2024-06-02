namespace Repository.Implement
{
    public class DanhMucThamDinhKetQuaDanhGiaRepository : BaseRepository<DanhMucThamDinhKetQuaDanhGia>
    , IDanhMucThamDinhKetQuaDanhGiaRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucThamDinhKetQuaDanhGiaRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

