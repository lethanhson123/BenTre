namespace Repository.Implement
{
    public class CompanyInfoDonViDongGoiRepository : BaseRepository<CompanyInfoDonViDongGoi>
    , ICompanyInfoDonViDongGoiRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoDonViDongGoiRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

