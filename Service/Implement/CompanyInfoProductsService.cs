namespace Service.Implement
{
    public class CompanyInfoProductsService : BaseService<CompanyInfoProducts, ICompanyInfoProductsRepository>
    , ICompanyInfoProductsService
    {
    private readonly ICompanyInfoProductsRepository _CompanyInfoProductsRepository;
    public CompanyInfoProductsService(ICompanyInfoProductsRepository CompanyInfoProductsRepository) : base(CompanyInfoProductsRepository)
    {
    _CompanyInfoProductsRepository = CompanyInfoProductsRepository;
    }
    }
    }

