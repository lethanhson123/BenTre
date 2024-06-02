namespace Service.Implement
{
    public class DanhMucCompanyPhanLoaiService : BaseService<DanhMucCompanyPhanLoai, IDanhMucCompanyPhanLoaiRepository>
    , IDanhMucCompanyPhanLoaiService
    {
    private readonly IDanhMucCompanyPhanLoaiRepository _DanhMucCompanyPhanLoaiRepository;
    public DanhMucCompanyPhanLoaiService(IDanhMucCompanyPhanLoaiRepository DanhMucCompanyPhanLoaiRepository) : base(DanhMucCompanyPhanLoaiRepository)
    {
    _DanhMucCompanyPhanLoaiRepository = DanhMucCompanyPhanLoaiRepository;
    }
    }
    }

