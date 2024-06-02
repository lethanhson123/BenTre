using Service.Interface;

namespace Service.Implement
{
    public class RegisterHarvestService : BaseService<RegisterHarvest, IRegisterHarvestRepository>
    , IRegisterHarvestService
    {
        private readonly IRegisterHarvestRepository _RegisterHarvestRepository;

        private readonly IDocumentTemplateService _DocumentTemplateService;
        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;

        private readonly IRegisterHarvestItemsService _RegisterHarvestItemsService;
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly ISpeciesService _SpeciesService;
        private readonly IDanhMucLayMauService _DanhMucLayMauService;

        private readonly IStateAgencyService _StateAgencyService;
        public RegisterHarvestService(IRegisterHarvestRepository RegisterHarvestRepository

            , IRegisterHarvestItemsService RegisterHarvestItemsService

            , IDocumentTemplateService DocumentTemplateService
            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService

            , ICompanyInfoService CompanyInfoService
            , ISpeciesService SpeciesService
            , IDanhMucLayMauService DanhMucLayMauService
            , IStateAgencyService StateAgencyService

        ) : base(RegisterHarvestRepository)
        {
            _RegisterHarvestRepository = RegisterHarvestRepository;

            _DocumentTemplateService = DocumentTemplateService;
            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;

            _RegisterHarvestItemsService = RegisterHarvestItemsService;
            _CompanyInfoService = CompanyInfoService;
            _SpeciesService = SpeciesService;
            _DanhMucLayMauService = DanhMucLayMauService;
            _StateAgencyService = StateAgencyService;
        }

        public override void Initialization(RegisterHarvest model)
        {
            BaseInitialization(model);
            if (model.StateAgencyID == null)
            {
                model.StateAgencyID = GlobalHelper.StateAgencyID;
            }
            if (model.StateAgencyID > 0)
            {
                model.StateAgencyName = _StateAgencyService.GetByID(model.StateAgencyID.Value).Name;
            }

            if (model.CompanyInfoID == null)
            {
                model.CompanyInfoID = model.ParentID;
            }
            if (model.CompanyInfoID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.CompanyInfoID.Value);
                model.CompanyInfoName = companyInfo.Name;
                model.Description = companyInfo.address;
            }
            if (model.SpeciesID > 0)
            {
                model.SpeciesName = _SpeciesService.GetByID(model.SpeciesID.Value).Name;
            }
            if (model.DanhMucLayMauID > 0)
            {
                model.DanhMucLayMauName = _DanhMucLayMauService.GetByID(model.DanhMucLayMauID.Value).Name;
            }
            else
            {
                if (!string.IsNullOrEmpty(model.DanhMucLayMauName))
                {
                    DanhMucLayMau DanhMucLayMau = _DanhMucLayMauService.GetByName(model.DanhMucLayMauName);
                    DanhMucLayMau.Name = model.DanhMucLayMauName;
                    _DanhMucLayMauService.Save(DanhMucLayMau);
                    model.DanhMucLayMauID = DanhMucLayMau.ID;
                }
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
        }
        public override async Task<RegisterHarvest> SaveAsync(RegisterHarvest model)
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
        private async Task<int> Sync(RegisterHarvest model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<DocumentTemplate> listDocumentTemplate = await _DocumentTemplateService.GetByParentIDToListAsync(model.PlanTypeID.Value);
                    foreach (DocumentTemplate documentTemplate in listDocumentTemplate)
                    {
                        PlanThamDinhCompanyDocument planThamDinhCompanyDocument = new PlanThamDinhCompanyDocument();
                        planThamDinhCompanyDocument.RegisterHarvestID = model.ID;
                        planThamDinhCompanyDocument.Code = model.Code;
                        planThamDinhCompanyDocument.DocumentTemplateID = documentTemplate.ID;
                        planThamDinhCompanyDocument.TypeName = documentTemplate.FileName;
                        await _PlanThamDinhCompanyDocumentService.SaveAsync(planThamDinhCompanyDocument);
                    }

                    List<RegisterHarvestItems> listRegisterHarvestItems = await _RegisterHarvestItemsService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listRegisterHarvestItems.Count; i++)
                    {
                        RegisterHarvestItems itemRegisterHarvestItems = listRegisterHarvestItems[i];
                        itemRegisterHarvestItems.ParentID = model.ID;
                        await _RegisterHarvestItemsService.SaveAsync(itemRegisterHarvestItems);
                    }
                }
            }
            return result;
        }

    }
}