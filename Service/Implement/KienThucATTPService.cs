namespace Service.Implement
{
    public class KienThucATTPService : BaseService<KienThucATTP, IKienThucATTPRepository>
    , IKienThucATTPService
    {
        private readonly IKienThucATTPRepository _KienThucATTPRepository;
        public KienThucATTPService(IKienThucATTPRepository KienThucATTPRepository) : base(KienThucATTPRepository)
        {
            _KienThucATTPRepository = KienThucATTPRepository;
        }
        public override void Initialization(KienThucATTP model)
        {
            BaseInitialization(model);
            if (string.IsNullOrEmpty(model.Code))
            {
                if (!string.IsNullOrEmpty(model.Name))
                {
                    model.Code = GlobalHelper.SetName(model.Name);
                }
            }
        }
    }
}

