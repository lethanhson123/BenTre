using Service.Interface;

namespace Service.Implement
{
	public class PhanAnhService : BaseService<PhanAnh, IPhanAnhRepository>
	, IPhanAnhService
	{
		private readonly IPhanAnhRepository _PhanAnhRepository;

		private readonly ICompanyInfoService _CompanyInfoService;
		public PhanAnhService(IPhanAnhRepository PhanAnhRepository

			, ICompanyInfoService CompanyInfoService

			) : base(PhanAnhRepository)
		{
			_PhanAnhRepository = PhanAnhRepository;

			_CompanyInfoService = CompanyInfoService;
		}
		public override void Initialization(PhanAnh model)
		{
            BaseInitialization(model);
            if (model.ParentID > 0)
			{
				model.Display = _CompanyInfoService.GetByID(model.ParentID.Value).Name;
			}
			if (model.NgayGhiNhan == null)
			{
				model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
			}
		}
	}
}

