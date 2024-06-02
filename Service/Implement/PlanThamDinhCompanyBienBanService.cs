using Data.Model;

namespace Service.Implement
{
    public class PlanThamDinhCompanyBienBanService : BaseService<PlanThamDinhCompanyBienBan, IPlanThamDinhCompanyBienBanRepository>
    , IPlanThamDinhCompanyBienBanService
    {
        private readonly IPlanThamDinhCompanyBienBanRepository _PlanThamDinhCompanyBienBanRepository;

        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IPlanThamDinhService _PlanThamDinhService;

        private readonly IBienBanATTPService _BienBanATTPService;
        private readonly IDanhMucThamDinhKetQuaDanhGiaService _DanhMucThamDinhKetQuaDanhGiaService;

        public PlanThamDinhCompanyBienBanService(IPlanThamDinhCompanyBienBanRepository PlanThamDinhCompanyBienBanRepository

            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService
            , IPlanThamDinhService PlanThamDinhService

            , IBienBanATTPService BienBanATTPService
            , IDanhMucThamDinhKetQuaDanhGiaService DanhMucThamDinhKetQuaDanhGiaService

            ) : base(PlanThamDinhCompanyBienBanRepository)
        {
            _PlanThamDinhCompanyBienBanRepository = PlanThamDinhCompanyBienBanRepository;

            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _PlanThamDinhService = PlanThamDinhService;

            _BienBanATTPService = BienBanATTPService;
            _DanhMucThamDinhKetQuaDanhGiaService = DanhMucThamDinhKetQuaDanhGiaService;
        }

        public override void Initialization(PlanThamDinhCompanyBienBan model)
        {
            BaseInitialization(model);
            if (model.BienBanATTPID > 0)
            {
                BienBanATTP bienBanATTP = _BienBanATTPService.GetByID(model.BienBanATTPID.Value);
                model.Name = bienBanATTP.Name;
                model.Description = bienBanATTP.Description;
                model.Note = bienBanATTP.Note;
            }
            if (model.DanhMucThamDinhKetQuaDanhGiaID > 0)
            {
                model.Display = _BienBanATTPService.GetByID(model.DanhMucThamDinhKetQuaDanhGiaID.Value).Name;
            }
        }
        public override async Task<PlanThamDinhCompanyBienBan> SaveAsync(PlanThamDinhCompanyBienBan model)
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
            }
            if (model.ID > 0)
            {                
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public async Task<int> SyncAsync(long ParentID, long PlanThamDinhID, long DanhMucProductGroupID)
        {
            int result = GlobalHelper.InitializationNumber;
            if (ParentID > 0)
            {
                PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(ParentID);            
                List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await GetByParentID_DanhMucProductGroupIDToListAsync(planThamDinhCompanies.ID, DanhMucProductGroupID);
                if (listPlanThamDinhCompanyBienBan.Count > 0)
                {
                    planThamDinhCompanies.ChiTieuDanhGiaCount = GlobalHelper.InitializationNumber;
                    planThamDinhCompanies.Dat_Ac_Count = GlobalHelper.InitializationNumber;
                    planThamDinhCompanies.Nhe_Mi_Count = GlobalHelper.InitializationNumber;
                    planThamDinhCompanies.Nang_Ma_Count = GlobalHelper.InitializationNumber;
                    planThamDinhCompanies.NghiemTrong_Se_Count = GlobalHelper.InitializationNumber;

                    for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                    {
                        PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                        planThamDinhCompanies.DanhMucProductGroupID = itemPlanThamDinhCompanyBienBan.DanhMucProductGroupID;
                        planThamDinhCompanies.DanhMucProductGroupName = itemPlanThamDinhCompanyBienBan.DanhMucProductGroupName;

                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID != null)
                        {
                            planThamDinhCompanies.ChiTieuDanhGiaCount = planThamDinhCompanies.ChiTieuDanhGiaCount + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                        {
                            planThamDinhCompanies.Dat_Ac_Count = planThamDinhCompanies.Dat_Ac_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 2)
                        {
                            planThamDinhCompanies.Nhe_Mi_Count = planThamDinhCompanies.Nhe_Mi_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 3)
                        {
                            planThamDinhCompanies.Nang_Ma_Count = planThamDinhCompanies.Nang_Ma_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 4)
                        {
                            planThamDinhCompanies.NghiemTrong_Se_Count = planThamDinhCompanies.NghiemTrong_Se_Count + 1;
                        }
                    }
                    await _PlanThamDinhCompaniesService.SaveAsync(planThamDinhCompanies);
                }
            }
            if (PlanThamDinhID > 0)
            {
                PlanThamDinh PlanThamDinh = await _PlanThamDinhService.GetByIDAsync(PlanThamDinhID);
                List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await GetByPlanThamDinhID_DanhMucProductGroupIDToListAsync(PlanThamDinh.ID, DanhMucProductGroupID);
                if (listPlanThamDinhCompanyBienBan.Count > 0)
                {
                    PlanThamDinh.ChiTieuDanhGiaCount = GlobalHelper.InitializationNumber;
                    PlanThamDinh.Dat_Ac_Count = GlobalHelper.InitializationNumber;
                    PlanThamDinh.Nhe_Mi_Count = GlobalHelper.InitializationNumber;
                    PlanThamDinh.Nang_Ma_Count = GlobalHelper.InitializationNumber;
                    PlanThamDinh.NghiemTrong_Se_Count = GlobalHelper.InitializationNumber;

                    for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                    {
                        PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                        PlanThamDinh.DanhMucProductGroupID = itemPlanThamDinhCompanyBienBan.DanhMucProductGroupID;
                        PlanThamDinh.DanhMucProductGroupName = itemPlanThamDinhCompanyBienBan.DanhMucProductGroupName;

                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID != null)
                        {
                            PlanThamDinh.ChiTieuDanhGiaCount = PlanThamDinh.ChiTieuDanhGiaCount + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                        {
                            PlanThamDinh.Dat_Ac_Count = PlanThamDinh.Dat_Ac_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 2)
                        {
                            PlanThamDinh.Nhe_Mi_Count = PlanThamDinh.Nhe_Mi_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 3)
                        {
                            PlanThamDinh.Nang_Ma_Count = PlanThamDinh.Nang_Ma_Count + 1;
                        }
                        if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 4)
                        {
                            PlanThamDinh.NghiemTrong_Se_Count = PlanThamDinh.NghiemTrong_Se_Count + 1;
                        }
                    }
                    await _PlanThamDinhService.SaveAsync(PlanThamDinh);
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanyBienBan>> GetByPlanThamDinhID_DanhMucProductGroupIDToListAsync(long PlanThamDinhID, long danhMucProductGroupID)
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            if (PlanThamDinhID > 0)
            {               
                result = await GetByCondition(item => item.PlanThamDinhID == PlanThamDinhID && item.DanhMucProductGroupID == danhMucProductGroupID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanyBienBan>> GetByParentID_DanhMucProductGroupIDToListAsync(long parentID, long danhMucProductGroupID)
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.DanhMucProductGroupID == danhMucProductGroupID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_BienBanATTPParentIDToListAsync(long parentID, long bienBanATTPParentID)
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@ParentID",parentID),
                    new SqlParameter("@BienBanATTPParentID", bienBanATTPParentID),
            };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompanyBienBanSelectItemsByParentID_BienBanATTPParentID", parameters);
            //await SyncAsync(parentID, bienBanATTPParentID);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByParentID_DanhMucProductGroupIDToListAsync(long parentID, long danhMucProductGroupID)
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@ParentID",parentID),
                    new SqlParameter("@DanhMucProductGroupID", danhMucProductGroupID),
            };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompanyBienBanSelectItemsByParentID_DanhMucProductGroupID", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanyBienBan>> GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync(long planThamDinhID, long danhMucProductGroupID)
        {
            List<PlanThamDinhCompanyBienBan> result = new List<PlanThamDinhCompanyBienBan>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@PlanThamDinhID",planThamDinhID),
                    new SqlParameter("@DanhMucProductGroupID", danhMucProductGroupID),
            };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompanyBienBanSelectItemsByPlanThamDinhID_DanhMucProductGroupID", parameters);         
            return result;
        }
    }
}

