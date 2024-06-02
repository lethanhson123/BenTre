namespace Service.Implement
{
    public class ATTPTiepNhanDocumentsService : BaseService<ATTPTiepNhanDocuments, IATTPTiepNhanDocumentsRepository>
    , IATTPTiepNhanDocumentsService
    {
    private readonly IATTPTiepNhanDocumentsRepository _ATTPTiepNhanDocumentsRepository;
    public ATTPTiepNhanDocumentsService(IATTPTiepNhanDocumentsRepository ATTPTiepNhanDocumentsRepository) : base(ATTPTiepNhanDocumentsRepository)
    {
    _ATTPTiepNhanDocumentsRepository = ATTPTiepNhanDocumentsRepository;
    }
    }
    }

