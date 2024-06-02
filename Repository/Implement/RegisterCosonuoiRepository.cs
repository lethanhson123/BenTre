namespace Repository.Implement
{
    public class RegisterCoSoNuoiRepository : BaseRepository<RegisterCoSoNuoi>
    , IRegisterCoSoNuoiRepository
    {
    private readonly Data.Context.Context _context;
    public RegisterCoSoNuoiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

