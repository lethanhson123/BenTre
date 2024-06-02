namespace Service.Implement
{
    public class RegisterCoSoNuoiLakesService : BaseService<RegisterCoSoNuoiLakes, IRegisterCoSoNuoiLakesRepository>
    , IRegisterCoSoNuoiLakesService
    {
    private readonly IRegisterCoSoNuoiLakesRepository _RegisterCoSoNuoiLakesRepository;
    public RegisterCoSoNuoiLakesService(IRegisterCoSoNuoiLakesRepository RegisterCoSoNuoiLakesRepository) : base(RegisterCoSoNuoiLakesRepository)
    {
    _RegisterCoSoNuoiLakesRepository = RegisterCoSoNuoiLakesRepository;
    }
    }
    }

