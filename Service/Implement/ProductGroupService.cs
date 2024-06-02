using Service.Interface;

namespace Service.Implement
{
    public class ProductGroupService : BaseService<ProductGroup, IProductGroupRepository>
    , IProductGroupService
    {
        private readonly IProductGroupRepository _ProductGroupRepository;

        private readonly IDanhMucProductGroupService _DanhMucProductGroupService;

        public ProductGroupService(IProductGroupRepository ProductGroupRepository, IDanhMucProductGroupService danhMucProductGroupService) : base(ProductGroupRepository)
        {
            _ProductGroupRepository = ProductGroupRepository;
            _DanhMucProductGroupService = danhMucProductGroupService;
        }
        public override void Initialization(ProductGroup model)
        {
            BaseInitialization(model);

            if (model.ParentID > 0)
            {
                model.Display = _DanhMucProductGroupService.GetByID(model.ParentID.Value).Name;
            }
        }
        public override ProductGroup Save(ProductGroup model)
        {
            ProductGroup productGroup = GetByName(model.Name);
            if (productGroup.ID > 0)
            {
                model = productGroup;
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
        public override async Task<ProductGroup> SaveAsync(ProductGroup model)
        {
            ProductGroup productGroup = await GetByNameAsync(model.Name);
            if (productGroup.ID > 0)
            {
                model = productGroup;
            }
            if (model.ID > 0)
            {
                await UpdateAsync(model);
            }
            else
            {
                await AddAsync(model);
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
    }
}

