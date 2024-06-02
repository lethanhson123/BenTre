namespace Service.Implement
{
    public class CompanyInfoDonViDongGoiSanPhamService : BaseService<CompanyInfoDonViDongGoiSanPham, ICompanyInfoDonViDongGoiSanPhamRepository>
    , ICompanyInfoDonViDongGoiSanPhamService
    {
    private readonly ICompanyInfoDonViDongGoiSanPhamRepository _CompanyInfoDonViDongGoiSanPhamRepository;
    public CompanyInfoDonViDongGoiSanPhamService(ICompanyInfoDonViDongGoiSanPhamRepository CompanyInfoDonViDongGoiSanPhamRepository) : base(CompanyInfoDonViDongGoiSanPhamRepository)
    {
    _CompanyInfoDonViDongGoiSanPhamRepository = CompanyInfoDonViDongGoiSanPhamRepository;
    }
    }
    }

