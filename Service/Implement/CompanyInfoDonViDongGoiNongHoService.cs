namespace Service.Implement
{
    public class CompanyInfoDonViDongGoiNongHoService : BaseService<CompanyInfoDonViDongGoiNongHo, ICompanyInfoDonViDongGoiNongHoRepository>
    , ICompanyInfoDonViDongGoiNongHoService
    {
        private readonly ICompanyInfoDonViDongGoiNongHoRepository _CompanyInfoDonViDongGoiNongHoRepository;
        private readonly IThanhVienService _ThanhVienService;
        public CompanyInfoDonViDongGoiNongHoService(ICompanyInfoDonViDongGoiNongHoRepository CompanyInfoDonViDongGoiNongHoRepository
            , IThanhVienService ThanhVienService
        ) : base(CompanyInfoDonViDongGoiNongHoRepository)
        {
            _CompanyInfoDonViDongGoiNongHoRepository = CompanyInfoDonViDongGoiNongHoRepository;
            _ThanhVienService = ThanhVienService;
        }
        public override void Initialization(CompanyInfoDonViDongGoiNongHo model)
        {
            if (model.ThanhVienID > 0)
            {
                ThanhVien thanhVien = _ThanhVienService.GetByID(model.ThanhVienID.Value);
                model.Name = thanhVien.Name;
                model.CCCD = thanhVien.CCCD;
                model.DienThoai = thanhVien.DienThoai;
                model.Email = thanhVien.Email;
            }
        }
    }
}

