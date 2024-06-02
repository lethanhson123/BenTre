namespace Repository.Implement
{
    public class ATTPInfoProductGoodsRepository : BaseRepository<ATTPInfoProductGoods>
    , IATTPInfoProductGoodsRepository
    {
    private readonly Data.Context.Context _context;
    public ATTPInfoProductGoodsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

