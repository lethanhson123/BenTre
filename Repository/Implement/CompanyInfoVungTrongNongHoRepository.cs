namespace Repository.Implement
{
    public class CompanyInfoVungTrongNongHoRepository : BaseRepository<CompanyInfoVungTrongNongHo>
    , ICompanyInfoVungTrongNongHoRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoVungTrongNongHoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

