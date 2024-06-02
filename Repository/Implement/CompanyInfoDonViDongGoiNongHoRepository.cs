namespace Repository.Implement
{
    public class CompanyInfoDonViDongGoiNongHoRepository : BaseRepository<CompanyInfoDonViDongGoiNongHo>
    , ICompanyInfoDonViDongGoiNongHoRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoDonViDongGoiNongHoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

