namespace Service.Implement
{
    public class DanhMucCompanyInfoService : BaseService<DanhMucCompanyInfo, IDanhMucCompanyInfoRepository>
    , IDanhMucCompanyInfoService
    {
    private readonly IDanhMucCompanyInfoRepository _DanhMucCompanyInfoRepository;
    public DanhMucCompanyInfoService(IDanhMucCompanyInfoRepository DanhMucCompanyInfoRepository) : base(DanhMucCompanyInfoRepository)
    {
    _DanhMucCompanyInfoRepository = DanhMucCompanyInfoRepository;
    }
    }
    }

