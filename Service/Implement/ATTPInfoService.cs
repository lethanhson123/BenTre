using Service.Interface;
using System;

namespace Service.Implement
{
    public class ATTPInfoService : BaseService<ATTPInfo, IATTPInfoRepository>
    , IATTPInfoService
    {
        private readonly IATTPInfoRepository _ATTPInfoRepository;

        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly IStateAgencyService _StateAgencyService;

        private readonly IDanhMucATTPLoaiHoSoService _DanhMucATTPLoaiHoSoService;
        private readonly IDanhMucATTPTinhTrangService _DanhMucATTPTinhTrangService;
        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;

        private readonly IATTPInfoDocumentsService _ATTPInfoDocumentsService;
        private readonly IATTPInfoProductGroupsService _ATTPInfoProductGroupsService;
        public ATTPInfoService(IATTPInfoRepository ATTPInfoRepository

            , ICompanyInfoService CompanyInfoService
            , IStateAgencyService StateAgencyService

            , IDanhMucATTPLoaiHoSoService DanhMucATTPLoaiHoSoService
            , IDanhMucATTPTinhTrangService DanhMucATTPTinhTrangService
            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService

            , IATTPInfoDocumentsService ATTPInfoDocumentsService
            , IATTPInfoProductGroupsService ATTPInfoProductGroupsService

            ) : base(ATTPInfoRepository)
        {
            _ATTPInfoRepository = ATTPInfoRepository;

            _CompanyInfoService = CompanyInfoService;
            _StateAgencyService = StateAgencyService;

            _DanhMucATTPLoaiHoSoService = DanhMucATTPLoaiHoSoService;
            _DanhMucATTPTinhTrangService = DanhMucATTPTinhTrangService;
            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;

            _ATTPInfoDocumentsService = ATTPInfoDocumentsService;
            _ATTPInfoProductGroupsService = ATTPInfoProductGroupsService;
        }
        public override void Initialization(ATTPInfo model)
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
        public override async Task<ATTPInfo> SaveAsync(ATTPInfo model)
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
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        private async Task<int> Sync(ATTPInfo model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model != null)
            {
                if (model.ID > 0)
                {
                    List<ATTPInfoProductGroups> listATTPInfoProductGroups = await _ATTPInfoProductGroupsService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listATTPInfoProductGroups.Count; i++)
                    {
                        ATTPInfoProductGroups itemATTPInfoProductGroups = listATTPInfoProductGroups[i];
                        ATTPInfoProductGroups itemExist = await _ATTPInfoProductGroupsService.GetByCondition(item => item.Code == itemATTPInfoProductGroups.Code && item.ProductGroupID == itemATTPInfoProductGroups.ProductGroupID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            itemExist = new ATTPInfoProductGroups();
                        }
                        if (itemExist.ID > 0)
                        {
                            itemATTPInfoProductGroups = itemExist;
                        }
                        itemATTPInfoProductGroups.ParentID = model.ID;
                        await _ATTPInfoProductGroupsService.SaveAsync(itemATTPInfoProductGroups);
                    }

                    List<ATTPInfoDocuments> listATTPInfoDocuments = await _ATTPInfoDocumentsService.GetBySearchStringToListAsync(model.Code);
                    for (int i = 0; i < listATTPInfoDocuments.Count; i++)
                    {
                        ATTPInfoDocuments itemATTPInfoDocuments = listATTPInfoDocuments[i];
                        ATTPInfoDocuments itemExist = await _ATTPInfoDocumentsService.GetByCondition(item => item.Code == itemATTPInfoDocuments.Code && item.DocumentTemplateID == itemATTPInfoDocuments.DocumentTemplateID).FirstOrDefaultAsync();
                        if (itemExist == null)
                        {
                            itemExist = new ATTPInfoDocuments();
                        }
                        if (itemExist.ID > 0)
                        {
                            itemATTPInfoDocuments = itemExist;
                        }
                        itemATTPInfoDocuments.ParentID = model.ID;
                        await _ATTPInfoDocumentsService.SaveAsync(itemATTPInfoDocuments);
                    }
                }
            }
            return result;
        }

        public override async Task<List<ATTPInfo>> GetBySearchStringToListAsync(string searchString)
        {
            List<ATTPInfo> result = new List<ATTPInfo>();
            if (!string.IsNullOrEmpty(searchString))
            {
                searchString = searchString.Trim();

                result = await GetByCondition(item => item.ID.ToString().ToLower().Contains(searchString.ToLower())).ToListAsync();

                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.Code.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.NgayGhiNhan.Value.ToString("MM/dd/yyyy").ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.Display.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.DanhMucATTPLoaiHoSoName.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.DanhMucATTPTinhTrangName.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.DanhMucATTPXepLoaiName.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
            }
            else
            {
                result = await GetByActiveToListAsync(true);
            }
            return result;
        }
        public virtual async Task<List<ATTPInfo>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID)
        {
            List<ATTPInfo> result = new List<ATTPInfo>();
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
        public virtual async Task<List<ATTPInfo>> GetBySearchString_ParentID_DanhMucATTPLoaiHoSoID_DanhMucATTPTinhTrangID_DanhMucATTPXepLoaiIDToListAsync(string searchString
            , long parentID
            , long danhMucATTPLoaiHoSoID
            , long danhMucATTPTinhTrangID
            , long danhMucATTPXepLoaiID)
        {
            List<ATTPInfo> result = new List<ATTPInfo>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                bool active = true;

                if (parentID > 0)
                {
                    result = await GetByParentIDAndActiveToListAsync(parentID, active);
                }

                if (danhMucATTPLoaiHoSoID > 0)
                {
                    result = await GetByCondition(item => item.Active == active && item.DanhMucATTPLoaiHoSoID == danhMucATTPLoaiHoSoID).ToListAsync();
                }

                if (danhMucATTPTinhTrangID > 0)
                {
                    result = await GetByCondition(item => item.Active == active && item.DanhMucATTPTinhTrangID == danhMucATTPTinhTrangID).ToListAsync();
                }
                else
                {
                    result = await GetByActiveToListAsync(active);
                }

                if (danhMucATTPXepLoaiID > 0)
                {
                    result = await GetByCondition(item => item.Active == active && item.DanhMucATTPXepLoaiID == danhMucATTPXepLoaiID).ToListAsync();
                }
            }
            return result;
        }
        public virtual async Task<List<ATTPInfo>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active)
        {
            List<ATTPInfo> result = new List<ATTPInfo>();
            if (danhMucATTPTinhTrangID > 0)
            {
                result = await GetByCondition(item => item.DanhMucATTPTinhTrangID == danhMucATTPTinhTrangID && item.Active == active).ToListAsync();
            }
            return result;
        }
    }
}

