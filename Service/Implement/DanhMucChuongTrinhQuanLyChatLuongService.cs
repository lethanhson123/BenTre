namespace Service.Implement
{
    public class DanhMucChuongTrinhQuanLyChatLuongService : BaseService<DanhMucChuongTrinhQuanLyChatLuong, IDanhMucChuongTrinhQuanLyChatLuongRepository>
    , IDanhMucChuongTrinhQuanLyChatLuongService
    {
    private readonly IDanhMucChuongTrinhQuanLyChatLuongRepository _DanhMucChuongTrinhQuanLyChatLuongRepository;
    public DanhMucChuongTrinhQuanLyChatLuongService(IDanhMucChuongTrinhQuanLyChatLuongRepository DanhMucChuongTrinhQuanLyChatLuongRepository) : base(DanhMucChuongTrinhQuanLyChatLuongRepository)
    {
    _DanhMucChuongTrinhQuanLyChatLuongRepository = DanhMucChuongTrinhQuanLyChatLuongRepository;
    }
    }
    }

