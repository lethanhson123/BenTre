namespace Repository.Implement
{
    public class DanhMucUngDungRepository : BaseRepository<DanhMucUngDung>
    , IDanhMucUngDungRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucUngDungRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

