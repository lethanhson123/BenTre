namespace Repository.Implement
{
    public class RegisterCoSoNuoiDocumentsRepository : BaseRepository<RegisterCoSoNuoiDocuments>
    , IRegisterCoSoNuoiDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public RegisterCoSoNuoiDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

