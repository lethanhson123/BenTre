namespace Service.Implement
{
    public class AgencyDepartmentService : BaseService<AgencyDepartment, IAgencyDepartmentRepository>
    , IAgencyDepartmentService
    {
    private readonly IAgencyDepartmentRepository _AgencyDepartmentRepository;
    public AgencyDepartmentService(IAgencyDepartmentRepository AgencyDepartmentRepository) : base(AgencyDepartmentRepository)
    {
    _AgencyDepartmentRepository = AgencyDepartmentRepository;
    }
    }
    }

