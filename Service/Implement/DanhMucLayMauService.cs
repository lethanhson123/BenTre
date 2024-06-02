namespace Service.Implement
{
    public class DanhMucLayMauService : BaseService<DanhMucLayMau, IDanhMucLayMauRepository>
    , IDanhMucLayMauService
    {
        private readonly IDanhMucLayMauRepository _DanhMucLayMauRepository;
        public DanhMucLayMauService(IDanhMucLayMauRepository DanhMucLayMauRepository) : base(DanhMucLayMauRepository)
        {
            _DanhMucLayMauRepository = DanhMucLayMauRepository;
        }
        public override void Initialization(DanhMucLayMau model)
        {
            BaseInitialization(model);
            if (model.ParentID == null)
            {
                model.ParentID = 1;
            }
        }
        public override DanhMucLayMau Save(DanhMucLayMau model)
        {
            DanhMucLayMau DanhMucLayMau = GetByName(model.Name);
            if (DanhMucLayMau.ID > 0)
            {
                model = DanhMucLayMau;
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

