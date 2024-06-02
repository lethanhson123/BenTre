using Service.Interface;

namespace Service.Implement
{
    public class ThanhVienThongBaoService : BaseService<ThanhVienThongBao, IThanhVienThongBaoRepository>
    , IThanhVienThongBaoService
    {
        private readonly IThanhVienThongBaoRepository _ThanhVienThongBaoRepository;

        private readonly IThanhVienRepository _ThanhVienRepository;
        public ThanhVienThongBaoService(IThanhVienThongBaoRepository ThanhVienThongBaoRepository

             , IThanhVienRepository ThanhVienRepository

            ) : base(ThanhVienThongBaoRepository)
        {
            _ThanhVienThongBaoRepository = ThanhVienThongBaoRepository;

            _ThanhVienRepository = ThanhVienRepository;
        }

        public override void Initialization(ThanhVienThongBao model)
        {
            if (model.ParentID > 0)
            {
                model.Name = _ThanhVienRepository.GetByID(model.ParentID.Value).Name;
            }
        }
    }
}

