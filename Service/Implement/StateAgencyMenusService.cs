namespace Service.Implement
{
    public class StateAgencyMenusService : BaseService<StateAgencyMenus, IStateAgencyMenusRepository>
    , IStateAgencyMenusService
    {
    private readonly IStateAgencyMenusRepository _StateAgencyMenusRepository;
    public StateAgencyMenusService(IStateAgencyMenusRepository StateAgencyMenusRepository) : base(StateAgencyMenusRepository)
    {
    _StateAgencyMenusRepository = StateAgencyMenusRepository;
    }
    }
    }

