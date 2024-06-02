namespace Repository.Implement
{
    public class ThanhVienThietBiRepository : BaseRepository<ThanhVienThietBi>
    , IThanhVienThietBiRepository
    {
    private readonly Data.Context.Context _context;
    public ThanhVienThietBiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

