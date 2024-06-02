namespace Repository.Implement
{
    public class DanhMucHinhThucNuoiRepository : BaseRepository<DanhMucHinhThucNuoi>
    , IDanhMucHinhThucNuoiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucHinhThucNuoiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

