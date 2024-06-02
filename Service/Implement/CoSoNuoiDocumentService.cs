namespace Service.Implement
{
    public class CoSoNuoiDocumentService : BaseService<CoSoNuoiDocument, ICoSoNuoiDocumentRepository>
    , ICoSoNuoiDocumentService
    {
    private readonly ICoSoNuoiDocumentRepository _CoSoNuoiDocumentRepository;
    public CoSoNuoiDocumentService(ICoSoNuoiDocumentRepository CoSoNuoiDocumentRepository) : base(CoSoNuoiDocumentRepository)
    {
    _CoSoNuoiDocumentRepository = CoSoNuoiDocumentRepository;
    }
    }
    }

