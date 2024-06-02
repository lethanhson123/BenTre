using Data.Model;
using Service.Interface;
using System.Collections.Generic;

namespace Service.Implement
{
    public class PlanThamDinhCompanyDocumentService : BaseService<PlanThamDinhCompanyDocument, IPlanThamDinhCompanyDocumentRepository>
    , IPlanThamDinhCompanyDocumentService
    {
        private readonly IPlanThamDinhCompanyDocumentRepository _PlanThamDinhCompanyDocumentRepository;

        private readonly IPlanThamDinhCompaniesRepository _PlanThamDinhCompaniesRepository;

        private readonly IDocumentTemplateService _DocumentTemplateService;
        private readonly IThanhVienService _ThanhVienService;
        private readonly IDanhMucChucDanhService _DanhMucChucDanhService;

        public PlanThamDinhCompanyDocumentService(IPlanThamDinhCompanyDocumentRepository PlanThamDinhCompanyDocumentRepository

            , IPlanThamDinhCompaniesRepository PlanThamDinhCompaniesRepository

            , IDocumentTemplateService DocumentTemplateService
            , IThanhVienService ThanhVienService
            , IDanhMucChucDanhService DanhMucChucDanhService

            ) : base(PlanThamDinhCompanyDocumentRepository)
        {
            _PlanThamDinhCompanyDocumentRepository = PlanThamDinhCompanyDocumentRepository;
            _PlanThamDinhCompaniesRepository = PlanThamDinhCompaniesRepository;

            _DocumentTemplateService = DocumentTemplateService;
            _ThanhVienService = ThanhVienService;
            _DanhMucChucDanhService = DanhMucChucDanhService;
        }
        public override void Initialization(PlanThamDinhCompanyDocument model)
        {
            BaseInitialization(model);
            if (model.NgayGhiNhan == null)
            {
                model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
            if (model.ThanhVienID > 0)
            {
                ThanhVien ThanhVien = _ThanhVienService.GetByID(model.ThanhVienID.Value);
                model.ThanhVienName = ThanhVien.Name;
                model.DanhMucChucDanhName = _DanhMucChucDanhService.GetByID(ThanhVien.DanhMucChucDanhID.Value).Name;
            }
            if (model.ThanhVienID001 > 0)
            {
                ThanhVien ThanhVien = _ThanhVienService.GetByID(model.ThanhVienID001.Value);
                model.ThanhVienName001 = ThanhVien.Name;
                model.DanhMucChucDanhName001 = _DanhMucChucDanhService.GetByID(ThanhVien.DanhMucChucDanhID.Value).Name;
            }
            if (model.DocumentTemplateID > 0)
            {
                if (string.IsNullOrEmpty(model.Name))
                {
                    model.Name = _DocumentTemplateService.GetByID(model.DocumentTemplateID.Value).Name;
                }
            }
            if (model.Active == true)
            {
                model.Note = "Ký thay";
            }
            else
            {
                model.Note = GlobalHelper.InitializationString;
            }
            if (model.DocumentTemplateID == 41)
            {
                if (model.Description.Contains(GlobalHelper.GiayChungNhanDuDieuKienAnToanThucPham_MaSo) == false)
                {
                    model.Description = model.Description + "/" + GlobalHelper.GiayChungNhanDuDieuKienAnToanThucPham_MaSo;
                }
            }
            if (!string.IsNullOrEmpty(model.HTMLContent))
            {
                model.HTMLContent = model.HTMLContent.Replace(@"font-family:VNI-Times", "");
                model.HTMLContent = model.HTMLContent.Replace(@"</body>", "");
                model.HTMLContent = model.HTMLContent.Replace(@"</html>", "");
                model.HTMLContent = model.HTMLContent.Replace(@"<meta charset=""utf-8"" />", "");
                model.HTMLContent = model.HTMLContent + "</body>";
                model.HTMLContent = model.HTMLContent + "</html>";
            }
        }
        public override async Task<PlanThamDinhCompanyDocument> SaveAsync(PlanThamDinhCompanyDocument model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model.ID > 0)
            {
                result = await UpdateAsync(model);
                if (result > 0)
                {
                    if (model.PlanThamDinhID > 0)
                    {
                        List<PlanThamDinhCompanies> ListPlanThamDinhCompanies = await _PlanThamDinhCompaniesRepository.GetByParentIDToListAsync(model.PlanThamDinhID.Value);
                        foreach (PlanThamDinhCompanies itemPlanThamDinhCompanies in ListPlanThamDinhCompanies)
                        {
                            PlanThamDinhCompanyDocument planThamDinhCompanyDocument = await GetByCondition(item => item.ParentID == model.ParentID && item.DocumentTemplateID == model.DocumentTemplateID).FirstOrDefaultAsync();
                            if (planThamDinhCompanyDocument == null)
                            {
                                planThamDinhCompanyDocument = new PlanThamDinhCompanyDocument();
                                planThamDinhCompanyDocument.ParentID = itemPlanThamDinhCompanies.ID;
                            }
                            planThamDinhCompanyDocument.PlanThamDinhID = null;
                            planThamDinhCompanyDocument.FileName = model.FileName;
                            planThamDinhCompanyDocument.NgayGhiNhan = model.NgayGhiNhan;
                            planThamDinhCompanyDocument.ThanhVienID = model.ThanhVienID;
                            planThamDinhCompanyDocument.Active = model.Active;
                            planThamDinhCompanyDocument.HTMLContent = model.HTMLContent;
                            await SaveAsync(planThamDinhCompanyDocument);
                        }
                    }
                }
            }
            else
            {
                PlanThamDinhCompanyDocument modelExist = null;
                if (model.ParentID > 0)
                {
                    modelExist = await GetByCondition(item => item.ParentID == model.ParentID && item.DocumentTemplateID == model.DocumentTemplateID).FirstOrDefaultAsync();
                }
                if (model.PlanThamDinhID > 0)
                {
                    modelExist = await GetByCondition(item => item.PlanThamDinhID == model.PlanThamDinhID && item.DocumentTemplateID == model.DocumentTemplateID).FirstOrDefaultAsync();
                }
                if (model.RegisterHarvestID > 0)
                {
                    modelExist = await GetByCondition(item => item.RegisterHarvestID == model.RegisterHarvestID && item.DocumentTemplateID == model.DocumentTemplateID).FirstOrDefaultAsync();
                }
                if (modelExist == null)
                {
                    result = await AddAsync(model);
                }
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_ThanhVienID_DocumentTemplateIDAsync(long parentID, long thanhVienID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.ThanhVienID == thanhVienID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.ParentID = parentID;
                    result.ThanhVienID = thanhVienID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.ParentID == parentID && item.ThanhVienID == thanhVienID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_DocumentTemplateIDAsync(long parentID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.ParentID = parentID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.ParentID == parentID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByPlanThamDinhID_DocumentTemplateIDAsync(long planThamDinhID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (planThamDinhID > 0)
            {
                result = await GetByCondition(item => item.ParentID == planThamDinhID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.PlanThamDinhID = planThamDinhID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.PlanThamDinhID == planThamDinhID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
        public async Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDToListAsync(long planThamDinhID)
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            if (planThamDinhID > 0)
            {
                result = await GetByCondition(item => item.PlanThamDinhID == planThamDinhID).ToListAsync();
            }
            return result;
        }
        public async Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDAndEmptyToListAsync(long planThamDinhID)
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            PlanThamDinhCompanyDocument empty = new PlanThamDinhCompanyDocument();
            result.Add(empty);
            if (planThamDinhID > 0)
            {
                List<PlanThamDinhCompanyDocument> list = await GetByPlanThamDinhIDToListAsync(planThamDinhID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync(long parentID, long planTypeID, long danhMucProductGroupID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (parentID > 0)
            {
                DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByCondition(item => item.ParentID == planTypeID && item.DanhMucProductGroupID == danhMucProductGroupID).FirstOrDefaultAsync();
                if (documentTemplate != null)
                {
                    if (documentTemplate.ID > 0)
                    {
                        result = await GetByParentID_DocumentTemplateIDAsync(parentID, documentTemplate.ID);
                    }
                }
            }
            return result;
        }
        public async Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDToListAsync(long RegisterHarvestID)
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            if (RegisterHarvestID > 0)
            {
                result = await GetByCondition(item => item.RegisterHarvestID == RegisterHarvestID).ToListAsync();
            }
            return result;
        }
        public async Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDAndEmptyToListAsync(long RegisterHarvestID)
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            PlanThamDinhCompanyDocument empty = new PlanThamDinhCompanyDocument();
            result.Add(empty);
            if (RegisterHarvestID > 0)
            {
                List<PlanThamDinhCompanyDocument> list = await GetByRegisterHarvestIDToListAsync(RegisterHarvestID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestID_DocumentTemplateIDAsync(long RegisterHarvestID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (RegisterHarvestID > 0)
            {
                result = await GetByCondition(item => item.RegisterHarvestID == RegisterHarvestID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.RegisterHarvestID = RegisterHarvestID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.RegisterHarvestID == RegisterHarvestID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestItemsID_DocumentTemplateIDAsync(long RegisterHarvestItemsID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (RegisterHarvestItemsID > 0)
            {
                result = await GetByCondition(item => item.RegisterHarvestItemsID == RegisterHarvestItemsID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.RegisterHarvestItemsID = RegisterHarvestItemsID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.RegisterHarvestItemsID == RegisterHarvestItemsID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
        public async Task<PlanThamDinhCompanyDocument> GetByPlanTypeID_DocumentTemplateIDAsync(long PlanTypeID, long documentTemplateID)
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            if (PlanTypeID > 0)
            {
                result = await GetByCondition(item => item.PlanTypeID == PlanTypeID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new PlanThamDinhCompanyDocument();
                    result.PlanTypeID = PlanTypeID;
                    result.DocumentTemplateID = documentTemplateID;
                    await SaveAsync(result);
                    result = await GetByCondition(item => item.PlanTypeID == PlanTypeID && item.DocumentTemplateID == documentTemplateID).FirstOrDefaultAsync();
                }
            }
            return result;
        }
    }
}

