namespace Service.Implement
{
    public class DanhMucATTPLoaiHoSoService : BaseService<DanhMucATTPLoaiHoSo, IDanhMucATTPLoaiHoSoRepository>
    , IDanhMucATTPLoaiHoSoService
    {
    private readonly IDanhMucATTPLoaiHoSoRepository _DanhMucATTPLoaiHoSoRepository;
    public DanhMucATTPLoaiHoSoService(IDanhMucATTPLoaiHoSoRepository DanhMucATTPLoaiHoSoRepository) : base(DanhMucATTPLoaiHoSoRepository)
    {
    _DanhMucATTPLoaiHoSoRepository = DanhMucATTPLoaiHoSoRepository;
    }
    }
    }

