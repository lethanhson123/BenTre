namespace Repository.Implement
{
    public class CauHoiNhomRepository : BaseRepository<CauHoiNhom>
    , ICauHoiNhomRepository
    {
    private readonly Data.Context.Context _context;
    public CauHoiNhomRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

