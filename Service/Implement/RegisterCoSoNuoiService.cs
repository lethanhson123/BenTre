namespace Service.Implement
{
    public class RegisterCoSoNuoiService : BaseService<RegisterCoSoNuoi, IRegisterCoSoNuoiRepository>
    , IRegisterCoSoNuoiService
    {
    private readonly IRegisterCoSoNuoiRepository _RegisterCoSoNuoiRepository;
    public RegisterCoSoNuoiService(IRegisterCoSoNuoiRepository RegisterCoSoNuoiRepository) : base(RegisterCoSoNuoiRepository)
    {
    _RegisterCoSoNuoiRepository = RegisterCoSoNuoiRepository;
    }
    }
    }

