namespace Service.Implement
{
	public class CauHoiATTPService : BaseService<CauHoiATTP, ICauHoiATTPRepository>
	, ICauHoiATTPService
	{
		private readonly ICauHoiATTPRepository _CauHoiATTPRepository;

		private readonly ICauHoiNhomService _CauHoiNhomService;
		public CauHoiATTPService(ICauHoiATTPRepository CauHoiATTPRepository
			
			, ICauHoiNhomService cauHoiNhomService
			
			) : base(CauHoiATTPRepository)
		{
			_CauHoiATTPRepository = CauHoiATTPRepository;
			_CauHoiNhomService = cauHoiNhomService;
		}
		public override void Initialization(CauHoiATTP model)
		{
            BaseInitialization(model);
            if (model.ParentID > 0)
			{
				model.Description = _CauHoiNhomService.GetByID(model.ParentID.Value).Name;
			}
		}
	}
}

