using Data.Model;
using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoVungTrongService : BaseService<CompanyInfoVungTrong, ICompanyInfoVungTrongRepository>
    , ICompanyInfoVungTrongService
    {
        private readonly ICompanyInfoVungTrongRepository _CompanyInfoVungTrongRepository;

        private readonly ICompanyInfoVungTrongToaDoService _CompanyInfoVungTrongToaDoService;
        private readonly ICompanyInfoVungTrongNongHoService _CompanyInfoVungTrongNongHoService;
        private readonly ICompanyInfoVungTrongDocumentsService _CompanyInfoVungTrongDocumentsService;

        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly IStateAgencyService _StateAgencyService;

        private readonly IDanhMucATTPLoaiHoSoService _DanhMucATTPLoaiHoSoService;
        private readonly IDanhMucATTPTinhTrangService _DanhMucATTPTinhTrangService;
        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;

        private readonly IProvinceDataService _ProvinceDataService;
        private readonly IDistrictDataService _DistrictDataService;
        private readonly IWardDataService _WardDataService;

        private readonly IDocumentTemplateService _DocumentTemplateService;
        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;


        public CompanyInfoVungTrongService(ICompanyInfoVungTrongRepository CompanyInfoVungTrongRepository
            , ICompanyInfoVungTrongToaDoService CompanyInfoVungTrongToaDoService
            , ICompanyInfoVungTrongNongHoService CompanyInfoVungTrongNongHoService
            , ICompanyInfoVungTrongDocumentsService CompanyInfoVungTrongDocumentsService

            , ICompanyInfoService CompanyInfoService
            , IStateAgencyService StateAgencyService

            , IDanhMucATTPLoaiHoSoService DanhMucATTPLoaiHoSoService
            , IDanhMucATTPTinhTrangService DanhMucATTPTinhTrangService
            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService

            , IProvinceDataService ProvinceDataService
            , IDistrictDataService DistrictDataService
            , IWardDataService WardDataService

            , IDocumentTemplateService DocumentTemplateService
            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService
        ) : base(CompanyInfoVungTrongRepository)
        {
            _CompanyInfoVungTrongRepository = CompanyInfoVungTrongRepository;

            _CompanyInfoVungTrongToaDoService = CompanyInfoVungTrongToaDoService;
            _CompanyInfoVungTrongNongHoService = CompanyInfoVungTrongNongHoService;
            _CompanyInfoVungTrongDocumentsService = CompanyInfoVungTrongDocumentsService;

            _CompanyInfoService = CompanyInfoService;
            _StateAgencyService = StateAgencyService;

            _DanhMucATTPLoaiHoSoService = DanhMucATTPLoaiHoSoService;
            _DanhMucATTPTinhTrangService = DanhMucATTPTinhTrangService;
            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;

            _ProvinceDataService = ProvinceDataService;
            _DistrictDataService = DistrictDataService;
            _WardDataService = WardDataService;

            _DocumentTemplateService = DocumentTemplateService;
            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;
        }

        public override void Initialization(CompanyInfoVungTrong model)
        {
            BaseInitialization(model);
            if (model.DanhMucATTPLoaiHoSoID == null)
            {
                model.DanhMucATTPLoaiHoSoID = GlobalHelper.DanhMucATTPLoaiHoSoID;
            }
            if (model.DanhMucATTPTinhTrangID == null)
            {
                model.DanhMucATTPTinhTrangID = GlobalHelper.DanhMucATTPTinhTrangID;
            }
            if (model.DanhMucATTPXepLoaiID == null)
            {
                model.DanhMucATTPXepLoaiID = GlobalHelper.DanhMucATTPXepLoaiID;
            }
            if (model.StateAgencyID == null)
            {
                model.StateAgencyID = GlobalHelper.StateAgencyID;
            }
            if (model.ParentID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.ParentID.Value);
                companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                model.CompanyInfoName = companyInfo.Name;
                model.Description = companyInfo.address;
            }

            if (model.ProvinceDataID > 0)
            {
                model.ProvinceDataName = _ProvinceDataService.GetByID(model.ProvinceDataID.Value).Name;
            }
            if (model.DistrictDataID > 0)
            {
                model.DistrictDataName = _ProvinceDataService.GetByID(model.DistrictDataID.Value).Name;
            }
            if (model.WardDataID > 0)
            {
                model.WardDataName = _ProvinceDataService.GetByID(model.WardDataID.Value).Name;
            }

            if (model.StateAgencyID > 0)
            {
                model.StateAgencyName = _StateAgencyService.GetByID(model.StateAgencyID.Value).Name;
            }
            if (model.DanhMucATTPLoaiHoSoID > 0)
            {
                model.DanhMucATTPLoaiHoSoName = _DanhMucATTPLoaiHoSoService.GetByID(model.DanhMucATTPLoaiHoSoID.Value).Name;
            }
            if (model.DanhMucATTPTinhTrangID > 0)
            {
                model.DanhMucATTPTinhTrangName = _DanhMucATTPTinhTrangService.GetByID(model.DanhMucATTPTinhTrangID.Value).Name;
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
            if (model.NgayGhiNhan == null)
            {
                model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
            if (model.Active == null)
            {
                model.Active = true;
            }
        }

        public override async Task<CompanyInfoVungTrong> SaveAsync(CompanyInfoVungTrong model)
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
        private async Task<int> Sync(CompanyInfoVungTrong model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<CompanyInfoVungTrongDocuments> listCompanyInfoVungTrongDocuments = await _CompanyInfoVungTrongDocumentsService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoVungTrongDocuments.Count; i++)
                    {
                        CompanyInfoVungTrongDocuments itemCompanyInfoVungTrongDocuments = listCompanyInfoVungTrongDocuments[i];
                        CompanyInfoVungTrongDocuments itemExist = await _CompanyInfoVungTrongDocumentsService.GetByCondition(item => item.Code == itemCompanyInfoVungTrongDocuments.Code && item.DocumentTemplateID == itemCompanyInfoVungTrongDocuments.DocumentTemplateID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            itemExist = new CompanyInfoVungTrongDocuments();
                        }
                        if (itemExist.ID > 0)
                        {
                            itemCompanyInfoVungTrongDocuments = itemExist;
                        }
                        itemCompanyInfoVungTrongDocuments.ParentID = model.ID;
                        await _CompanyInfoVungTrongDocumentsService.SaveAsync(itemCompanyInfoVungTrongDocuments);
                    }

                    List<CompanyInfoVungTrongToaDo> listCompanyInfoVungTrongToaDo = await _CompanyInfoVungTrongToaDoService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoVungTrongToaDo.Count; i++)
                    {
                        CompanyInfoVungTrongToaDo itemCompanyInfoVungTrongToaDo = listCompanyInfoVungTrongToaDo[i];
                        itemCompanyInfoVungTrongToaDo.ParentID = model.ID;
                        await _CompanyInfoVungTrongToaDoService.SaveAsync(itemCompanyInfoVungTrongToaDo);
                    }

                    List<CompanyInfoVungTrongNongHo> listCompanyInfoVungTrongNongHo = await _CompanyInfoVungTrongNongHoService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoVungTrongNongHo.Count; i++)
                    {
                        CompanyInfoVungTrongNongHo itemCompanyInfoVungTrongNongHo = listCompanyInfoVungTrongNongHo[i];
                        itemCompanyInfoVungTrongNongHo.ParentID = model.ID;
                        await _CompanyInfoVungTrongNongHoService.SaveAsync(itemCompanyInfoVungTrongNongHo);
                    }
                }
            }
            return result;
        }

        public virtual async Task<List<CompanyInfoVungTrong>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID)
        {
            List<CompanyInfoVungTrong> result = new List<CompanyInfoVungTrong>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                bool active = true;
                if (danhMucATTPTinhTrangID > 0)
                {
                    result = await GetByCondition(item => item.Active == active && item.DanhMucATTPTinhTrangID == danhMucATTPTinhTrangID).ToListAsync();
                }
                else
                {
                    result = await GetByActiveToListAsync(active);
                }
            }
            return result;
        }

        public virtual async Task<List<CompanyInfoVungTrong>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active)
        {
            List<CompanyInfoVungTrong> result = new List<CompanyInfoVungTrong>();
            if (danhMucATTPTinhTrangID > 0)
            {
                result = await GetByCondition(item => item.DanhMucATTPTinhTrangID == danhMucATTPTinhTrangID && item.Active == active).ToListAsync();
            }
            return result;
        }

    }
}

