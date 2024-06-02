namespace Repository.Implement
{
    public class ProductInfoDocumentsRepository : BaseRepository<ProductInfoDocuments>
    , IProductInfoDocumentsRepository
    {
    private readonly Data.Context.Context _context;
    public ProductInfoDocumentsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

