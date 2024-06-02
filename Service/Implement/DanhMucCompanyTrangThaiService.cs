namespace Service.Implement
{
    public class DanhMucCompanyTrangThaiService : BaseService<DanhMucCompanyTrangThai, IDanhMucCompanyTrangThaiRepository>
    , IDanhMucCompanyTrangThaiService
    {
    private readonly IDanhMucCompanyTrangThaiRepository _DanhMucCompanyTrangThaiRepository;
    public DanhMucCompanyTrangThaiService(IDanhMucCompanyTrangThaiRepository DanhMucCompanyTrangThaiRepository) : base(DanhMucCompanyTrangThaiRepository)
    {
    _DanhMucCompanyTrangThaiRepository = DanhMucCompanyTrangThaiRepository;
    }
    }
    }

