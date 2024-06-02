namespace Repository.Implement
{
    public class RegisterCoSoNuoiLakesRepository : BaseRepository<RegisterCoSoNuoiLakes>
    , IRegisterCoSoNuoiLakesRepository
    {
    private readonly Data.Context.Context _context;
    public RegisterCoSoNuoiLakesRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

