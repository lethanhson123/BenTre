using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoDonViDongGoiService : BaseService<CompanyInfoDonViDongGoi, ICompanyInfoDonViDongGoiRepository>
    , ICompanyInfoDonViDongGoiService
    {
        private readonly ICompanyInfoDonViDongGoiRepository _CompanyInfoDonViDongGoiRepository;

        private readonly ICompanyInfoDonViDongGoiSanPhamService _CompanyInfoDonViDongGoiSanPhamService;
        private readonly ICompanyInfoDonViDongGoiThiTruongService _CompanyInfoDonViDongGoiThiTruongService;
        private readonly ICompanyInfoDonViDongGoiNongHoService _CompanyInfoDonViDongGoiNongHoService;
        private readonly ICompanyInfoDonViDongGoiDocumentsService _CompanyInfoDonViDongGoiDocumentsService;

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


        public CompanyInfoDonViDongGoiService(ICompanyInfoDonViDongGoiRepository CompanyInfoDonViDongGoiRepository

            , ICompanyInfoDonViDongGoiSanPhamService CompanyInfoDonViDongGoiSanPhamService
            , ICompanyInfoDonViDongGoiThiTruongService CompanyInfoDonViDongGoiThiTruongService
            , ICompanyInfoDonViDongGoiNongHoService CompanyInfoDonViDongGoiNongHoService
            , ICompanyInfoDonViDongGoiDocumentsService CompanyInfoDonViDongGoiDocumentsService

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

        ) : base(CompanyInfoDonViDongGoiRepository)
        {
            _CompanyInfoDonViDongGoiRepository = CompanyInfoDonViDongGoiRepository;

            _CompanyInfoDonViDongGoiSanPhamService = CompanyInfoDonViDongGoiSanPhamService;
            _CompanyInfoDonViDongGoiThiTruongService = CompanyInfoDonViDongGoiThiTruongService;
            _CompanyInfoDonViDongGoiNongHoService = CompanyInfoDonViDongGoiNongHoService;
            _CompanyInfoDonViDongGoiDocumentsService = CompanyInfoDonViDongGoiDocumentsService;

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
        public override void Initialization(CompanyInfoDonViDongGoi model)
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

        public override async Task<CompanyInfoDonViDongGoi> SaveAsync(CompanyInfoDonViDongGoi model)
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
        private async Task<int> Sync(CompanyInfoDonViDongGoi model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<CompanyInfoDonViDongGoiDocuments> listCompanyInfoDonViDongGoiDocuments = await _CompanyInfoDonViDongGoiDocumentsService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoDonViDongGoiDocuments.Count; i++)
                    {
                        CompanyInfoDonViDongGoiDocuments itemCompanyInfoDonViDongGoiDocuments = listCompanyInfoDonViDongGoiDocuments[i];
                        CompanyInfoDonViDongGoiDocuments itemExist = await _CompanyInfoDonViDongGoiDocumentsService.GetByCondition(item => item.Code == itemCompanyInfoDonViDongGoiDocuments.Code && item.DocumentTemplateID == itemCompanyInfoDonViDongGoiDocuments.DocumentTemplateID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            itemExist = new CompanyInfoDonViDongGoiDocuments();
                        }
                        if (itemExist.ID > 0)
                        {
                            itemCompanyInfoDonViDongGoiDocuments = itemExist;
                        }
                        itemCompanyInfoDonViDongGoiDocuments.ParentID = model.ID;
                        await _CompanyInfoDonViDongGoiDocumentsService.SaveAsync(itemCompanyInfoDonViDongGoiDocuments);
                    }

                    List<CompanyInfoDonViDongGoiSanPham> listCompanyInfoDonViDongGoiSanPham = await _CompanyInfoDonViDongGoiSanPhamService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoDonViDongGoiSanPham.Count; i++)
                    {
                        CompanyInfoDonViDongGoiSanPham itemCompanyInfoDonViDongGoiSanPham = listCompanyInfoDonViDongGoiSanPham[i];
                        itemCompanyInfoDonViDongGoiSanPham.ParentID = model.ID;
                        await _CompanyInfoDonViDongGoiSanPhamService.SaveAsync(itemCompanyInfoDonViDongGoiSanPham);
                    }

                    List<CompanyInfoDonViDongGoiThiTruong> listCompanyInfoDonViDongGoiThiTruong = await _CompanyInfoDonViDongGoiThiTruongService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoDonViDongGoiThiTruong.Count; i++)
                    {
                        CompanyInfoDonViDongGoiThiTruong itemCompanyInfoDonViDongGoiThiTruong = listCompanyInfoDonViDongGoiThiTruong[i];
                        itemCompanyInfoDonViDongGoiThiTruong.ParentID = model.ID;
                        await _CompanyInfoDonViDongGoiThiTruongService.SaveAsync(itemCompanyInfoDonViDongGoiThiTruong);
                    }

                    List<CompanyInfoDonViDongGoiNongHo> listCompanyInfoDonViDongGoiNongHo = await _CompanyInfoDonViDongGoiNongHoService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listCompanyInfoDonViDongGoiNongHo.Count; i++)
                    {
                        CompanyInfoDonViDongGoiNongHo itemCompanyInfoDonViDongGoiNongHo = listCompanyInfoDonViDongGoiNongHo[i];
                        itemCompanyInfoDonViDongGoiNongHo.ParentID = model.ID;
                        await _CompanyInfoDonViDongGoiNongHoService.SaveAsync(itemCompanyInfoDonViDongGoiNongHo);
                    }
                }
            }
            return result;
        }

        public virtual async Task<List<CompanyInfoDonViDongGoi>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID)
        {
            List<CompanyInfoDonViDongGoi> result = new List<CompanyInfoDonViDongGoi>();
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

        public virtual async Task<List<CompanyInfoDonViDongGoi>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active)
        {
            List<CompanyInfoDonViDongGoi> result = new List<CompanyInfoDonViDongGoi>();
            if (danhMucATTPTinhTrangID > 0)
            {
                result = await GetByCondition(item => item.DanhMucATTPTinhTrangID == danhMucATTPTinhTrangID && item.Active == active).ToListAsync();
            }
            return result;
        }
    }
}

