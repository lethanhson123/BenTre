namespace Service.Implement
{
    public class AgencyMenuService : BaseService<AgencyMenu, IAgencyMenuRepository>
    , IAgencyMenuService
    {
    private readonly IAgencyMenuRepository _AgencyMenuRepository;
    public AgencyMenuService(IAgencyMenuRepository AgencyMenuRepository) : base(AgencyMenuRepository)
    {
    _AgencyMenuRepository = AgencyMenuRepository;
    }
    }
    }

