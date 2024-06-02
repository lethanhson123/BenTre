using Data.Model;
using System;

namespace Service.Implement
{
    public class PlanThamDinhCompaniesService : BaseService<PlanThamDinhCompanies, IPlanThamDinhCompaniesRepository>
    , IPlanThamDinhCompaniesService
    {
        private readonly IPlanThamDinhCompaniesRepository _PlanThamDinhCompaniesRepository;
        private readonly IPlanThamDinhRepository _PlanThamDinhRepository;

        private readonly IATTPInfoService _ATTPInfoService;
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly ICompanyLakeService _CompanyLakeService;
        private readonly IDanhMucATTPLoaiHoSoService _DanhMucATTPLoaiHoSoService;
        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
        private readonly IDanhMucLayMauService _DanhMucLayMauService;
        private readonly IDanhMucLayMauChiTieuService _DanhMucLayMauChiTieuService;
        private readonly IDocumentTemplateService _DocumentTemplateService;

        private readonly IATTPInfoDocumentsService _ATTPInfoDocumentsService;
        private readonly IATTPInfoProductGroupsService _ATTPInfoProductGroupsService;

        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;
        private readonly IPlanThamDinhCompanyProductGroupService _PlanThamDinhCompanyProductGroupService;

        public PlanThamDinhCompaniesService(IPlanThamDinhCompaniesRepository PlanThamDinhCompaniesRepository

            , IPlanThamDinhRepository PlanThamDinhRepository

            , IATTPInfoService ATTPInfoService
            , ICompanyInfoService CompanyInfoService
            , ICompanyLakeService CompanyLakeService
            , IDanhMucATTPLoaiHoSoService DanhMucATTPLoaiHoSoService
            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService
            , IDanhMucLayMauService DanhMucLayMauService
            , IDanhMucLayMauChiTieuService danhMucLayMauChiTieuService
            , IDocumentTemplateService DocumentTemplateService

            , IATTPInfoDocumentsService ATTPInfoDocumentsService
            , IATTPInfoProductGroupsService ATTPInfoProductGroupsService

            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService
            , IPlanThamDinhCompanyProductGroupService PlanThamDinhCompanyProductGroupService

            ) : base(PlanThamDinhCompaniesRepository)
        {
            _PlanThamDinhCompaniesRepository = PlanThamDinhCompaniesRepository;
            _PlanThamDinhRepository = PlanThamDinhRepository;

            _ATTPInfoService = ATTPInfoService;
            _CompanyInfoService = CompanyInfoService;
            _CompanyLakeService = CompanyLakeService;
            _DanhMucATTPLoaiHoSoService = DanhMucATTPLoaiHoSoService;
            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;
            _DanhMucLayMauService = DanhMucLayMauService;
            _DanhMucLayMauChiTieuService = danhMucLayMauChiTieuService;
            _DocumentTemplateService = DocumentTemplateService;

            _ATTPInfoDocumentsService = ATTPInfoDocumentsService;
            _ATTPInfoProductGroupsService = ATTPInfoProductGroupsService;

            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;
            _PlanThamDinhCompanyProductGroupService = PlanThamDinhCompanyProductGroupService;
        }
       
        public override void Initialization(PlanThamDinhCompanies model)
        {
            BaseInitialization(model);
            PlanThamDinh planThamDinh = _PlanThamDinhRepository.GetByID(model.ParentID.Value);
            if (planThamDinh.ParentID == GlobalHelper.PlanTypeIDThamDinhATTP)
            {
                model.DanhMucATTPXepLoaiID = 2;

                switch (model.DanhMucProductGroupID)
                {
                    case 1:
                        ChamDiem1(model);
                        break;
                    case 2:
                        ChamDiem2(model);
                        break;
                    case 3:
                        ChamDiem3(model);
                        break;
                    case 4:
                        ChamDiem4(model);
                        break;
                    case 5:
                        ChamDiem5(model);
                        break;
                    case 6:
                        ChamDiem6(model);
                        break;
                    case 7:
                        ChamDiem7(model);
                        break;
                    case 8:
                        ChamDiem8(model);
                        break;
                    case 9:
                        ChamDiem9(model);
                        break;
                    case 10:
                        ChamDiem10(model);
                        break;
                }                              

                switch (model.DanhMucATTPXepLoaiID)
                {
                    case 2:
                        model.NgayHieuLucGiayChungNhan = model.NgayGhiNhan.Value.AddMonths(GlobalHelper.AnToanThucPhamGiayChungNhanThoiHanThang);
                        model.NgayHetHan = model.NgayGhiNhan.Value.AddMonths(18);
                        break;
                    case 3:
                        model.NgayHieuLucGiayChungNhan = model.NgayGhiNhan.Value.AddMonths(GlobalHelper.AnToanThucPhamGiayChungNhanThoiHanThang);
                        model.NgayHetHan = model.NgayGhiNhan.Value.AddMonths(12);
                        break;
                    case 4:
                        model.NgayHetHan = model.NgayGhiNhan.Value.AddMonths(3);
                        break;
                }
            }

            if (model.DanhMucATTPLoaiHoSoID > 2)
            {
                model.DanhMucATTPLoaiHoSoID = 2;
            }

            if (model.ATTPInfoID > 0)
            {
                model.ATTPInfoName = _ATTPInfoService.GetByID(model.ATTPInfoID.Value).Name;
            }
            if (model.CompanyInfoID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.CompanyInfoID.Value);
                model.CompanyInfoName = companyInfo.Name;
                if (string.IsNullOrEmpty(model.Description))
                {
                    companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                    model.Description = companyInfo.address;
                }
                if (string.IsNullOrEmpty(model.Display))
                {
                    model.Display = companyInfo.phone;
                }
                if (string.IsNullOrEmpty(model.TypeName))
                {
                    model.TypeName = companyInfo.fullname;
                }
            }
            if (model.DanhMucATTPLoaiHoSoID > 0)
            {
                model.DanhMucATTPLoaiHoSoName = _DanhMucATTPLoaiHoSoService.GetByID(model.DanhMucATTPLoaiHoSoID.Value).Name;
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
            if (model.CompanyLakeID > 0)
            {
                model.CompanyLakeName = _CompanyLakeService.GetByID(model.CompanyLakeID.Value).Name;
            }
            if (model.DanhMucLayMauID > 0)
            {
                model.DanhMucLayMauName = _DanhMucLayMauService.GetByID(model.DanhMucLayMauID.Value).Name;
            }
            if (model.DanhMucLayMauChiTieuID > 0)
            {
                model.DanhMucLayMauChiTieuName = _DanhMucLayMauChiTieuService.GetByID(model.DanhMucLayMauChiTieuID.Value).Name;
            }
            if (model.NgayGhiNhan == null)
            {
                if (model.NgayHetHan != null)
                {
                    model.NgayGhiNhan = model.NgayHetHan;
                }
                else
                {
                    model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
                }
            }
        }
        public override async Task<PlanThamDinhCompanies> SaveAsync(PlanThamDinhCompanies model)
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
            return model;
        }
        private async Task<PlanThamDinhCompanies> Sync(PlanThamDinhCompanies model)
        {
            if (model.ID > 0)
            {
                //if (model.ATTPInfoID > 0)
                //{
                //    List<ATTPInfoProductGroups> listATTPInfoProductGroups = await _ATTPInfoProductGroupsService.GetByParentIDToListAsync(model.ATTPInfoID.Value);
                //    if (listATTPInfoProductGroups.Count > 0)
                //    {
                //        foreach (ATTPInfoProductGroups itemATTPInfoProductGroups in listATTPInfoProductGroups)
                //        {
                //            PlanThamDinhCompanyProductGroup PlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByCondition(item => item.ParentID == model.ID && item.ProductGroupID == itemATTPInfoProductGroups.ProductGroupID).FirstOrDefaultAsync();
                //            if (PlanThamDinhCompanyProductGroup == null)
                //            {
                //                PlanThamDinhCompanyProductGroup = new PlanThamDinhCompanyProductGroup();
                //                PlanThamDinhCompanyProductGroup.ParentID = model.ID;
                //                PlanThamDinhCompanyProductGroup.ProductGroupID = itemATTPInfoProductGroups.ProductGroupID;
                //                await _PlanThamDinhCompanyProductGroupService.SaveAsync(PlanThamDinhCompanyProductGroup);
                //            }
                //        }
                //    }

                //    List<ATTPInfoDocuments> listATTPInfoDocuments = await _ATTPInfoDocumentsService.GetByParentIDToListAsync(model.ATTPInfoID.Value);
                //    if (listATTPInfoDocuments.Count > 0)
                //    {
                //        foreach (ATTPInfoDocuments itemATTPInfoDocuments in listATTPInfoDocuments)
                //        {
                //            PlanThamDinhCompanyDocument PlanThamDinhCompanyDocument = await _PlanThamDinhCompanyDocumentService.GetByCondition(item => item.ParentID == model.ID && item.DocumentTemplateID == itemATTPInfoDocuments.DocumentTemplateID).FirstOrDefaultAsync();
                //            if (PlanThamDinhCompanyDocument == null)
                //            {
                //                PlanThamDinhCompanyDocument = new PlanThamDinhCompanyDocument();
                //                PlanThamDinhCompanyDocument.ParentID = model.ID;
                //                PlanThamDinhCompanyDocument.DocumentTemplateID = itemATTPInfoDocuments.DocumentTemplateID;
                //                await _PlanThamDinhCompanyDocumentService.SaveAsync(PlanThamDinhCompanyDocument);
                //            }
                //        }
                //    }

                //    ATTPInfo ATTPInfo = await _ATTPInfoService.GetByIDAsync(model.ATTPInfoID.Value);
                //    ATTPInfo.DanhMucATTPTinhTrangID = 2;
                //    if ((model.DanhMucATTPXepLoaiID == 2) || (model.DanhMucATTPXepLoaiID == 3))
                //    {
                //        ATTPInfo.DanhMucATTPTinhTrangID = 4;
                //    }
                //    if ((model.DanhMucATTPXepLoaiID == 4))
                //    {
                //        ATTPInfo.DanhMucATTPTinhTrangID = 5;
                //    }
                //    await _ATTPInfoService.SaveAsync(ATTPInfo);
                //}

                List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetBySearchStringToListAsync(model.Code);
                for (int i = 0; i < listPlanThamDinhCompanyProductGroup.Count; i++)
                {
                    PlanThamDinhCompanyProductGroup itemPlanThamDinhCompanyProductGroup = listPlanThamDinhCompanyProductGroup[i];
                    PlanThamDinhCompanyProductGroup itemExist = await _PlanThamDinhCompanyProductGroupService.GetByCondition(item => item.Code == itemPlanThamDinhCompanyProductGroup.Code && item.ProductGroupID == itemPlanThamDinhCompanyProductGroup.ProductGroupID).FirstOrDefaultAsync();
                    if (itemExist == null)
                    {
                        itemExist = new PlanThamDinhCompanyProductGroup();
                    }
                    if (itemExist.ID > 0)
                    {
                        itemPlanThamDinhCompanyProductGroup = itemExist;
                    }
                    itemPlanThamDinhCompanyProductGroup.ParentID = model.ID;
                    await _PlanThamDinhCompanyProductGroupService.SaveAsync(itemPlanThamDinhCompanyProductGroup);
                }

                List<PlanThamDinhCompanyDocument> listPlanThamDinhCompanyDocument = await _PlanThamDinhCompanyDocumentService.GetBySearchStringToListAsync(model.Code);
                for (int i = 0; i < listPlanThamDinhCompanyDocument.Count; i++)
                {
                    PlanThamDinhCompanyDocument itemPlanThamDinhCompanyDocument = listPlanThamDinhCompanyDocument[i];
                    PlanThamDinhCompanyDocument itemExist = await _PlanThamDinhCompanyDocumentService.GetByCondition(item => item.Code == itemPlanThamDinhCompanyDocument.Code && item.DocumentTemplateID == itemPlanThamDinhCompanyDocument.DocumentTemplateID).FirstOrDefaultAsync();
                    if (itemExist == null)
                    {
                        itemExist = new PlanThamDinhCompanyDocument();
                    }
                    if (itemExist.ID > 0)
                    {
                        itemPlanThamDinhCompanyDocument = itemExist;
                    }
                    itemPlanThamDinhCompanyDocument.ParentID = model.ID;
                    await _PlanThamDinhCompanyDocumentService.SaveAsync(itemPlanThamDinhCompanyDocument);
                }

                PlanThamDinh planThamDinh = await _PlanThamDinhRepository.GetByIDAsync(model.ParentID.Value);
                if (planThamDinh.ID > 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(planThamDinh.ParentID.Value);
                    foreach (DocumentTemplate documentTemplate in listDocumentTemplate)
                    {
                        PlanThamDinhCompanyDocument itemExist = await _PlanThamDinhCompanyDocumentService.GetByCondition(item => item.Code == model.Code && item.DocumentTemplateID == documentTemplate.ID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            PlanThamDinhCompanyDocument planThamDinhCompanyDocument = new PlanThamDinhCompanyDocument();
                            planThamDinhCompanyDocument.ParentID = model.ID;
                            planThamDinhCompanyDocument.Code = model.Code;
                            planThamDinhCompanyDocument.DocumentTemplateID = documentTemplate.ID;
                            await _PlanThamDinhCompanyDocumentService.SaveAsync(planThamDinhCompanyDocument);
                        }
                    }
                }
            }
            return model;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByListParentIDToListAsync(List<long> listParentID)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            if (listParentID.Count > 0)
            {
                result = await GetByCondition(item => listParentID.Contains(item.ID)).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync(long districtDataID, long danhMucATTPXepLoaiID, int soThang)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@DistrictDataID",districtDataID),
                    new SqlParameter("@DanhMucATTPXepLoaiID",danhMucATTPXepLoaiID),
                    new SqlParameter("@SoThang",soThang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsDistrictDataID_DanhMucATTPXepLoaiID_SoThang", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync(long planTypeID, long districtDataID, int nam, int thang)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@PlanTypeID",planTypeID),
                    new SqlParameter("@DistrictDataID",districtDataID),                    
                    new SqlParameter("@Nam",nam),
                    new SqlParameter("@Thang",thang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_DistrictDataID_Nam_Thang", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync(long planTypeID, long districtDataID, int nam, int thang)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@PlanTypeID",planTypeID),
                    new SqlParameter("@DistrictDataID",districtDataID),
                    new SqlParameter("@Nam",nam),
                    new SqlParameter("@Thang",thang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_DistrictDataID_Nam_Thang001", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync(long planTypeID, long districtDataID, int nam, int thang)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@PlanTypeID",planTypeID),
                    new SqlParameter("@DistrictDataID",districtDataID),
                    new SqlParameter("@Nam",nam),
                    new SqlParameter("@Thang",thang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_DistrictDataID_Nam_Thang002", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetSQLByPlanTypeID_DistrictDataIDToListAsync(long planTypeID, long districtDataID)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@PlanTypeID",planTypeID),
                    new SqlParameter("@DistrictDataID",districtDataID),                    
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_DistrictDataID", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByCompanyInfoIDToListAsync(long companyInfoID)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            if (companyInfoID > 0)
            {
                result = await GetByCondition(item => item.CompanyInfoID == companyInfoID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<PlanThamDinhCompanies> GetByCompanyInfoID_NgayGhiNhanAsync(long companyInfoID, DateTime ngayGhiNhan)
        {
            PlanThamDinhCompanies result = new PlanThamDinhCompanies();
            if (companyInfoID > 0)
            {
                result = await GetByCondition(item => item.CompanyInfoID == companyInfoID && item.NgayGhiNhan.Value.Year == ngayGhiNhan.Year && item.NgayGhiNhan.Value.Month == ngayGhiNhan.Month && item.NgayGhiNhan.Value.Day == ngayGhiNhan.Day).FirstOrDefaultAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync(long planThamDinhParentID, int nam, int soDot, bool active, long danhMucATTPXepLoaiID)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            if (planThamDinhParentID > 0)
            {
                List<PlanThamDinh> listPlanThamDinh = await _PlanThamDinhRepository.GetByCondition(item => item.ParentID == planThamDinhParentID && item.Nam == nam && item.SoDot == soDot && item.Active == active).ToListAsync();
                if (listPlanThamDinh.Count > 0)
                {
                    List<long> listPlanThamDinhID = listPlanThamDinh.Select(item => item.ID).ToList();
                    if (listPlanThamDinhID.Count > 0)
                    {
                        result = await GetByCondition(item => listPlanThamDinhID.Contains(item.ParentID.Value) && item.DanhMucATTPXepLoaiID == danhMucATTPXepLoaiID).ToListAsync();
                    }
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync(long planThamDinhParentID, int nam, int thang, bool active)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            if (planThamDinhParentID > 0)
            {
                List<PlanThamDinh> listPlanThamDinh = await _PlanThamDinhRepository.GetByCondition(item => item.ParentID == planThamDinhParentID && item.Nam == nam && item.Thang == thang && item.Active == active).ToListAsync();
                if (listPlanThamDinh.Count > 0)
                {
                    List<long> listPlanThamDinhID = listPlanThamDinh.Select(item => item.ID).ToList();
                    if (listPlanThamDinhID.Count > 0)
                    {
                        result = await GetByCondition(item => listPlanThamDinhID.Contains(item.ParentID.Value)).ToListAsync();
                    }
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync(long planThamDinhParentID, long districtDataID, long wardDataID, bool active)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            if (planThamDinhParentID > 0)
            {
                SqlParameter[] parameters =
              {
                    new SqlParameter("@PlanTypeID",planThamDinhParentID),
                    new SqlParameter("@DistrictDataID",districtDataID),
                    new SqlParameter("@WardDataID",wardDataID),
                    new SqlParameter("@Active",active),
                };
                List<PlanThamDinhCompanies> list = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_Active_DistrictDataID_WardDataID", parameters);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinhCompanies>> GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync(long planThamDinhParentID, long districtDataID, long wardDataID, bool active)
        {
            List<PlanThamDinhCompanies> result = new List<PlanThamDinhCompanies>();
            PlanThamDinhCompanies empty = new PlanThamDinhCompanies();
            result.Add(empty);
            if (planThamDinhParentID > 0)
            {
                SqlParameter[] parameters =
              {
                    new SqlParameter("@PlanTypeID",planThamDinhParentID),
                    new SqlParameter("@DistrictDataID",districtDataID),
                    new SqlParameter("@WardDataID",wardDataID),
                    new SqlParameter("@Active",active),
                };
                List<PlanThamDinhCompanies> list = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompaniesSelectItemsPlanTypeID_Active_DistrictDataID_WardDataID", parameters);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            return result;
        }
        public virtual async Task<PlanThamDinhCompanies> GetSQLByByPlanThamDinhParentID_CompanyInfoIDAsync(long planThamDinhParentID, long companyInfoID)
        {
            PlanThamDinhCompanies result = new PlanThamDinhCompanies();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@PlanThamDinhParentID",planThamDinhParentID),
                    new SqlParameter("@CompanyInfoID",companyInfoID),
                };
            List<PlanThamDinhCompanies> list = await GetByStoredProcedureToListAsync("sp_PlanThamDinhCompanyBienBanSelectItemsByPlanThamDinhParentID_CompanyInfoID", parameters);
            if (list.Count > 0)
            {
                result = list[0];
            }
            return result;
        }
        public virtual async Task<PlanThamDinhCompanies> GetByMaSoForWebsiteAsync(string maSo)
        {
            PlanThamDinhCompanies result = new PlanThamDinhCompanies();
            result = await GetByCondition(item => item.MaSo == maSo).FirstOrDefaultAsync();
            if (result == null)
            {
                result = new PlanThamDinhCompanies();
            }
            else
            {
                try
                {
                    result.Description = result.NgayGhiNhan.Value.ToString("dd/MM/yyyy");
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                }

                try
                {
                    result.HTMLContent = result.NgayHetHan.Value.ToString("dd/MM/yyyy");
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                }
            }
            return result;
        }

        public async Task<string> InsertItemsByDataTableAsync(DataTable table)
        {
            string result = GlobalHelper.InitializationString;
            if (table != null)
            {
                if (table.Rows.Count > 0)
                {
                    int rowCount = 100;
                    int rowFrom = 0;
                    int rowTo = rowCount;
                    try
                    {
                        while (rowTo < table.Rows.Count)
                        {
                            DataTable tableSub = table.Clone();
                            tableSub.TableName = "tableSub";
                            tableSub.Clear();
                            for (int i = rowFrom; i < rowTo; i++)
                            {
                                DataRow newRow = tableSub.NewRow();
                                newRow.ItemArray = table.Rows[i].ItemArray;
                                tableSub.Rows.Add(newRow);
                            }
                            SqlParameter[] parameters =
                            {
                            new SqlParameter("@Table",tableSub),
                            };
                            result = await ExecuteNonQueryByStoredProcedureAsync("sp_PlanThamDinhCompaniesInsertItemsByCamKet17Excel", parameters);
                            if (result != "-1")
                            {
                                try
                                {
                                    foreach (DataRow row in tableSub.Rows)
                                    {
                                        string DonViToChuc = (string)row["DonViToChuc"];
                                        string DienThoai = (string)row["DienThoai"];
                                        string NgayKyString = (string)row["NgayKy"];
                                        string NgayKiemTraString = (string)row["NgayKiemTra"];
                                        DateTime NgayKy = (DateTime)row["NgayKy"];
                                        DateTime NgayKiemTra = (DateTime)row["NgayKiemTra"];
                                    }
                                }
                                catch (Exception ex)
                                {

                                }
                            }
                            rowFrom = rowTo;
                            rowTo = rowTo + rowCount;
                        }
                        DataTable tableSub001 = table.Clone();
                        tableSub001.TableName = "tableSub";
                        tableSub001.Clear();
                        for (int i = rowFrom; i < table.Rows.Count; i++)
                        {
                            DataRow newRow = tableSub001.NewRow();
                            newRow.ItemArray = table.Rows[i].ItemArray;
                            tableSub001.Rows.Add(newRow);
                        }
                        SqlParameter[] parameters001 =
                        {
                            new SqlParameter("@Table",tableSub001),
                            };
                        result = await ExecuteNonQueryByStoredProcedureAsync("sp_PlanThamDinhCompaniesInsertItemsByCamKet17Excel", parameters001);
                        if (result != "-1")
                        {

                        }
                    }
                    catch (Exception ex)
                    {
                        result = ex.Message;
                    }
                }
            }
            return result;
        }

        private void ChamDiem1(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count == 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 8))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count < 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 8))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 5)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem2(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 7)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count < 7) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 9))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 6) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 9))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 4)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem3(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 5)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count < 5) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 6))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 4) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 6))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 3)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem4(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 8))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 8))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 5)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem5(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 6)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count < 6) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 8))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 5) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 8))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 3)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem6(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 6))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 6))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 4)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem7(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 6))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 6))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 4)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem8(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 8))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 8))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 5)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem9(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 4)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 6))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 3) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 6))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 5)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
        private void ChamDiem10(PlanThamDinhCompanies model)
        {
            if (model.NghiemTrong_Se_Count > 0)
            {
                model.DanhMucATTPXepLoaiID = 4;
            }
            else
            {
                if (model.Nang_Ma_Count >= 3)
                {
                    model.DanhMucATTPXepLoaiID = 4;
                }
                else
                {
                    if (model.Nang_Ma_Count > 0)
                    {
                        if ((model.Nang_Ma_Count > 2) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 3))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 2) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 3))
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                    }
                    else
                    {
                        if (model.Nhe_Mi_Count > 3)
                        {
                            model.DanhMucATTPXepLoaiID = 3;
                        }
                        else
                        {
                            model.DanhMucATTPXepLoaiID = 2;
                        }
                    }
                }
            }
        }
    }
}

