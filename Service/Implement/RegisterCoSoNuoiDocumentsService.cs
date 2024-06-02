namespace Service.Implement
{
    public class RegisterCoSoNuoiDocumentsService : BaseService<RegisterCoSoNuoiDocuments, IRegisterCoSoNuoiDocumentsRepository>
    , IRegisterCoSoNuoiDocumentsService
    {
    private readonly IRegisterCoSoNuoiDocumentsRepository _RegisterCoSoNuoiDocumentsRepository;
    public RegisterCoSoNuoiDocumentsService(IRegisterCoSoNuoiDocumentsRepository RegisterCoSoNuoiDocumentsRepository) : base(RegisterCoSoNuoiDocumentsRepository)
    {
    _RegisterCoSoNuoiDocumentsRepository = RegisterCoSoNuoiDocumentsRepository;
    }
    }
    }

