using Service.Interface;

namespace Service.Implement
{
    public class GiaoTrinhATTPService : BaseService<GiaoTrinhATTP, IGiaoTrinhATTPRepository>
    , IGiaoTrinhATTPService
    {
        private readonly IGiaoTrinhATTPRepository _GiaoTrinhATTPRepository;

        private readonly ICauHoiNhomService _CauHoiNhomService;
        public GiaoTrinhATTPService(IGiaoTrinhATTPRepository GiaoTrinhATTPRepository

            , ICauHoiNhomService CauHoiNhomService

            ) : base(GiaoTrinhATTPRepository)
        {
            _GiaoTrinhATTPRepository = GiaoTrinhATTPRepository;

            _CauHoiNhomService = CauHoiNhomService;
        }
        public override void Initialization(GiaoTrinhATTP model)
        {
            BaseInitialization(model);
            if (model.ParentID > 0)
            {
                model.CauHoiNhomName = _CauHoiNhomService.GetByID(model.ParentID.Value).Name;
            }
            if (model.NgayGhiNhan == null)
            {
                model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
        }
    }
}

