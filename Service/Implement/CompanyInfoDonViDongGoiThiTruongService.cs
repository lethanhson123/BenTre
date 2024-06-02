namespace Service.Implement
{
    public class CompanyInfoDonViDongGoiThiTruongService : BaseService<CompanyInfoDonViDongGoiThiTruong, ICompanyInfoDonViDongGoiThiTruongRepository>
    , ICompanyInfoDonViDongGoiThiTruongService
    {
        private readonly ICompanyInfoDonViDongGoiThiTruongRepository _CompanyInfoDonViDongGoiThiTruongRepository;
        public CompanyInfoDonViDongGoiThiTruongService(ICompanyInfoDonViDongGoiThiTruongRepository CompanyInfoDonViDongGoiThiTruongRepository) : base(CompanyInfoDonViDongGoiThiTruongRepository)
        {
            _CompanyInfoDonViDongGoiThiTruongRepository = CompanyInfoDonViDongGoiThiTruongRepository;
        }
    }
}

