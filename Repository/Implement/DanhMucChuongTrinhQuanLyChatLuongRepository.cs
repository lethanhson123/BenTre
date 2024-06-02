namespace Repository.Implement
{
    public class DanhMucChuongTrinhQuanLyChatLuongRepository : BaseRepository<DanhMucChuongTrinhQuanLyChatLuong>
    , IDanhMucChuongTrinhQuanLyChatLuongRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucChuongTrinhQuanLyChatLuongRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

