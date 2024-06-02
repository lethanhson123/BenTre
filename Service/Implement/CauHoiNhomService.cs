namespace Service.Implement
{
    public class CauHoiNhomService : BaseService<CauHoiNhom, ICauHoiNhomRepository>
    , ICauHoiNhomService
    {
    private readonly ICauHoiNhomRepository _CauHoiNhomRepository;
    public CauHoiNhomService(ICauHoiNhomRepository CauHoiNhomRepository) : base(CauHoiNhomRepository)
    {
    _CauHoiNhomRepository = CauHoiNhomRepository;
    }
    }
    }

