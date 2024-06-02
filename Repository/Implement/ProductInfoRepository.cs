namespace Repository.Implement
{
    public class ProductInfoRepository : BaseRepository<ProductInfo>
    , IProductInfoRepository
    {
    private readonly Data.Context.Context _context;
    public ProductInfoRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

