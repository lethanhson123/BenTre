namespace Service.Implement
{
    public class RegisterHarvestItemsService : BaseService<RegisterHarvestItems, IRegisterHarvestItemsRepository>
    , IRegisterHarvestItemsService
    {
        private readonly IRegisterHarvestItemsRepository _RegisterHarvestItemsRepository;

        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
        public RegisterHarvestItemsService(IRegisterHarvestItemsRepository RegisterHarvestItemsRepository

            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService

            ) : base(RegisterHarvestItemsRepository)
        {
            _RegisterHarvestItemsRepository = RegisterHarvestItemsRepository;

            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;
        }
        public override void Initialization(RegisterHarvestItems model)
        {
            BaseInitialization(model);
            if (model.DanhMucATTPXepLoaiID == null)
            {
                model.DanhMucATTPXepLoaiID = 10;
            }
            if (!string.IsNullOrEmpty(model.FileName))
            {
                model.DanhMucATTPXepLoaiID = 11;
            }
            if (!string.IsNullOrEmpty(model.FileName001))
            {
                model.DanhMucATTPXepLoaiID = 12;
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
            if (model.ProductUnitID==null)
            {
                model.ProductUnitID = GlobalHelper.ProductUnitIDTan;
            }
        }
    }
}