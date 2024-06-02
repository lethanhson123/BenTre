namespace Repository.Implement
{
    public class CompanyInfoDonViDongGoiSanPhamRepository : BaseRepository<CompanyInfoDonViDongGoiSanPham>
    , ICompanyInfoDonViDongGoiSanPhamRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyInfoDonViDongGoiSanPhamRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

