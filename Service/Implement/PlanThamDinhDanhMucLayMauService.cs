using Service.Interface;

namespace Service.Implement
{
    public class PlanThamDinhDanhMucLayMauService : BaseService<PlanThamDinhDanhMucLayMau, IPlanThamDinhDanhMucLayMauRepository>
    , IPlanThamDinhDanhMucLayMauService
    {
        private readonly IPlanThamDinhDanhMucLayMauRepository _PlanThamDinhDanhMucLayMauRepository;



        private readonly IPlanThamDinhDanhMucLayMauChiTieuService _PlanThamDinhDanhMucLayMauChiTieuService;

        private readonly IProductUnitService _ProductUnitService;
        private readonly IDistrictDataService _DistrictDataService;
        private readonly IDanhMucLayMauService _DanhMucLayMauService;
        private readonly IDanhMucLayMauChiTieuService _DanhMucLayMauChiTieuService;
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly ICompanyLakeService _CompanyLakeService;
        private readonly IThanhVienService _ThanhVienService;
        private readonly IDanhMucLayMauPhanLoaiService _DanhMucLayMauPhanLoaiService;

        private readonly IPlanThamDinhRepository _PlanThamDinhRepository;

        public PlanThamDinhDanhMucLayMauService(IPlanThamDinhDanhMucLayMauRepository PlanThamDinhDanhMucLayMauRepository

            , IPlanThamDinhDanhMucLayMauChiTieuService PlanThamDinhDanhMucLayMauChiTieuService

            , IProductUnitService ProductUnitService

            , IDistrictDataService DistrictDataService

            , IDanhMucLayMauService DanhMucLayMauService

            , IDanhMucLayMauChiTieuService danhMucLayMauChiTieuService

            , ICompanyInfoService CompanyInfoService
            , ICompanyLakeService CompanyLakeService
            , IThanhVienService ThanhVienService
            , IDanhMucLayMauPhanLoaiService DanhMucLayMauPhanLoaiService

            , IPlanThamDinhRepository PlanThamDinhRepository

            ) : base(PlanThamDinhDanhMucLayMauRepository)
        {
            _PlanThamDinhDanhMucLayMauRepository = PlanThamDinhDanhMucLayMauRepository;



            _PlanThamDinhDanhMucLayMauChiTieuService = PlanThamDinhDanhMucLayMauChiTieuService;

            _ProductUnitService = ProductUnitService;
            _DistrictDataService = DistrictDataService;

            _DanhMucLayMauService = DanhMucLayMauService;
            _DanhMucLayMauChiTieuService = danhMucLayMauChiTieuService;
            _CompanyInfoService = CompanyInfoService;
            _CompanyLakeService = CompanyLakeService;
            _ThanhVienService = ThanhVienService;
            _DanhMucLayMauPhanLoaiService = DanhMucLayMauPhanLoaiService;

            _PlanThamDinhRepository = PlanThamDinhRepository;
        }
        public override void Initialization(PlanThamDinhDanhMucLayMau model)
        {
            if (!string.IsNullOrEmpty(model.DanhMucLayMauName))
            {
                DanhMucLayMau DanhMucLayMau = new DanhMucLayMau();
                DanhMucLayMau.Active = true;
                DanhMucLayMau.DanhMucLayMauPhanLoaiID = model.DanhMucLayMauPhanLoaiID;
                DanhMucLayMau.Name = model.DanhMucLayMauName;
                DanhMucLayMau = _DanhMucLayMauService.Save(DanhMucLayMau);
                model.DanhMucLayMauID = DanhMucLayMau.ID;
            }
            else
            {

                if (model.DanhMucLayMauID > 0)
                {
                    DanhMucLayMau DanhMucLayMau = _DanhMucLayMauService.GetByID(model.DanhMucLayMauID.Value);
                    model.DanhMucLayMauName = DanhMucLayMau.Name;
                    if (model.DanhMucLayMauPhanLoaiID == null)
                    {
                        model.DanhMucLayMauPhanLoaiID = DanhMucLayMau.DanhMucLayMauPhanLoaiID;
                    }
                }
            }
            if (!string.IsNullOrEmpty(model.DanhMucLayMauChiTieuName))
            {
                DanhMucLayMauChiTieu DanhMucLayMauChiTieu = new DanhMucLayMauChiTieu();
                DanhMucLayMauChiTieu.Name = model.DanhMucLayMauChiTieuName;
                DanhMucLayMauChiTieu = _DanhMucLayMauChiTieuService.Save(DanhMucLayMauChiTieu);
                model.DanhMucLayMauChiTieuID = DanhMucLayMauChiTieu.ID;
            }
            else
            {
                if (model.DanhMucLayMauChiTieuID > 0)
                {
                    model.DanhMucLayMauChiTieuName = _DanhMucLayMauChiTieuService.GetByID(model.DanhMucLayMauChiTieuID.Value).Name;
                }
            }
            if (model.DanhMucLayMauPhanLoaiID > 0)
            {
                model.DanhMucLayMauPhanLoaiName = _DanhMucLayMauPhanLoaiService.GetByID(model.DanhMucLayMauPhanLoaiID.Value).Name;
            }

            if (model.ProductUnitID > 0)
            {
                model.ProductUnitName = _ProductUnitService.GetByID(model.ProductUnitID.Value).Name;
            }
            if (model.DistrictDataID > 0)
            {
                DistrictData DistrictData = _DistrictDataService.GetByID(model.DistrictDataID.Value);
                model.DistrictDataName = DistrictData.Name;
                model.Display = DistrictData.Note;
            }
            if (model.ThanhVienID > 0)
            {
                model.ThanhVienName = _ThanhVienService.GetByID(model.ThanhVienID.Value).Name;
            }
            if (model.CompanyInfoID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.CompanyInfoID.Value);
                model.CompanyInfoName = companyInfo.Name;
                model.Description = companyInfo.address;
            }
            if (!string.IsNullOrEmpty(model.CompanyLakeName))
            {
                CompanyLake CompanyLake = new CompanyLake();
                CompanyLake.ParentID = model.CompanyInfoID;
                CompanyLake.Name = model.CompanyLakeName;
                CompanyLake = _CompanyLakeService.Save(CompanyLake);
                model.CompanyLakeID = CompanyLake.ID;
            }
            else
            {
                if (model.CompanyLakeID > 0)
                {
                    model.CompanyLakeName = _CompanyLakeService.GetByID(model.CompanyLakeID.Value).Name;
                }
            }
            if (string.IsNullOrEmpty(model.TypeName))
            {
                PlanThamDinh PlanThamDinh = _PlanThamDinhRepository.GetByID(model.ParentID.Value);
                List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = GetByParentIDToList(model.ParentID.Value);
                int STT = listPlanThamDinhDanhMucLayMau.Count + 1;
                int nam = PlanThamDinh.Nam.Value - 2000;
                string thang = PlanThamDinh.Thang.Value.ToString();
                if (PlanThamDinh.Thang < 10)
                {
                    thang = "0" + thang;
                }
                model.TypeName = "83/" + thang + nam + "/" + STT;
            }
            if (model.IsGoiY == null)
            {
                model.IsGoiY = false;
            }
        }
        public override async Task<PlanThamDinhDanhMucLayMau> SaveAsync(PlanThamDinhDanhMucLayMau model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model.ID > 0)
            {
                result = await UpdateAsync(model);
            }
            else
            {
                result = await AddAsync(model);
            }
            if (result > 0)
            {
                await Sync(model);
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        private async Task<PlanThamDinhDanhMucLayMau> Sync(PlanThamDinhDanhMucLayMau model)
        {
            if (model.ID > 0)
            {
                List<PlanThamDinhDanhMucLayMauChiTieu> listPlanThamDinhDanhMucLayMauChiTieu = await _PlanThamDinhDanhMucLayMauChiTieuService.GetBySearchStringToListAsync(model.Code);
                for (int i = 0; i < listPlanThamDinhDanhMucLayMauChiTieu.Count; i++)
                {
                    PlanThamDinhDanhMucLayMauChiTieu itemPlanThamDinhDanhMucLayMauChiTieu = listPlanThamDinhDanhMucLayMauChiTieu[i];
                    PlanThamDinhDanhMucLayMauChiTieu itemExist = await _PlanThamDinhDanhMucLayMauChiTieuService.GetByCondition(item => item.Code == itemPlanThamDinhDanhMucLayMauChiTieu.Code && item.DanhMucLayMauChiTieuID == itemPlanThamDinhDanhMucLayMauChiTieu.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                    if (itemExist == null)
                    {
                        itemExist = new PlanThamDinhDanhMucLayMauChiTieu();
                    }
                    if (itemExist.ID > 0)
                    {
                        itemPlanThamDinhDanhMucLayMauChiTieu = itemExist;
                    }
                    itemPlanThamDinhDanhMucLayMauChiTieu.ParentID = model.ID;
                    await _PlanThamDinhDanhMucLayMauChiTieuService.SaveAsync(itemPlanThamDinhDanhMucLayMauChiTieu);
                }
                if (model.ThanhVienID > 0)
                {
                    List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                    {
                        PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];
                        if (itemPlanThamDinhDanhMucLayMau.DistrictDataID == model.DistrictDataID)
                        {
                            itemPlanThamDinhDanhMucLayMau.ThanhVienID = model.ThanhVienID;
                            itemPlanThamDinhDanhMucLayMau.ThanhVienName = model.ThanhVienName;
                            await _PlanThamDinhDanhMucLayMauRepository.UpdateAsync(itemPlanThamDinhDanhMucLayMau);
                        }
                    }
                }
            }
            return model;
        }
        public virtual async Task<List<PlanThamDinhDanhMucLayMau>> GetSQLByParentIDToListAsync(long ParentID)
        {
            List<PlanThamDinhDanhMucLayMau> result = new List<PlanThamDinhDanhMucLayMau>();
            if (ParentID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@ParentID",ParentID),
                };
                result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhDanhMucLayMauSelectItemsParentID", parameters);
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhDanhMucLayMau>> GetByParentID_IsGoiYToListAsync(long ParentID, bool IsGoiY)
        {
            List<PlanThamDinhDanhMucLayMau> result = new List<PlanThamDinhDanhMucLayMau>();
            if (ParentID > 0)
            {               
                result = await GetByCondition(item => item.ParentID == ParentID && item.IsGoiY == IsGoiY).ToListAsync();
            }
            return result;
        }
    }
}

