namespace Service.Implement
{
    public class DanhMucSanPhamPhanLoaiService : BaseService<DanhMucSanPhamPhanLoai, IDanhMucSanPhamPhanLoaiRepository>
    , IDanhMucSanPhamPhanLoaiService
    {
    private readonly IDanhMucSanPhamPhanLoaiRepository _DanhMucSanPhamPhanLoaiRepository;
    public DanhMucSanPhamPhanLoaiService(IDanhMucSanPhamPhanLoaiRepository DanhMucSanPhamPhanLoaiRepository) : base(DanhMucSanPhamPhanLoaiRepository)
    {
    _DanhMucSanPhamPhanLoaiRepository = DanhMucSanPhamPhanLoaiRepository;
    }
    }
    }

