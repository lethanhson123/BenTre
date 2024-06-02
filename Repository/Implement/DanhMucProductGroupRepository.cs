namespace Repository.Implement
{
    public class DanhMucProductGroupRepository : BaseRepository<DanhMucProductGroup>
    , IDanhMucProductGroupRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucProductGroupRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

