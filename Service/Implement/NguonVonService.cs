using Service.Interface;

namespace Service.Implement
{
    public class NguonVonService : BaseService<NguonVon, INguonVonRepository>
    , INguonVonService
    {
        private readonly INguonVonRepository _NguonVonRepository;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly IThanhVienService _ThanhVienService;
        private readonly IAgencyDepartmentService _AgencyDepartmentService;
        public NguonVonService(INguonVonRepository NguonVonRepository

             , IStateAgencyService StateAgencyService
             , IThanhVienService ThanhVienService
             , IAgencyDepartmentService AgencyDepartmentService

            ) : base(NguonVonRepository)
        {
            _NguonVonRepository = NguonVonRepository;

            _StateAgencyService = StateAgencyService;
            _ThanhVienService = ThanhVienService;
            _AgencyDepartmentService = AgencyDepartmentService;
        }
        public override void Initialization(NguonVon model)
        {
            if (model.StateAgencyID001 > 0)
            {
                model.StateAgencyName001 = _StateAgencyService.GetByID(model.StateAgencyID001.Value).Name;
            }
            if (model.StateAgencyID002 > 0)
            {
                model.StateAgencyName002 = _StateAgencyService.GetByID(model.StateAgencyID002.Value).Name;
            }
            if (model.AgencyDepartmentID > 0)
            {
                model.AgencyDepartmentName = _AgencyDepartmentService.GetByID(model.AgencyDepartmentID.Value).Name;
            }
            if (model.ThanhVienID > 0)
            {
                model.ThanhVienName = _ThanhVienService.GetByID(model.ThanhVienID.Value).Name;
            }
            if (model.NgayBatDau == null)
            {
                model.NgayBatDau = GlobalHelper.InitializationDateTime;
            }
            if (model.NgayKetThuc == null)
            {
                model.NgayKetThuc = model.NgayBatDau;
            }           
            if (model.Nam == null)
            {
                model.Nam = model.NgayBatDau.Value.Year;
            }
            if (model.Active == null)
            {
                model.Active = true;
            }
        }
        public virtual async Task<List<NguonVon>> GetByNam_ActiveToListAsync(int nam, bool active)
        {
            List<NguonVon> result = new List<NguonVon>();
            if (nam > 0)
            {
                result = await GetByCondition(item => item.Active == active && item.Nam == nam).ToListAsync();
            }
            return result;
        }
    }
}

