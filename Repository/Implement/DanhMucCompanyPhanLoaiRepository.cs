namespace Repository.Implement
{
    public class DanhMucCompanyPhanLoaiRepository : BaseRepository<DanhMucCompanyPhanLoai>
    , IDanhMucCompanyPhanLoaiRepository
    {
    private readonly Data.Context.Context _context;
    public DanhMucCompanyPhanLoaiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

