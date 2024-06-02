
namespace Service.Implement
{
    public class PlanThamDinhDanhMucLayMauChiTieuService : BaseService<PlanThamDinhDanhMucLayMauChiTieu, IPlanThamDinhDanhMucLayMauChiTieuRepository>
    , IPlanThamDinhDanhMucLayMauChiTieuService
    {
        private readonly IPlanThamDinhDanhMucLayMauChiTieuRepository _PlanThamDinhDanhMucLayMauChiTieuRepository;

        private readonly IDanhMucLayMauChiTieuService _DanhMucLayMauChiTieuService;

        private readonly IProductUnitService _ProductUnitService;
        public PlanThamDinhDanhMucLayMauChiTieuService(IPlanThamDinhDanhMucLayMauChiTieuRepository PlanThamDinhDanhMucLayMauChiTieuRepository           
            
            , IDanhMucLayMauChiTieuService danhMucLayMauChiTieuService

            , IProductUnitService ProductUnitService

            ) : base(PlanThamDinhDanhMucLayMauChiTieuRepository)
        {
            _PlanThamDinhDanhMucLayMauChiTieuRepository = PlanThamDinhDanhMucLayMauChiTieuRepository;

            _DanhMucLayMauChiTieuService = danhMucLayMauChiTieuService;

            _ProductUnitService = ProductUnitService;
        }
        public override void Initialization(PlanThamDinhDanhMucLayMauChiTieu model)
        {
            if (model.DanhMucLayMauChiTieuID > 0)
            {
                model.DanhMucLayMauChiTieuName = _DanhMucLayMauChiTieuService.GetByID(model.DanhMucLayMauChiTieuID.Value).Name;
            }
            if (model.ProductUnitID > 0)
            {
                model.ProductUnitName = _ProductUnitService.GetByID(model.ProductUnitID.Value).Name;
            }
        }
    }
}

