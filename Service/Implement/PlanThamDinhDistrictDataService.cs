using Service.Interface;

namespace Service.Implement
{
    public class PlanThamDinhDistrictDataService : BaseService<PlanThamDinhDistrictData, IPlanThamDinhDistrictDataRepository>
    , IPlanThamDinhDistrictDataService
    {
        private readonly IPlanThamDinhDistrictDataRepository _PlanThamDinhDistrictDataRepository;

        private readonly IDistrictDataService _DistrictDataService;
        public PlanThamDinhDistrictDataService(IPlanThamDinhDistrictDataRepository PlanThamDinhDistrictDataRepository

            , IDistrictDataService DistrictDataService

            ) : base(PlanThamDinhDistrictDataRepository)
        {
            _PlanThamDinhDistrictDataRepository = PlanThamDinhDistrictDataRepository;


            _DistrictDataService = DistrictDataService;
        }
        public override void Initialization(PlanThamDinhDistrictData model)
        {
            BaseInitialization(model);
            
            if (model.DistrictDataID > 0)
            {
                model.DistrictDataName = _DistrictDataService.GetByID(model.DistrictDataID.Value).Name;
            }
        }
    }
}

