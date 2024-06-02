namespace Service.Implement
{
    public class ATTPTiepNhanProductGroupsService : BaseService<ATTPTiepNhanProductGroups, IATTPTiepNhanProductGroupsRepository>
    , IATTPTiepNhanProductGroupsService
    {
    private readonly IATTPTiepNhanProductGroupsRepository _ATTPTiepNhanProductGroupsRepository;
    public ATTPTiepNhanProductGroupsService(IATTPTiepNhanProductGroupsRepository ATTPTiepNhanProductGroupsRepository) : base(ATTPTiepNhanProductGroupsRepository)
    {
    _ATTPTiepNhanProductGroupsRepository = ATTPTiepNhanProductGroupsRepository;
    }
    }
    }

