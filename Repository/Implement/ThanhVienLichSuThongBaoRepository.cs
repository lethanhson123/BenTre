namespace Repository.Implement
{
    public class ThanhVienLichSuThongBaoRepository : BaseRepository<ThanhVienLichSuThongBao>
    , IThanhVienLichSuThongBaoRepository
    {
    private readonly Data.Context.Context _context;
    public ThanhVienLichSuThongBaoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

