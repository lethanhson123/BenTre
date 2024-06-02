namespace Repository.Implement
{
    public class ProductGroupRepository : BaseRepository<ProductGroup>
    , IProductGroupRepository
    {
    private readonly Data.Context.Context _context;
    public ProductGroupRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

