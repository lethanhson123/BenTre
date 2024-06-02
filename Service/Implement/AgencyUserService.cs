namespace Service.Implement
{
    public class AgencyUserService : BaseService<AgencyUser, IAgencyUserRepository>
    , IAgencyUserService
    {
    private readonly IAgencyUserRepository _AgencyUserRepository;
    public AgencyUserService(IAgencyUserRepository AgencyUserRepository) : base(AgencyUserRepository)
    {
    _AgencyUserRepository = AgencyUserRepository;
    }
    }
    }

