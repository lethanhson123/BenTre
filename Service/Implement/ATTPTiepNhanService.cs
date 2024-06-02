namespace Service.Implement
{
    public class ATTPTiepNhanService : BaseService<ATTPTiepNhan, IATTPTiepNhanRepository>
    , IATTPTiepNhanService
    {
    private readonly IATTPTiepNhanRepository _ATTPTiepNhanRepository;
    public ATTPTiepNhanService(IATTPTiepNhanRepository ATTPTiepNhanRepository) : base(ATTPTiepNhanRepository)
    {
    _ATTPTiepNhanRepository = ATTPTiepNhanRepository;
    }
    }
    }

