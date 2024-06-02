namespace Service.Implement
{
    public class DanhMucCompanyTinhTrangService : BaseService<DanhMucCompanyTinhTrang, IDanhMucCompanyTinhTrangRepository>
    , IDanhMucCompanyTinhTrangService
    {
    private readonly IDanhMucCompanyTinhTrangRepository _DanhMucCompanyTinhTrangRepository;
    public DanhMucCompanyTinhTrangService(IDanhMucCompanyTinhTrangRepository DanhMucCompanyTinhTrangRepository) : base(DanhMucCompanyTinhTrangRepository)
    {
    _DanhMucCompanyTinhTrangRepository = DanhMucCompanyTinhTrangRepository;
    }
    }
    }

