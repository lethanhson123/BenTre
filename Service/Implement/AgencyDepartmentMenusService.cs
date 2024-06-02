namespace Service.Implement
{
    public class AgencyDepartmentMenusService : BaseService<AgencyDepartmentMenus, IAgencyDepartmentMenusRepository>
    , IAgencyDepartmentMenusService
    {
    private readonly IAgencyDepartmentMenusRepository _AgencyDepartmentMenusRepository;
    public AgencyDepartmentMenusService(IAgencyDepartmentMenusRepository AgencyDepartmentMenusRepository) : base(AgencyDepartmentMenusRepository)
    {
    _AgencyDepartmentMenusRepository = AgencyDepartmentMenusRepository;
    }
    }
    }

