namespace Service.Implement
{
    public class DanhMucChucDanhService : BaseService<DanhMucChucDanh, IDanhMucChucDanhRepository>
    , IDanhMucChucDanhService
    {
    private readonly IDanhMucChucDanhRepository _DanhMucChucDanhRepository;
    public DanhMucChucDanhService(IDanhMucChucDanhRepository DanhMucChucDanhRepository) : base(DanhMucChucDanhRepository)
    {
    _DanhMucChucDanhRepository = DanhMucChucDanhRepository;
    }
    }
    }

