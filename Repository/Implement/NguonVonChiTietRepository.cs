namespace Repository.Implement
{
    public class NguonVonChiTietRepository : BaseRepository<NguonVonChiTiet>
    , INguonVonChiTietRepository
    {
    private readonly Data.Context.Context _context;
    public NguonVonChiTietRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

