namespace Service.Implement
{
    public class ATTPInfoProductGoodsService : BaseService<ATTPInfoProductGoods, IATTPInfoProductGoodsRepository>
    , IATTPInfoProductGoodsService
    {
    private readonly IATTPInfoProductGoodsRepository _ATTPInfoProductGoodsRepository;
    public ATTPInfoProductGoodsService(IATTPInfoProductGoodsRepository ATTPInfoProductGoodsRepository) : base(ATTPInfoProductGoodsRepository)
    {
    _ATTPInfoProductGoodsRepository = ATTPInfoProductGoodsRepository;
    }
    }
    }

