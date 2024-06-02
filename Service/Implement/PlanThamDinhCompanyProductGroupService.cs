using Service.Interface;

namespace Service.Implement
{
    public class PlanThamDinhCompanyProductGroupService : BaseService<PlanThamDinhCompanyProductGroup, IPlanThamDinhCompanyProductGroupRepository>
    , IPlanThamDinhCompanyProductGroupService
    {
        private readonly IPlanThamDinhCompanyProductGroupRepository _PlanThamDinhCompanyProductGroupRepository;

        private readonly IProductGroupService _ProductGroupService;
        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
        public PlanThamDinhCompanyProductGroupService(IPlanThamDinhCompanyProductGroupRepository PlanThamDinhCompanyProductGroupRepository

            , IProductGroupService productGroupService
            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService

            ) : base(PlanThamDinhCompanyProductGroupRepository)
        {
            _PlanThamDinhCompanyProductGroupRepository = PlanThamDinhCompanyProductGroupRepository;

            _ProductGroupService = productGroupService;
            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;
        }

        public override void Initialization(PlanThamDinhCompanyProductGroup model)
        {
            BaseInitialization(model);

            if (!string.IsNullOrEmpty(model.ProductGroupName))
            {
                ProductGroup productGroup = new ProductGroup();
                productGroup.Name = model.ProductGroupName;
                productGroup = _ProductGroupService.Save(productGroup);
                model.ProductGroupID = productGroup.ID;
            }
            else
            {
                if (model.ProductGroupID > 0)
                {
                    ProductGroup productGroup = _ProductGroupService.GetByID(model.ProductGroupID.Value);
                    model.ProductGroupName = productGroup.Name;
                    model.DanhMucProductGroupID = productGroup.ParentID;
                    model.DanhMucProductGroupName = productGroup.Display;
                }
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
        }
        public async Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDToListAsync(long planThamDinhID)
        {
            List<PlanThamDinhCompanyProductGroup> result = new List<PlanThamDinhCompanyProductGroup>();
            if (planThamDinhID > 0)
            {
                result = await GetByCondition(item => item.PlanThamDinhID == planThamDinhID).ToListAsync();
            }
            return result;
        }
        public async Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDAndEmptyToListAsync(long planThamDinhID)
        {
            List<PlanThamDinhCompanyProductGroup> result = new List<PlanThamDinhCompanyProductGroup>();
            PlanThamDinhCompanyProductGroup empty = new PlanThamDinhCompanyProductGroup();
            result.Add(empty);
            if (planThamDinhID > 0)
            {
                List<PlanThamDinhCompanyProductGroup> list = await GetByPlanThamDinhIDToListAsync(planThamDinhID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            return result;
        }
    }
}

