namespace Service.Implement
{
    public class DanhMucProductGroupService : BaseService<DanhMucProductGroup, IDanhMucProductGroupRepository>
    , IDanhMucProductGroupService
    {
    private readonly IDanhMucProductGroupRepository _DanhMucProductGroupRepository;
    public DanhMucProductGroupService(IDanhMucProductGroupRepository DanhMucProductGroupRepository) : base(DanhMucProductGroupRepository)
    {
    _DanhMucProductGroupRepository = DanhMucProductGroupRepository;
    }
    }
    }

