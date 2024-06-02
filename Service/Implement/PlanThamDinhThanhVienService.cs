
using Service.Interface;

namespace Service.Implement
{
	public class PlanThamDinhThanhVienService : BaseService<PlanThamDinhThanhVien, IPlanThamDinhThanhVienRepository>
	, IPlanThamDinhThanhVienService
	{
		private readonly IPlanThamDinhThanhVienRepository _PlanThamDinhThanhVienRepository;

		private readonly IThanhVienService _ThanhVienService;
		private readonly IDanhMucChucDanhService _DanhMucChucDanhService;
        private readonly IDistrictDataService _DistrictDataService;
        public PlanThamDinhThanhVienService(IPlanThamDinhThanhVienRepository PlanThamDinhThanhVienRepository

			, IThanhVienService ThanhVienService
			, IDanhMucChucDanhService DanhMucChucDanhService
            , IDistrictDataService DistrictDataService

            ) : base(PlanThamDinhThanhVienRepository)
		{
			_PlanThamDinhThanhVienRepository = PlanThamDinhThanhVienRepository;

			_ThanhVienService = ThanhVienService;
			_DanhMucChucDanhService = DanhMucChucDanhService;
            _DistrictDataService = DistrictDataService;
        }
		public override void Initialization(PlanThamDinhThanhVien model)
		{
			if (model.ThanhVienID > 0)
			{
				model.ThanhVienName = _ThanhVienService.GetByID(model.ThanhVienID.Value).Name;
			}
			if (model.DanhMucChucDanhID > 0)
			{
				model.DanhMucChucDanhName = _DanhMucChucDanhService.GetByID(model.DanhMucChucDanhID.Value).Name;
			}
            if (model.DistrictDataID > 0)
            {
                model.DistrictDataName = _DistrictDataService.GetByID(model.DistrictDataID.Value).Name;
            }
        }

		public virtual async Task<List<PlanThamDinhThanhVien>> GetByListParentIDToListAsync(List<long> listParentID)
		{
			List<PlanThamDinhThanhVien> result = new List<PlanThamDinhThanhVien>();
			if (listParentID.Count > 0)
			{
				result = await GetByCondition(item => listParentID.Contains(item.ID)).ToListAsync();
			}
			return result;
		}
	}
}

