namespace Service.Implement
{
    public class ATTPInfoProductBadsService : BaseService<ATTPInfoProductBads, IATTPInfoProductBadsRepository>
    , IATTPInfoProductBadsService
    {
    private readonly IATTPInfoProductBadsRepository _ATTPInfoProductBadsRepository;
    public ATTPInfoProductBadsService(IATTPInfoProductBadsRepository ATTPInfoProductBadsRepository) : base(ATTPInfoProductBadsRepository)
    {
    _ATTPInfoProductBadsRepository = ATTPInfoProductBadsRepository;
    }
    }
    }

