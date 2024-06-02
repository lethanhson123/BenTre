namespace Repository.Implement
{
    public class CompanyInfoDonViDongGoiThiTruongRepository : BaseRepository<CompanyInfoDonViDongGoiThiTruong>
    , ICompanyInfoDonViDongGoiThiTruongRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoDonViDongGoiThiTruongRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

