using Service.Interface;

namespace Service.Implement
{
	public class CompanyLakeService : BaseService<CompanyLake, ICompanyLakeRepository>
	, ICompanyLakeService
	{
		private readonly ICompanyLakeRepository _CompanyLakeRepository;

		private readonly ISpeciesService _SpeciesService;
		private readonly IProvinceDataService _ProvinceDataService;
		private readonly IDistrictDataService _DistrictDataService;
		private readonly IWardDataService _WardDataService;
        private readonly ICompanyInfoService _CompanyInfoService;
        public CompanyLakeService(ICompanyLakeRepository CompanyLakeRepository
			
			, ISpeciesService SpeciesService
            , IProvinceDataService ProvinceDataService
			, IDistrictDataService DistrictDataService
			, IWardDataService WardDataService

            , ICompanyInfoService CompanyInfoService

            ) : base(CompanyLakeRepository)
		{
			_CompanyLakeRepository = CompanyLakeRepository;

            _SpeciesService = SpeciesService;
			_ProvinceDataService = ProvinceDataService;
			_DistrictDataService = DistrictDataService;
			_WardDataService = WardDataService;
            _CompanyInfoService = CompanyInfoService;
        }
		public override void Initialization(CompanyLake model)
		{
            BaseInitialization(model);
            if (model.ProvinceDataID == null)
			{
				model.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;
			}
			if (model.ProvinceDataID == 0)
			{
				model.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;
			}
			if (model.ProvinceDataID > 0)
			{
				model.ProvinceDataName = _ProvinceDataService.GetByID(model.ProvinceDataID.Value).Name;
			}
			if (model.DistrictDataID > 0)
			{
				model.DistrictDataName = _DistrictDataService.GetByID(model.DistrictDataID.Value).Name;
			}
			if (model.WardDataID > 0)
			{
				model.WardDataName = _WardDataService.GetByID(model.WardDataID.Value).Name;
			}
			if (model.SpeciesID > 0)
			{
				model.species_name = _SpeciesService.GetByID(model.SpeciesID.Value).Name;
			}
            if (model.ParentID > 0)
            {
                model.TypeName = _CompanyInfoService.GetByID(model.ParentID.Value).Name;
            }
        }
        public override CompanyLake Save(CompanyLake model)
        {
            CompanyLake CompanyLake = GetByName(model.Name);
            if (CompanyLake.ID > 0)
            {
                model = CompanyLake;
            }
            if (model.ID > 0)
            {
                Update(model);
            }
            else
            {
                Add(model);
            }
            return model;
        }
    }
}

