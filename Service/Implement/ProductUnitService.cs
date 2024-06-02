namespace Service.Implement
{
    public class ProductUnitService : BaseService<ProductUnit, IProductUnitRepository>
    , IProductUnitService
    {
    private readonly IProductUnitRepository _ProductUnitRepository;
    public ProductUnitService(IProductUnitRepository ProductUnitRepository) : base(ProductUnitRepository)
    {
    _ProductUnitRepository = ProductUnitRepository;
    }
    }
    }

