using Data.Model;
using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoService : BaseService<CompanyInfo, ICompanyInfoRepository>
    , ICompanyInfoService
    {
        private readonly ICompanyInfoRepository _CompanyInfoRepository;

        private readonly IDanhMucCompanyInfoService _DanhMucCompanyInfoService;
        private readonly IDanhMucChuongTrinhQuanLyChatLuongService _DanhMucChuongTrinhQuanLyChatLuongService;
        private readonly ICompanyScopeService _CompanyScopeService;
        private readonly IDanhMucCompanyTinhTrangService _DanhMucCompanyTinhTrangService;
        private readonly IProductGroupService _ProductGroupService;
        private readonly ICompanyInfoProductGroupsService _CompanyInfoProductGroupsService;
        private readonly IProvinceDataService _ProvinceDataService;
        private readonly IDistrictDataService _DistrictDataService;
        private readonly IWardDataService _WardDataService;
        private readonly IDanhMucThiTruongService _DanhMucThiTruongService;
        private readonly ICompanyInfoLichSuKiemTraService _CompanyInfoLichSuKiemTraService;
        private readonly IDanhMucDangKyCapGiayService _DanhMucDangKyCapGiayService;
        private readonly IDanhMucXepLoaiService _DanhMucXepLoaiService;
        private readonly IDanhMucCompanyTrangThaiService _DanhMucCompanyTrangThaiService;
        private readonly IDanhMucCompanyPhanLoaiService _DanhMucCompanyPhanLoaiService;

        private readonly IThanhVienService _ThanhVienService;

        private readonly IDanhMucHinhThucNuoiService _DanhMucHinhThucNuoiService;

        public CompanyInfoService(ICompanyInfoRepository CompanyInfoRepository

            , IDanhMucCompanyInfoService DanhMucCompanyInfoService
            , IDanhMucChuongTrinhQuanLyChatLuongService DanhMucChuongTrinhQuanLyChatLuongService
            , ICompanyScopeService CompanyScopeService
            , IDanhMucCompanyTinhTrangService DanhMucCompanyTinhTrangService
            , IProductGroupService ProductGroupService
            , ICompanyInfoProductGroupsService CompanyInfoProductGroupsService
            , IProvinceDataService ProvinceDataService
            , IDistrictDataService DistrictDataService
            , IWardDataService WardDataService
            , IDanhMucThiTruongService DanhMucThiTruongService
            , ICompanyInfoLichSuKiemTraService CompanyInfoLichSuKiemTraService
            , IDanhMucDangKyCapGiayService DanhMucDangKyCapGiayService
            , IDanhMucXepLoaiService DanhMucXepLoaiService
            , IDanhMucCompanyTrangThaiService DanhMucCompanyTrangThaiService
            , IDanhMucCompanyPhanLoaiService DanhMucCompanyPhanLoaiService

            , IThanhVienService thanhVienService

            , IDanhMucHinhThucNuoiService DanhMucHinhThucNuoiService

            ) : base(CompanyInfoRepository)
        {
            _CompanyInfoRepository = CompanyInfoRepository;

            _DanhMucCompanyInfoService = DanhMucCompanyInfoService;
            _DanhMucChuongTrinhQuanLyChatLuongService = DanhMucChuongTrinhQuanLyChatLuongService;
            _CompanyScopeService = CompanyScopeService;
            _DanhMucCompanyTinhTrangService = DanhMucCompanyTinhTrangService;
            _ProductGroupService = ProductGroupService;
            _CompanyInfoProductGroupsService = CompanyInfoProductGroupsService;
            _ProvinceDataService = ProvinceDataService;
            _DistrictDataService = DistrictDataService;
            _WardDataService = WardDataService;
            _DanhMucThiTruongService = DanhMucThiTruongService;
            _CompanyInfoLichSuKiemTraService = CompanyInfoLichSuKiemTraService;
            _DanhMucDangKyCapGiayService = DanhMucDangKyCapGiayService;
            _DanhMucXepLoaiService = DanhMucXepLoaiService;
            _DanhMucCompanyTrangThaiService = DanhMucCompanyTrangThaiService;
            _DanhMucCompanyPhanLoaiService = DanhMucCompanyPhanLoaiService;

            _ThanhVienService = thanhVienService;

            _DanhMucHinhThucNuoiService = DanhMucHinhThucNuoiService;
        }

        public override void Initialization(CompanyInfo model)
        {
            if (model.ProvinceDataID == null)
            {
                model.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;
            }
            if (model.ProvinceDataID == 0)
            {
                model.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;
            }
            if (model.ProvinceDataID > 0)
            {
                model.ProvinceDataName = _ProvinceDataService.GetByID(model.ProvinceDataID.Value).Name;
            }
            if (model.ParentID > 0)
            {
                model.DanhMucCompanyPhanLoaiName = _DanhMucCompanyPhanLoaiService.GetByID(model.ParentID.Value).Name;
            }
            if (model.DistrictDataID > 0)
            {
                model.DistrictDataName = _DistrictDataService.GetByID(model.DistrictDataID.Value).Name;
            }
            if (model.WardDataID > 0)
            {
                model.WardDataName = _WardDataService.GetByID(model.WardDataID.Value).Name;
            }
            if (model.DanhMucChuongTrinhQuanLyChatLuongID > 0)
            {
                model.DanhMucChuongTrinhQuanLyChatLuongName = _DanhMucChuongTrinhQuanLyChatLuongService.GetByID(model.DanhMucChuongTrinhQuanLyChatLuongID.Value).Code;
            }
            if (model.CompanyScopeID > 0)
            {
                model.CompanyScopeName = _CompanyScopeService.GetByID(model.CompanyScopeID.Value).Code;
            }
            if (model.DanhMucCompanyTinhTrangID > 0)
            {
                DanhMucCompanyTinhTrang danhMucCompanyTinhTrang = _DanhMucCompanyTinhTrangService.GetByID(model.DanhMucCompanyTinhTrangID.Value);
                model.DanhMucCompanyTinhTrangName = danhMucCompanyTinhTrang.Code;
                model.MauNen = danhMucCompanyTinhTrang.Note;
            }
            if (model.DanhMucThiTruongID > 0)
            {
                model.DanhMucThiTruongName = _DanhMucThiTruongService.GetByID(model.DanhMucThiTruongID.Value).Name;
            }
            if (model.DuyetTaiKhoanThanhVienID > 0)
            {
                model.DuyetTaiKhoanThanhVienName = _ThanhVienService.GetByID(model.DuyetTaiKhoanThanhVienID.Value).Code;
            }
            if (model.DanhMucCompanyTrangThaiID > 0)
            {
                model.DanhMucCompanyTrangThaiName = _DanhMucCompanyTrangThaiService.GetByID(model.DanhMucCompanyTrangThaiID.Value).Code;
            }
            if (model.DanhMucHinhThucNuoiID > 0)
            {
                model.DanhMucHinhThucNuoiName = _DanhMucHinhThucNuoiService.GetByID(model.DanhMucHinhThucNuoiID.Value).Code;
            }
            if (model.ParentID > 0)
            {
                model.TypeName = _DanhMucCompanyInfoService.GetByID(model.ParentID.Value).Name;
            }
            if (string.IsNullOrEmpty(model.uid))
            {
                model.uid = GlobalHelper.InitializationGUICode;
            }
            if (string.IsNullOrEmpty(model.Name))
            {
                model.Name = model.fullname;
            }
            if (string.IsNullOrEmpty(model.MauNen))
            {
                model.MauNen = GlobalHelper.MauNen;
            }
            if (string.IsNullOrEmpty(model.DKKD))
            {
                model.DKKD = model.phone;
            }
            if (string.IsNullOrEmpty(model.DKKD))
            {
                model.DKKD = model.Name;
            }
            if (string.IsNullOrEmpty(model.Code))
            {
                model.Code = model.DKKD;
            }
            if (string.IsNullOrEmpty(model.tax_code))
            {
                model.tax_code = model.DKKD;
            }
            if (model.DuyetTaiKhoanNgayGhiNhan == null)
            {
                model.DuyetTaiKhoanNgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
            if (model.HTMLContent == null)
            {
                model.HTMLContent = model.address + ", " + model.hamlet + ", " + model.WardDataName + ", " + model.DistrictDataName + ", " + model.ProvinceDataName;
            }
        }
        public override async Task<CompanyInfo> SaveAsync(CompanyInfo model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model.ID > 0)
            {
                await UpdateAsync(model);
            }
            else
            {
                await AddAsync(model);
            }
            if (result > 0)
            {
                await Sync(model);
            }
            return model;
        }
        private async Task<int> Sync(CompanyInfo model)
        {
            int result = GlobalHelper.InitializationNumber;
            ThanhVien thanhVien = new ThanhVien();

            thanhVien.Name = model.fullname;
            thanhVien.Email = model.email;
            thanhVien.DienThoai = model.phone;
            thanhVien.Active = model.Active;

            thanhVien.ParentID = GlobalHelper.DanhMucThanhVienIDDoanhNghiep;

            await _ThanhVienService.SaveAsync(thanhVien);
            return result;
        }
        public override async Task<int> AddAsync(CompanyInfo model)
        {
            Initialization(model);
            int result = GlobalHelper.InitializationNumber;
            CompanyInfo modelExist = await GetByDKKDAsync(model.DKKD);
            if (modelExist.ID == 0)
            {
                result = await _CompanyInfoRepository.AddAsync(model);
            }
            return result;
        }
        public override async Task<CompanyInfo> GetByNameAsync(string name)
        {
            CompanyInfo result = new CompanyInfo();
            if (!string.IsNullOrEmpty(name))
            {
                name = name.Trim();
                result = await GetByCondition(item => item.Name.ToLower() == name.ToLower()).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new CompanyInfo();
                }
            }
            return result;
        }
        public async Task<CompanyInfo> GetByDKKDAsync(string DKKD)
        {
            CompanyInfo result = new CompanyInfo();
            if (!string.IsNullOrEmpty(DKKD))
            {
                DKKD = DKKD.Trim();
                result = await GetByCondition(item => item.DKKD.ToLower() == DKKD.ToLower()).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new CompanyInfo();
                }
            }
            return result;
        }
        public override async Task<List<CompanyInfo>> GetBySearchStringToListAsync(string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
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
                    result = await GetByCondition(item => item.DKKD.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.Code.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.phone.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.fullname.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.identity_card.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.DistrictDataName.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
                if (result.Count == 0)
                {
                    result = await GetByCondition(item => item.WardDataName.ToLower().Contains(searchString.ToLower())).ToListAsync();
                }
            }
            return result;
        }
        public override async Task<List<CompanyInfo>> GetByParentIDToListAsync(long parentID)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (parentID == 0)
            {
                result = await GetAllToListAsync();
            }
            else
            {
                result = await _CompanyInfoRepository.GetByParentIDToListAsync(parentID);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByParentIDOrSearchStringToListAsync(long parentID, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                result = await GetByParentIDToListAsync(parentID);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync(long parentID, long districtDataID, long wardDataID, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                if (parentID > 0)
                {
                    if (districtDataID > 0)
                    {
                        if (wardDataID > 0)
                        {
                            result = await GetByCondition(item => item.ParentID == parentID && item.DistrictDataID == districtDataID && item.WardDataID == wardDataID).ToListAsync();
                        }
                        else
                        {
                            result = await GetByCondition(item => item.ParentID == parentID && item.DistrictDataID == districtDataID).ToListAsync();
                        }
                    }
                    else
                    {
                        result = await GetByParentIDToListAsync(parentID);
                    }
                }
                else
                {
                    if (districtDataID > 0)
                    {
                        if (wardDataID > 0)
                        {
                            result = await GetByCondition(item => item.DistrictDataID == districtDataID && item.WardDataID == wardDataID).ToListAsync();
                        }
                        else
                        {
                            result = await GetByCondition(item => item.DistrictDataID == districtDataID).ToListAsync();
                        }
                    }
                    else
                    {
                        result = await GetByParentIDToListAsync(parentID);
                    }
                }
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync(long danhMucCompanyTinhTrangID, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                if (danhMucCompanyTinhTrangID > 0)
                {
                    result = await GetByCondition(item => item.DanhMucCompanyTinhTrangID == danhMucCompanyTinhTrangID).ToListAsync();
                }
                else
                {
                    result = await GetAllToListAsync();
                }
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByDistrictDataID_ActiveToListAsync(long districtDataID, bool active)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (districtDataID > 0)
            {
                result = await GetByCondition(item => item.DistrictDataID == districtDataID && item.Active == active).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByDistrictDataIDToListAsync(long districtDataID)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (districtDataID > 0)
            {
                result = await GetByCondition(item => item.DistrictDataID == districtDataID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByDistrictDataID_Page_PageSizeToListAsync(long districtDataID, int page, int pageSize)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (districtDataID > 0)
            {
                result = await GetByCondition(item => item.DistrictDataID == districtDataID).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByDistrictDataID_SearchStringToListAsync(long districtDataID, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (districtDataID > 0)
            {
                if (!string.IsNullOrEmpty(searchString))
                {
                    result = await GetByCondition(item => item.DistrictDataID == districtDataID && (item.ID.ToString().Contains(searchString) || item.Name.Contains(searchString) || item.phone.Contains(searchString) || item.DKKD.Contains(searchString) || item.email.Contains(searchString))).ToListAsync();
                }
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByParentID_Active_Page_PageSizeToListAsync(long parentID, bool active, int page, int pageSize)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (parentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == parentID && item.Active == active).Skip(page * pageSize).Take(pageSize).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByParentID_Active_SearchStringToListAsync(long parentID, bool active, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (parentID > 0)
            {
                if (!string.IsNullOrEmpty(searchString))
                {
                    result = await GetByCondition(item => item.ParentID == parentID && item.Active == active && (item.ID.ToString().Contains(searchString) || item.Name.Contains(searchString) || item.phone.Contains(searchString) || item.DKKD.Contains(searchString) || item.email.Contains(searchString))).ToListAsync();
                }
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByActive_Page_PageSizeToListAsync(bool active, int page, int pageSize)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();

            result = await GetByCondition(item => item.Active == active).Skip(page * pageSize).Take(pageSize).ToListAsync();

            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByActive_SearchStringToListAsync(bool active, string searchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();

            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetByCondition(item => item.Active == active && (item.ID.ToString().Contains(searchString) || item.Name.Contains(searchString) || item.phone.Contains(searchString) || item.DKKD.Contains(searchString) || item.email.Contains(searchString))).ToListAsync();
            }

            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                             new SqlParameter("@DistrictDataID",DistrictDataID),
                              new SqlParameter("@WardDataID",WardDataID),
                            new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByPlanTypeID_DistrictDataID_WardDataID_SearchString", parameters);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DanhMucATTPXepLoaiID, long DistrictDataID, long WardDataID, string SearchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                            new SqlParameter("@DanhMucATTPXepLoaiID",DanhMucATTPXepLoaiID),
                             new SqlParameter("@DistrictDataID",DistrictDataID),
                              new SqlParameter("@WardDataID",WardDataID),
                            new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchString", parameters);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync(long PlanTypeID, long DanhMucATTPTinhTrangID, long DistrictDataID, long WardDataID, string SearchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                            new SqlParameter("@DanhMucATTPTinhTrangID",DanhMucATTPTinhTrangID),
                             new SqlParameter("@DistrictDataID",DistrictDataID),
                              new SqlParameter("@WardDataID",WardDataID),
                            new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchString", parameters);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                    new SqlParameter("@Active",Active),
                    new SqlParameter("@PlanTypeID",PlanTypeID),
                    new SqlParameter("@DistrictDataID",DistrictDataID),
                    new SqlParameter("@WardDataID",WardDataID),
                    new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString", parameters);
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString, int page, int pageSize)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                    new SqlParameter("@Active",Active),
                    new SqlParameter("@PlanTypeID",PlanTypeID),
                    new SqlParameter("@DistrictDataID",DistrictDataID),
                    new SqlParameter("@WardDataID",WardDataID),
                    new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString", parameters);
            }
            if (result.Count > 0)
            {
                result= result.Skip(page * pageSize).Take(pageSize).ToList();
            }
            return result;
        }
        public virtual async Task<List<CompanyInfo>> GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync(bool Active, long PlanTypeID, long DistrictDataID, long WardDataID, string SearchString, long ID, int page, int pageSize)
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            result.AddRange(await GetByIDToListAsync(ID));
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                    new SqlParameter("@Active",Active),
                    new SqlParameter("@PlanTypeID",PlanTypeID),
                    new SqlParameter("@DistrictDataID",DistrictDataID),
                    new SqlParameter("@WardDataID",WardDataID),
                    new SqlParameter("@SearchString",SearchString),
                };
                List<CompanyInfo> list = await GetByStoredProcedureToListAsync("sp_CompanyInfoSelectItemsByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString", parameters);
                if (list.Count > 0)
                {
                    list = list.Skip(page * pageSize).Take(pageSize).ToList();
                    result.AddRange(list);
                }
            }            
            return result;
        }
    }
}

