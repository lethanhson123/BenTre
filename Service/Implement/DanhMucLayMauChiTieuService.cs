namespace Service.Implement
{
    public class DanhMucLayMauChiTieuService : BaseService<DanhMucLayMauChiTieu, IDanhMucLayMauChiTieuRepository>
    , IDanhMucLayMauChiTieuService
    {
        private readonly IDanhMucLayMauChiTieuRepository _DanhMucLayMauChiTieuRepository;
        public DanhMucLayMauChiTieuService(IDanhMucLayMauChiTieuRepository DanhMucLayMauChiTieuRepository) : base(DanhMucLayMauChiTieuRepository)
        {
            _DanhMucLayMauChiTieuRepository = DanhMucLayMauChiTieuRepository;
        }
        public override void Initialization(DanhMucLayMauChiTieu model)
        {
            BaseInitialization(model);
            if (model.ParentID == null)
            {
                model.ParentID = 1;
            }
        }
        public override DanhMucLayMauChiTieu Save(DanhMucLayMauChiTieu model)
        {
            DanhMucLayMauChiTieu DanhMucLayMauChiTieu = GetByName(model.Name);
            if (DanhMucLayMauChiTieu.ID > 0)
            {
                model = DanhMucLayMauChiTieu;
            }
            if (model.ID > 0)
            {
                Update(model);
            }
            else
            {
                Add(model);
            }
            return model;
        }
    }
}

