namespace Service.Implement
{
    public class ProductInfoDocumentsService : BaseService<ProductInfoDocuments, IProductInfoDocumentsRepository>
    , IProductInfoDocumentsService
    {
        private readonly IProductInfoDocumentsRepository _ProductInfoDocumentsRepository;
        public ProductInfoDocumentsService(IProductInfoDocumentsRepository ProductInfoDocumentsRepository) : base(ProductInfoDocumentsRepository)
        {
            _ProductInfoDocumentsRepository = ProductInfoDocumentsRepository;
        }
    }
}

