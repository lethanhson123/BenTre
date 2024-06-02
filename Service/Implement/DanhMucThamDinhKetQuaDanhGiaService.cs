namespace Service.Implement
{
    public class DanhMucThamDinhKetQuaDanhGiaService : BaseService<DanhMucThamDinhKetQuaDanhGia, IDanhMucThamDinhKetQuaDanhGiaRepository>
    , IDanhMucThamDinhKetQuaDanhGiaService
    {
    private readonly IDanhMucThamDinhKetQuaDanhGiaRepository _DanhMucThamDinhKetQuaDanhGiaRepository;
    public DanhMucThamDinhKetQuaDanhGiaService(IDanhMucThamDinhKetQuaDanhGiaRepository DanhMucThamDinhKetQuaDanhGiaRepository) : base(DanhMucThamDinhKetQuaDanhGiaRepository)
    {
    _DanhMucThamDinhKetQuaDanhGiaRepository = DanhMucThamDinhKetQuaDanhGiaRepository;
    }
    }
    }

