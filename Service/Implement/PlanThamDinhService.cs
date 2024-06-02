using Data.Model;
using Service.Interface;

namespace Service.Implement
{
    public class PlanThamDinhService : BaseService<PlanThamDinh, IPlanThamDinhRepository>
    , IPlanThamDinhService
    {
        private readonly IPlanThamDinhRepository _PlanThamDinhRepository;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly IDocumentTemplateService _DocumentTemplateService;

        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IPlanThamDinhThanhVienService _PlanThamDinhThanhVienService;
        private readonly IPlanThamDinhDanhMucLayMauService _PlanThamDinhDanhMucLayMauService;
        private readonly IPlanThamDinhDistrictDataService _PlanThamDinhDistrictDataService;
        private readonly IPlanThamDinhCompanyProductGroupService _PlanThamDinhCompanyProductGroupService;

        private readonly IDanhMucThoiGianLayMauService _DanhMucThoiGianLayMauService;
        private readonly ICompanyInfoService _CompanyInfoService;

        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
        private readonly IDanhMucATTPTinhTrangService _DanhMucATTPTinhTrangService;

        public PlanThamDinhService(IPlanThamDinhRepository PlanThamDinhRepository

            , IStateAgencyService StateAgencyService
            , IDocumentTemplateService DocumentTemplateService

            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService
            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService
            , IPlanThamDinhThanhVienService PlanThamDinhThanhVienService
            , IPlanThamDinhDanhMucLayMauService PlanThamDinhDanhMucLayMauService
            , IPlanThamDinhDistrictDataService PlanThamDinhDistrictDataService
            , IPlanThamDinhCompanyProductGroupService PlanThamDinhCompanyProductGroupService

            , IDanhMucThoiGianLayMauService DanhMucThoiGianLayMauService

            , ICompanyInfoService CompanyInfoService
            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService
            , IDanhMucATTPTinhTrangService DanhMucATTPTinhTrangService

            ) : base(PlanThamDinhRepository)
        {
            _PlanThamDinhRepository = PlanThamDinhRepository;

            _StateAgencyService = StateAgencyService;
            _DocumentTemplateService = DocumentTemplateService;

            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _PlanThamDinhThanhVienService = PlanThamDinhThanhVienService;
            _PlanThamDinhDanhMucLayMauService = PlanThamDinhDanhMucLayMauService;
            _PlanThamDinhDistrictDataService = PlanThamDinhDistrictDataService;
            _PlanThamDinhCompanyProductGroupService = PlanThamDinhCompanyProductGroupService;

            _DanhMucThoiGianLayMauService = DanhMucThoiGianLayMauService;

            _CompanyInfoService = CompanyInfoService;
            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;
            _DanhMucATTPTinhTrangService = DanhMucATTPTinhTrangService;
        }

        public override void Initialization(PlanThamDinh model)
        {
            if (model.ParentID == GlobalHelper.PlanTypeIDCoSoNuoi)
            {
                model.DanhMucATTPXepLoaiID = 2;

                switch (model.DanhMucProductGroupID)
                {
                    case 12:
                        ChamDiem12(model);
                        break;
                }

            }
            if (model.DanhMucATTPTinhTrangID == null)
            {
                model.DanhMucATTPTinhTrangID = 1;
            }
            if (model.DanhMucATTPTinhTrangID > 0)
            {
                model.DanhMucATTPTinhTrangName = _DanhMucATTPTinhTrangService.GetByID(model.DanhMucATTPTinhTrangID.Value).Name;
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
            if (model.StateAgencyID == null)
            {
                model.StateAgencyID = GlobalHelper.StateAgencyID;
            }
            if (model.StateAgencyID > 0)
            {
                model.StateAgencyName = _StateAgencyService.GetByID(model.StateAgencyID.Value).Name;
            }
            if (model.DanhMucThoiGianLayMauID > 0)
            {
                model.DanhMucThoiGianLayMauName = _DanhMucThoiGianLayMauService.GetByID(model.DanhMucThoiGianLayMauID.Value).Name;
            }
            if (model.Active == null)
            {
                model.Active = true;
            }
            if (model.NgayBatDau == null)
            {
                model.NgayBatDau = GlobalHelper.InitializationDateTime;
            }
            if (model.NgayKetThuc == null)
            {
                model.NgayKetThuc = model.NgayBatDau;
            }
            if (model.Nam > 0)
            {
                if (model.Thang > 0)
                {
                    if (model.NgayBatDau == null)
                    {
                        model.NgayBatDau = new DateTime(model.Nam.Value, model.Thang.Value, 1);
                    }
                    if (model.NgayKetThuc == null)
                    {
                        model.NgayKetThuc = new DateTime(model.Nam.Value, model.Thang.Value, 28);
                    }
                }
            }
            if (model.Nam == null)
            {
                model.Nam = model.NgayBatDau.Value.Year;
            }
            if (model.Thang == null)
            {
                model.Thang = model.NgayBatDau.Value.Month;
            }

            if (model.CompanyInfoID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.CompanyInfoID.Value);
                model.CompanyInfoName = companyInfo.Name;
            }
        }
        public override async Task<PlanThamDinh> SaveAsync(PlanThamDinh model)
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
        public virtual async Task<PlanThamDinh> CopyAsync(PlanThamDinh model)
        {
            int result = GlobalHelper.InitializationNumber;
            long IDOld = model.ID;
            model.ID = 0;
            model.Code = GlobalHelper.InitializationGUICode;
            await _PlanThamDinhRepository.AddAsync(model);
            if (model.ID > 0)
            {
                await CodeSync(model, IDOld);
            }
            return model;
        }
        private async Task<int> Sync(PlanThamDinh model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(model.ParentID.Value);
                    foreach (DocumentTemplate documentTemplate in listDocumentTemplate)
                    {
                        PlanThamDinhCompanyDocument itemPlanThamDinhCompanyDocument = new PlanThamDinhCompanyDocument();
                        itemPlanThamDinhCompanyDocument.PlanThamDinhID = model.ID;
                        itemPlanThamDinhCompanyDocument.DocumentTemplateID = documentTemplate.ID;
                        PlanThamDinhCompanyDocument itemExist = await _PlanThamDinhCompanyDocumentService.GetByCondition(item => item.PlanThamDinhID == itemPlanThamDinhCompanyDocument.PlanThamDinhID && item.DocumentTemplateID == itemPlanThamDinhCompanyDocument.DocumentTemplateID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            itemExist = new PlanThamDinhCompanyDocument();
                        }
                        if (itemExist.ID > 0)
                        {
                            itemPlanThamDinhCompanyDocument = itemExist;
                        }
                        itemPlanThamDinhCompanyDocument.PlanThamDinhID = model.ID;
                        itemPlanThamDinhCompanyDocument.Code = model.Code;
                        itemPlanThamDinhCompanyDocument.DocumentTemplateID = documentTemplate.ID;
                        itemPlanThamDinhCompanyDocument.TypeName = documentTemplate.FileName;
                        itemPlanThamDinhCompanyDocument.SortOrder = documentTemplate.SortOrder;
                        await _PlanThamDinhCompanyDocumentService.SaveAsync(itemPlanThamDinhCompanyDocument);
                    }

                    List<PlanThamDinhCompanyDocument> listPlanThamDinhCompanyDocument = await _PlanThamDinhCompanyDocumentService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhCompanyDocument.Count; i++)
                    {
                        PlanThamDinhCompanyDocument itemPlanThamDinhCompanyDocument = listPlanThamDinhCompanyDocument[i];
                        if (itemPlanThamDinhCompanyDocument.DocumentTemplateID > 0)
                        {
                            PlanThamDinhCompanyDocument itemExist = await _PlanThamDinhCompanyDocumentService.GetByCondition(item => item.Code == itemPlanThamDinhCompanyDocument.Code && item.DocumentTemplateID == itemPlanThamDinhCompanyDocument.DocumentTemplateID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhCompanyDocument();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhCompanyDocument = itemExist;
                            }
                        }
                        itemPlanThamDinhCompanyDocument.PlanThamDinhID = model.ID;
                        await _PlanThamDinhCompanyDocumentService.SaveAsync(itemPlanThamDinhCompanyDocument);
                    }

                    List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                    {
                        PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];
                        if (itemPlanThamDinhCompanies.CompanyInfoID > 0)
                        {
                            PlanThamDinhCompanies itemExist = await _PlanThamDinhCompaniesService.GetByCondition(item => item.Code == itemPlanThamDinhCompanies.Code && item.CompanyInfoID == itemPlanThamDinhCompanies.CompanyInfoID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhCompanies();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhCompanies = itemExist;
                            }
                        }
                        itemPlanThamDinhCompanies.ParentID = model.ID;
                        await _PlanThamDinhCompaniesService.SaveAsync(itemPlanThamDinhCompanies);
                    }

