namespace Service.Implement
{
    public class PlanTypeService : BaseService<PlanType, IPlanTypeRepository>
    , IPlanTypeService
    {
    private readonly IPlanTypeRepository _PlanTypeRepository;
    public PlanTypeService(IPlanTypeRepository PlanTypeRepository) : base(PlanTypeRepository)
    {
    _PlanTypeRepository = PlanTypeRepository;
    }
    }
    }

