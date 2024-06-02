namespace Repository.Implement
{
    public class ProductUnitRepository : BaseRepository<ProductUnit>
    , IProductUnitRepository
    {
    private readonly Data.Context.Context _context;
    public ProductUnitRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

