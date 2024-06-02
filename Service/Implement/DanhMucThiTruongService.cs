namespace Service.Implement
{
    public class DanhMucThiTruongService : BaseService<DanhMucThiTruong, IDanhMucThiTruongRepository>
    , IDanhMucThiTruongService
    {
    private readonly IDanhMucThiTruongRepository _DanhMucThiTruongRepository;
    public DanhMucThiTruongService(IDanhMucThiTruongRepository DanhMucThiTruongRepository) : base(DanhMucThiTruongRepository)
    {
    _DanhMucThiTruongRepository = DanhMucThiTruongRepository;
    }
    }
    }

