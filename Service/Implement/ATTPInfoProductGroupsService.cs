using Service.Interface;

namespace Service.Implement
{
	public class ATTPInfoProductGroupsService : BaseService<ATTPInfoProductGroups, IATTPInfoProductGroupsRepository>
	, IATTPInfoProductGroupsService
	{
		private readonly IATTPInfoProductGroupsRepository _ATTPInfoProductGroupsRepository;

		private readonly IProductGroupService _ProductGroupService;
		public ATTPInfoProductGroupsService(IATTPInfoProductGroupsRepository ATTPInfoProductGroupsRepository
			
			, IProductGroupService productGroupService
			
			) : base(ATTPInfoProductGroupsRepository)
		{
			_ATTPInfoProductGroupsRepository = ATTPInfoProductGroupsRepository;
			_ProductGroupService = productGroupService;
		}

		public override void Initialization(ATTPInfoProductGroups model)
		{			
			if (model.ProductGroupID > 0)
			{
				model.Name = _ProductGroupService.GetByID(model.ProductGroupID.Value).Name;
			}			
		}
	}
}

