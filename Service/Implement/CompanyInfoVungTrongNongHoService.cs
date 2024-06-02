using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoVungTrongNongHoService : BaseService<CompanyInfoVungTrongNongHo, ICompanyInfoVungTrongNongHoRepository>
    , ICompanyInfoVungTrongNongHoService
    {
        private readonly ICompanyInfoVungTrongNongHoRepository _CompanyInfoVungTrongNongHoRepository;

        private readonly IThanhVienService _ThanhVienService;

        public CompanyInfoVungTrongNongHoService(ICompanyInfoVungTrongNongHoRepository CompanyInfoVungTrongNongHoRepository
            , IThanhVienService thanhVienService
        ) : base(CompanyInfoVungTrongNongHoRepository)
        {
            _CompanyInfoVungTrongNongHoRepository = CompanyInfoVungTrongNongHoRepository;

            _ThanhVienService = thanhVienService;   
        }
        public override void Initialization(CompanyInfoVungTrongNongHo model)
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

