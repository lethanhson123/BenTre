namespace Service.Implement
{
    public class ATTPInfoTimelinesService : BaseService<ATTPInfoTimelines, IATTPInfoTimelinesRepository>
    , IATTPInfoTimelinesService
    {
    private readonly IATTPInfoTimelinesRepository _ATTPInfoTimelinesRepository;
    public ATTPInfoTimelinesService(IATTPInfoTimelinesRepository ATTPInfoTimelinesRepository) : base(ATTPInfoTimelinesRepository)
    {
    _ATTPInfoTimelinesRepository = ATTPInfoTimelinesRepository;
    }
    }
    }