                    List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                    {
                        PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];
                        if (itemPlanThamDinhThanhVien.ThanhVienID > 0)
                        {
                            PlanThamDinhThanhVien itemExist = await _PlanThamDinhThanhVienService.GetByCondition(item => item.Code == itemPlanThamDinhThanhVien.Code && item.ThanhVienID == itemPlanThamDinhThanhVien.ThanhVienID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhThanhVien();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhThanhVien = itemExist;
                            }
                        }
                        itemPlanThamDinhThanhVien.ParentID = model.ID;
                        await _PlanThamDinhThanhVienService.SaveAsync(itemPlanThamDinhThanhVien);
                    }

                    List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                    {
                        PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];
                        if (itemPlanThamDinhDanhMucLayMau.DanhMucLayMauID > 0)
                        {
                            PlanThamDinhDanhMucLayMau itemExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.Code == itemPlanThamDinhDanhMucLayMau.Code && item.DanhMucLayMauID == itemPlanThamDinhDanhMucLayMau.DanhMucLayMauID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhDanhMucLayMau();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhDanhMucLayMau = itemExist;
                            }
                        }
                        itemPlanThamDinhDanhMucLayMau.ParentID = model.ID;
                        await _PlanThamDinhDanhMucLayMauService.SaveAsync(itemPlanThamDinhDanhMucLayMau);
                    }

                    List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhDistrictData.Count; i++)
                    {
                        PlanThamDinhDistrictData itemPlanThamDinhDistrictData = listPlanThamDinhDistrictData[i];
                        if (itemPlanThamDinhDistrictData.DistrictDataID > 0)
                        {
                            PlanThamDinhDistrictData itemExist = await _PlanThamDinhDistrictDataService.GetByCondition(item => item.Code == itemPlanThamDinhDistrictData.Code && item.DistrictDataID == itemPlanThamDinhDistrictData.DistrictDataID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhDistrictData();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhDistrictData = itemExist;
                            }
                        }
                        itemPlanThamDinhDistrictData.ParentID = model.ID;
                        await _PlanThamDinhDistrictDataService.SaveAsync(itemPlanThamDinhDistrictData);
                    }

                    List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listPlanThamDinhCompanyProductGroup.Count; i++)
                    {
                        PlanThamDinhCompanyProductGroup itemPlanThamDinhCompanyProductGroup = listPlanThamDinhCompanyProductGroup[i];
                        if (itemPlanThamDinhCompanyProductGroup.ProductGroupID > 0)
                        {
                            PlanThamDinhCompanyProductGroup itemExist = await _PlanThamDinhCompanyProductGroupService.GetByCondition(item => item.Code == itemPlanThamDinhCompanyProductGroup.Code && item.ProductGroupID == itemPlanThamDinhCompanyProductGroup.ProductGroupID).FirstOrDefaultAsync();
                            if (itemExist == null)
                            {
                                itemExist = new PlanThamDinhCompanyProductGroup();
                            }
                            if (itemExist.ID > 0)
                            {
                                itemPlanThamDinhCompanyProductGroup = itemExist;
                            }
                        }
                        itemPlanThamDinhCompanyProductGroup.PlanThamDinhID = model.ID;
                        await _PlanThamDinhCompanyProductGroupService.SaveAsync(itemPlanThamDinhCompanyProductGroup);
                    }

                    List<PlanThamDinhCompanies> listPlanThamDinhCompaniesNgayGhiNhan = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(model.ID);
                    if (listPlanThamDinhCompaniesNgayGhiNhan.Count > 0)
                    {
                        model.NgayKetThuc = listPlanThamDinhCompaniesNgayGhiNhan.Max(x => x.NgayGhiNhan);
                        model.NgayBatDau = listPlanThamDinhCompaniesNgayGhiNhan.Min(x => x.NgayGhiNhan);
                        await _PlanThamDinhRepository.UpdateAsync(model);
                    }
                }
            }
            return result;
        }
        private async Task<int> CodeSync(PlanThamDinh model, long IDOld)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<PlanThamDinhCompanyDocument> listPlanThamDinhCompanyDocument = await _PlanThamDinhCompanyDocumentService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhCompanyDocument.Count; i++)
                    {
                        PlanThamDinhCompanyDocument itemPlanThamDinhCompanyDocument = listPlanThamDinhCompanyDocument[i];
                        itemPlanThamDinhCompanyDocument.ID = 0;
                        itemPlanThamDinhCompanyDocument.ParentID = model.ID;
                        itemPlanThamDinhCompanyDocument.Code = model.Code;
                        await _PlanThamDinhCompanyDocumentService.SaveAsync(itemPlanThamDinhCompanyDocument);
                    }

                    List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                    {
                        PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];
                        itemPlanThamDinhCompanies.ID = 0;
                        itemPlanThamDinhCompanies.ParentID = model.ID;
                        itemPlanThamDinhCompanies.Code = model.Code;
                        await _PlanThamDinhCompaniesService.SaveAsync(itemPlanThamDinhCompanies);
                    }

                    List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                    {
                        PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];
                        itemPlanThamDinhThanhVien.ID = 0;
                        itemPlanThamDinhThanhVien.ParentID = model.ID;
                        itemPlanThamDinhThanhVien.Code = model.Code;
                        await _PlanThamDinhThanhVienService.SaveAsync(itemPlanThamDinhThanhVien);
                    }

                    List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                    {
                        PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];
                        itemPlanThamDinhDanhMucLayMau.ID = 0;
                        itemPlanThamDinhDanhMucLayMau.ParentID = model.ID;
                        itemPlanThamDinhDanhMucLayMau.Code = model.Code;
                        await _PlanThamDinhDanhMucLayMauService.SaveAsync(itemPlanThamDinhDanhMucLayMau);
                    }

                    List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhDistrictData.Count; i++)
                    {
                        PlanThamDinhDistrictData itemPlanThamDinhDistrictData = listPlanThamDinhDistrictData[i];
                        itemPlanThamDinhDistrictData.ID = 0;
                        itemPlanThamDinhDistrictData.ParentID = model.ID;
                        itemPlanThamDinhDistrictData.Code = model.Code;
                        await _PlanThamDinhDistrictDataService.SaveAsync(itemPlanThamDinhDistrictData);
                    }

                    List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(IDOld);
                    for (int i = 0; i < listPlanThamDinhCompanyProductGroup.Count; i++)
                    {
                        PlanThamDinhCompanyProductGroup itemPlanThamDinhCompanyProductGroup = listPlanThamDinhCompanyProductGroup[i];
                        itemPlanThamDinhCompanyProductGroup.ID = 0;
                        itemPlanThamDinhCompanyProductGroup.ParentID = model.ID;
                        itemPlanThamDinhCompanyProductGroup.Code = model.Code;
                        await _PlanThamDinhCompanyProductGroupService.SaveAsync(itemPlanThamDinhCompanyProductGroup);
                    }
                }
            }
            return result;
        }
        public override async Task<List<PlanThamDinh>> GetBySearchStringToListAsync(string searchString)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            if (!string.IsNullOrEmpty(searchString))
            {
                searchString = searchString.Trim();

                result = await GetByCondition(item => item.ID.ToString().ToLower().Contains(searchString.ToLower())).ToListAsync();

                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.Name.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }

                if (result.Count == 0)
                {
                    List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetAllToListAsync();
                    List<long> listPlanThamDinhCompaniesID = new List<long>();

                    listPlanThamDinhCompaniesID = listPlanThamDinhCompanies.Where(item => item.CompanyInfoName.ToLower().Contains(searchString.ToLower())).Select(x => x.ID).ToList();

                    if (listPlanThamDinhCompaniesID.Count == 0)
                    {
                        listPlanThamDinhCompaniesID = listPlanThamDinhCompanies.Where(item => item.DanhMucATTPLoaiHoSoName.ToLower().Contains(searchString.ToLower())).Select(x => x.ID).ToList();
                    }

                    if (listPlanThamDinhCompaniesID.Count == 0)
                    {
                        listPlanThamDinhCompaniesID = listPlanThamDinhCompanies.Where(item => item.ATTPInfoName.ToLower().Contains(searchString.ToLower())).Select(x => x.ID).ToList();
                    }

                    if (listPlanThamDinhCompaniesID.Count > 0)
                    {
                        result = await GetByCondition(item => listPlanThamDinhCompaniesID.Contains(item.ID)).ToListAsync();
                    }
                }

                if (result.Count == 0)
                {
                    List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetAllToListAsync();
                    List<long> listPlanThamDinhThanhVienID = new List<long>();

                    listPlanThamDinhThanhVienID = listPlanThamDinhThanhVien.Where(item => item.ThanhVienName.ToLower().Contains(searchString.ToLower())).Select(x => x.ID).ToList();

                    if (listPlanThamDinhThanhVienID.Count == 0)
                    {
                        listPlanThamDinhThanhVienID = listPlanThamDinhThanhVien.Where(item => item.DanhMucChucDanhName.ToLower().Contains(searchString.ToLower())).Select(x => x.ID).ToList();
                    }

                    if (listPlanThamDinhThanhVienID.Count > 0)
                    {
                        result = await GetByCondition(item => listPlanThamDinhThanhVienID.Contains(item.ID)).ToListAsync();
                    }
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThucToListAsync(string searchString, DateTime ngayBatDau, DateTime ngayKetThuc)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                try
                {
                    ngayBatDau = new DateTime(ngayBatDau.Year, ngayBatDau.Month, ngayBatDau.Day, 0, 0, 0);
                    ngayKetThuc = new DateTime(ngayKetThuc.Year, ngayKetThuc.Month, ngayKetThuc.Day, 23, 59, 59);
                    result = await GetByCondition(item => item.NgayBatDau >= ngayBatDau && item.NgayKetThuc <= ngayKetThuc).ToListAsync();
                }
                catch (Exception ex)
                {
                    string mes = ex.Message;
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(string searchString, DateTime ngayBatDau, DateTime ngayKetThuc, bool active)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            result = await GetBySearchString_NgayBatDau_NgayKetThucToListAsync(searchString, ngayBatDau, ngayKetThuc);
            if (result.Count > 0)
            {
                result = result.Where(item => item.Active == active).ToList();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync(long parentID, string searchString, DateTime ngayBatDau, DateTime ngayKetThuc, bool active)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            if (parentID > 0)
            {
                result = await GetBySearchString_NgayBatDau_NgayKetThucToListAsync(searchString, ngayBatDau, ngayKetThuc);
                if (result.Count > 0)
                {
                    result = result.Where(item => item.ParentID == parentID && item.Active == active).ToList();
                }
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetByParentID_Nam_SoDot_ActiveToListAsync(long parentID, int nam, int soDot, bool active)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.Active == active && item.Nam == nam && item.SoDot == soDot).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetByParentID_Nam_ActiveToListAsync(long parentID, int nam, bool active)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.Active == active && item.Nam == nam).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync(long stateAgencyID, int nam, int thang)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@StateAgencyID",stateAgencyID),
                    new SqlParameter("@Nam",nam),
                    new SqlParameter("@Thang",thang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhKeHoachTongHopByStateAgencyID_Nam_Thang", parameters);
            return result;
        }
        public virtual async Task<List<PlanThamDinh>> GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync(long thanhVienID, int nam, int thang)
        {
            List<PlanThamDinh> result = new List<PlanThamDinh>();
            SqlParameter[] parameters =
             {
                    new SqlParameter("@ThanhVienID",thanhVienID),
                    new SqlParameter("@Nam",nam),
                    new SqlParameter("@Thang",thang),
                };
            result = await GetByStoredProcedureToListAsync("sp_PlanThamDinhKeHoachTongHopByThanhVienID_Nam_Thang", parameters);
            return result;
        }

        private void ChamDiem12(PlanThamDinh model)
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
                        if ((model.Nang_Ma_Count > 2) && (model.Nang_Ma_Count + model.Nhe_Mi_Count > 5))
                        {
                            model.DanhMucATTPXepLoaiID = 4;
                        }
                        if ((model.Nang_Ma_Count <= 2) && (model.Nang_Ma_Count + model.Nhe_Mi_Count <= 5))
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
    }
}

