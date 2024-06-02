namespace Service.Implement
{
    public class NguonVonChiTietService : BaseService<NguonVonChiTiet, INguonVonChiTietRepository>
    , INguonVonChiTietService
    {
    private readonly INguonVonChiTietRepository _NguonVonChiTietRepository;
    public NguonVonChiTietService(INguonVonChiTietRepository NguonVonChiTietRepository) : base(NguonVonChiTietRepository)
    {
    _NguonVonChiTietRepository = NguonVonChiTietRepository;
    }
    }
    }

