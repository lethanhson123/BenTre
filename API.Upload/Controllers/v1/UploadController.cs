

using Data.Model;
using DocumentFormat.OpenXml.Spreadsheet;
using Helper;
using Microsoft.EntityFrameworkCore;
using OfficeOpenXml.FormulaParsing.Excel.Functions.DateTime;
using OfficeOpenXml.FormulaParsing.Excel.Functions.RefAndLookup;
using Service.Implement;
using Service.Interface;
using System.Data;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class UploadController : BaseController<CompanyInfo, ICompanyInfoService>
    {
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IDanhMucChuongTrinhQuanLyChatLuongService _DanhMucChuongTrinhQuanLyChatLuongService;
        private readonly ICompanyScopeService _CompanyScopeService;
        private readonly IDanhMucCompanyTinhTrangService _DanhMucCompanyTinhTrangService;
        private readonly ICompanyGroupService _CompanyGroupService;
        private readonly ICompanyFieldsService _CompanyFieldsService;
        private readonly IProductGroupService _ProductGroupService;
        private readonly ICompanyInfoProductGroupsService _CompanyInfoProductGroupsService;
        private readonly IProvinceDataService _ProvinceDataService;
        private readonly IDistrictDataService _DistrictDataService;
        private readonly IWardDataService _WardDataService;
        private readonly IDanhMucThiTruongService _DanhMucThiTruongService;
        private readonly ICompanyInfoLichSuKiemTraService _CompanyInfoLichSuKiemTraService;
        private readonly IDanhMucDangKyCapGiayService _DanhMucDangKyCapGiayService;
        private readonly IDanhMucXepLoaiService _DanhMucXepLoaiService;
        private readonly IDanhMucLayMauService _DanhMucLayMauService;
        private readonly IDanhMucLayMauChiTieuService _DanhMucLayMauChiTieuService;

        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IPlanThamDinhDanhMucLayMauService _PlanThamDinhDanhMucLayMauService;
        private readonly IPlanThamDinhDanhMucLayMauChiTieuService _PlanThamDinhDanhMucLayMauChiTieuService;
        public UploadController(ICompanyInfoService CompanyInfoService
            , IWebHostEnvironment WebHostEnvironment

            , IDanhMucChuongTrinhQuanLyChatLuongService DanhMucChuongTrinhQuanLyChatLuongService
            , ICompanyScopeService CompanyScopeService
            , IDanhMucCompanyTinhTrangService DanhMucCompanyTinhTrangService
            , ICompanyGroupService CompanyGroupService
            , ICompanyFieldsService CompanyFieldsService
            , IProductGroupService ProductGroupService
            , ICompanyInfoProductGroupsService CompanyInfoProductGroupsService
            , IProvinceDataService ProvinceDataService
            , IDistrictDataService DistrictDataService
            , IWardDataService WardDataService
            , IDanhMucThiTruongService DanhMucThiTruongService
            , ICompanyInfoLichSuKiemTraService CompanyInfoLichSuKiemTraService
            , IDanhMucDangKyCapGiayService DanhMucDangKyCapGiayService
            , IDanhMucXepLoaiService DanhMucXepLoaiService
            , IDanhMucLayMauService DanhMucLayMauService
            , IDanhMucLayMauChiTieuService DanhMucLayMauChiTieuService

            , IPlanThamDinhService PlanThamDinhService
            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService
            , IPlanThamDinhDanhMucLayMauService PlanThamDinhDanhMucLayMauService
            , IPlanThamDinhDanhMucLayMauChiTieuService PlanThamDinhDanhMucLayMauChiTieuService

            ) : base(CompanyInfoService, WebHostEnvironment)
        {
            _CompanyInfoService = CompanyInfoService;
            _WebHostEnvironment = WebHostEnvironment;

            _DanhMucChuongTrinhQuanLyChatLuongService = DanhMucChuongTrinhQuanLyChatLuongService;
            _CompanyScopeService = CompanyScopeService;
            _DanhMucCompanyTinhTrangService = DanhMucCompanyTinhTrangService;
            _CompanyGroupService = CompanyGroupService;
            _CompanyFieldsService = CompanyFieldsService;
            _ProductGroupService = ProductGroupService;
            _CompanyInfoProductGroupsService = CompanyInfoProductGroupsService;
            _ProvinceDataService = ProvinceDataService;
            _DistrictDataService = DistrictDataService;
            _WardDataService = WardDataService;
            _DanhMucThiTruongService = DanhMucThiTruongService;
            _CompanyInfoLichSuKiemTraService = CompanyInfoLichSuKiemTraService;
            _DanhMucDangKyCapGiayService = DanhMucDangKyCapGiayService;
            _DanhMucXepLoaiService = DanhMucXepLoaiService;
            _DanhMucLayMauService = DanhMucLayMauService;
            _DanhMucLayMauChiTieuService = DanhMucLayMauChiTieuService;

            _PlanThamDinhService = PlanThamDinhService;
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _PlanThamDinhDanhMucLayMauService = PlanThamDinhDanhMucLayMauService;
            _PlanThamDinhDanhMucLayMauChiTieuService = PlanThamDinhDanhMucLayMauChiTieuService;
        }
        [HttpPost]
        [Route("PostCompanyInfo_CompanyInfoLichSuKiemTraByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostCompanyInfo_CompanyInfoLichSuKiemTraByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "CompanyInfo_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            List<CompanyScope> listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                            List<DanhMucChuongTrinhQuanLyChatLuong> listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                            List<DanhMucCompanyTinhTrang> listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                            List<CompanyGroup> listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                            List<CompanyFields> listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                            List<ProductGroup> listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                            List<ProvinceData> listProvinceData = await _ProvinceDataService.GetAllToListAsync();
                                            List<DistrictData> listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                            List<WardData> listWardData = await _WardDataService.GetAllToListAsync();
                                            List<DanhMucThiTruong> listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                            List<DanhMucDangKyCapGiay> listDanhMucDangKyCapGiay = await _DanhMucDangKyCapGiayService.GetAllToListAsync();
                                            List<DanhMucXepLoai> listDanhMucXepLoai = await _DanhMucXepLoaiService.GetAllToListAsync();

                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 4; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    CompanyInfo companyInfo = new CompanyInfo();
                                                    if (workSheet.Cells[i, 10].Value != null)
                                                    {
                                                        companyInfo.fullname = workSheet.Cells[i, 10].Value.ToString().Trim();
                                                        if (!string.IsNullOrEmpty(companyInfo.fullname))
                                                        {
                                                            if (workSheet.Cells[i, 3].Value != null)
                                                            {
                                                                companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                            }
                                                            companyInfo = await _CompanyInfoService.GetByDKKDAsync(companyInfo.DKKD);

                                                            if (companyInfo.ID == 0)
                                                            {
                                                                if (workSheet.Cells[i, 9].Value != null)
                                                                {
                                                                    companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                                }
                                                                companyInfo = await _CompanyInfoService.GetByNameAsync(companyInfo.Name);
                                                            }

                                                            if (workSheet.Cells[i, 2].Value != null)
                                                            {
                                                                companyInfo.CompanyScopeName = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    CompanyScope companyScope = listCompanyScope.Where(item => item.Code.Contains(companyInfo.CompanyScopeName)).FirstOrDefault();
                                                                    if (companyScope == null)
                                                                    {
                                                                        companyScope = new CompanyScope();
                                                                        companyScope.Code = companyInfo.CompanyScopeName;
                                                                        await _CompanyScopeService.SaveAsync(companyScope);
                                                                        if (companyScope.ID > 0)
                                                                        {
                                                                            listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.CompanyScopeID = companyScope.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 3].Value != null)
                                                            {
                                                                companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 4].Value != null)
                                                            {
                                                                string ngayCap = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                                ngayCap = ngayCap.Split(' ')[0];
                                                                try
                                                                {
                                                                    int nam = int.Parse(ngayCap.Split('/')[2]);
                                                                    int thang = int.Parse(ngayCap.Split('/')[0]);
                                                                    int ngay = int.Parse(ngayCap.Split('/')[1]);
                                                                    companyInfo.DKKDNgayCap = new DateTime(nam, thang, ngay);
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 5].Value != null)
                                                            {
                                                                companyInfo.DKKDSoCap = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 6].Value != null)
                                                            {
                                                                companyInfo.CompanyGroupName = workSheet.Cells[i, 6].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    CompanyGroup companyGroup = listCompanyGroup.Where(item => item.Code.Contains(companyInfo.CompanyGroupName)).FirstOrDefault();
                                                                    if (companyGroup == null)
                                                                    {
                                                                        companyGroup = new CompanyGroup();
                                                                        companyGroup.Code = companyInfo.CompanyGroupName;
                                                                        await _CompanyGroupService.SaveAsync(companyGroup);
                                                                        if (companyGroup.ID > 0)
                                                                        {
                                                                            listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.CompanyGroupID = companyGroup.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 7].Value != null)
                                                            {
                                                                companyInfo.DanhMucCompanyTinhTrangName = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    DanhMucCompanyTinhTrang danhMucCompanyTinhTrang = listDanhMucCompanyTinhTrang.Where(item => item.Code.Contains(companyInfo.DanhMucCompanyTinhTrangName)).FirstOrDefault();
                                                                    if (danhMucCompanyTinhTrang == null)
                                                                    {
                                                                        danhMucCompanyTinhTrang = new DanhMucCompanyTinhTrang();
                                                                        danhMucCompanyTinhTrang.Code = companyInfo.DanhMucCompanyTinhTrangName;
                                                                        await _DanhMucCompanyTinhTrangService.SaveAsync(danhMucCompanyTinhTrang);
                                                                        if (danhMucCompanyTinhTrang.ID > 0)
                                                                        {
                                                                            listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.DanhMucCompanyTinhTrangID = danhMucCompanyTinhTrang.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 8].Value != null)
                                                            {
                                                                try
                                                                {
                                                                    companyInfo.MS = int.Parse(workSheet.Cells[i, 8].Value.ToString().Trim());
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 9].Value != null)
                                                            {
                                                                companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 10].Value != null)
                                                            {
                                                                companyInfo.fullname = workSheet.Cells[i, 10].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 11].Value != null)
                                                            {
                                                                companyInfo.CompanyFieldName = workSheet.Cells[i, 11].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    CompanyFields companyFields = listCompanyFields.Where(item => item.Code.Contains(companyInfo.CompanyFieldName)).FirstOrDefault();
                                                                    if (companyFields == null)
                                                                    {
                                                                        companyFields = new CompanyFields();
                                                                        companyFields.Code = companyInfo.CompanyFieldName;
                                                                        await _CompanyFieldsService.SaveAsync(companyFields);
                                                                        if (companyFields.ID > 0)
                                                                        {
                                                                            listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.CompanyFieldID = companyFields.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 12].Value != null)
                                                            {
                                                                companyInfo.ProductGroupName = workSheet.Cells[i, 12].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 13].Value != null)
                                                            {
                                                                companyInfo.phone = workSheet.Cells[i, 13].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 14].Value != null)
                                                            {
                                                                companyInfo.address = workSheet.Cells[i, 14].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 15].Value != null)
                                                            {
                                                                string ngayDangKy = workSheet.Cells[i, 15].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    int nam = GlobalHelper.InitializationDateTime.Year;
                                                                    int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                                    int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                                    companyInfo.NgayDangKy = new DateTime(nam, thang, ngay);
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 16].Value != null)
                                                            {
                                                                string ngayDangKy = workSheet.Cells[i, 16].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    int nam = GlobalHelper.InitializationDateTime.Year;
                                                                    int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                                    int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                                    companyInfo.NgayHetHan = new DateTime(nam, thang, ngay);
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 17].Value != null)
                                                            {
                                                                companyInfo.DistrictDataName = workSheet.Cells[i, 17].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    DistrictData districtData = listDistrictData.Where(item => item.Name.Contains(companyInfo.DistrictDataName) && item.ParentID == GlobalHelper.ProvinceDataIDBenTre).FirstOrDefault();
                                                                    if (districtData == null)
                                                                    {
                                                                        districtData = new DistrictData();
                                                                    }
                                                                    districtData.ParentID = GlobalHelper.ProvinceDataIDBenTre;
                                                                    districtData.Name = companyInfo.DistrictDataName;
                                                                    await _DistrictDataService.SaveAsync(districtData);
                                                                    if (districtData.ID > 0)
                                                                    {
                                                                        listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                                                    }
                                                                    companyInfo.DistrictDataID = districtData.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 18].Value != null)
                                                            {
                                                                companyInfo.WardDataName = workSheet.Cells[i, 18].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    WardData wardData = listWardData.Where(item => item.Name.Contains(companyInfo.WardDataName) && item.ParentID == companyInfo.DistrictDataID).FirstOrDefault();
                                                                    if (wardData == null)
                                                                    {
                                                                        wardData = new WardData();
                                                                    }
                                                                    wardData.ParentID = companyInfo.DistrictDataID;
                                                                    wardData.Name = companyInfo.WardDataName;
                                                                    await _WardDataService.SaveAsync(wardData);
                                                                    if (wardData.ID > 0)
                                                                    {
                                                                        listWardData = await _WardDataService.GetAllToListAsync();
                                                                    }
                                                                    companyInfo.WardDataID = wardData.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 19].Value != null)
                                                            {
                                                                companyInfo.hamlet = workSheet.Cells[i, 19].Value.ToString().Trim();
                                                            }

                                                            if (workSheet.Cells[i, 20].Value != null)
                                                            {
                                                                try
                                                                {
                                                                    companyInfo.CongSuatThietKe = decimal.Parse(workSheet.Cells[i, 20].Value.ToString().Trim());
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 21].Value != null)
                                                            {
                                                                try
                                                                {
                                                                    companyInfo.SanLuong = decimal.Parse(workSheet.Cells[i, 21].Value.ToString().Trim());
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 22].Value != null)
                                                            {
                                                                companyInfo.DanhMucThiTruongName = workSheet.Cells[i, 22].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    DanhMucThiTruong danhMucThiTruong = listDanhMucThiTruong.Where(item => item.Name.Contains(companyInfo.DanhMucThiTruongName)).FirstOrDefault();
                                                                    if (danhMucThiTruong == null)
                                                                    {
                                                                        danhMucThiTruong = new DanhMucThiTruong();
                                                                        danhMucThiTruong.Name = companyInfo.DanhMucThiTruongName;
                                                                        await _DanhMucThiTruongService.SaveAsync(danhMucThiTruong);
                                                                        if (danhMucThiTruong.ID > 0)
                                                                        {
                                                                            listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.DanhMucThiTruongID = danhMucThiTruong.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 23].Value != null)
                                                            {
                                                                try
                                                                {
                                                                    companyInfo.DienTich = decimal.Parse(workSheet.Cells[i, 23].Value.ToString().Trim());
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 24].Value != null)
                                                            {
                                                                try
                                                                {
                                                                    companyInfo.SoLuongLaoDong = int.Parse(workSheet.Cells[i, 24].Value.ToString().Trim());
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 25].Value != null)
                                                            {
                                                                companyInfo.DanhMucChuongTrinhQuanLyChatLuongName = workSheet.Cells[i, 25].Value.ToString().Trim();
                                                                try
                                                                {
                                                                    DanhMucChuongTrinhQuanLyChatLuong danhMucChuongTrinhQuanLyChatLuong = listDanhMucChuongTrinhQuanLyChatLuong.Where(item => item.Code.Contains(companyInfo.DanhMucChuongTrinhQuanLyChatLuongName)).FirstOrDefault();
                                                                    if (danhMucChuongTrinhQuanLyChatLuong == null)
                                                                    {
                                                                        danhMucChuongTrinhQuanLyChatLuong = new DanhMucChuongTrinhQuanLyChatLuong();
                                                                        danhMucChuongTrinhQuanLyChatLuong.Code = companyInfo.DanhMucChuongTrinhQuanLyChatLuongName;
                                                                        await _DanhMucChuongTrinhQuanLyChatLuongService.SaveAsync(danhMucChuongTrinhQuanLyChatLuong);
                                                                        if (danhMucChuongTrinhQuanLyChatLuong.ID > 0)
                                                                        {
                                                                            listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                                                        }
                                                                    }
                                                                    companyInfo.DanhMucChuongTrinhQuanLyChatLuongID = danhMucChuongTrinhQuanLyChatLuong.ID;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                    string message = ex.Message;
                                                                }
                                                            }

                                                            if (workSheet.Cells[i, 133].Value != null)
                                                            {
                                                                companyInfo.Note = workSheet.Cells[i, 133].Value.ToString().Trim();
                                                            }


                                                            if (workSheet.Cells[i, 134].Value != null)
                                                            {
                                                                companyInfo.Description = workSheet.Cells[i, 134].Value.ToString().Trim();
                                                            }

                                                            companyInfo.ParentID = baseParameter.ParentID;
                                                            companyInfo.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;

                                                            if (companyInfo.ID == 0)
                                                            {
                                                                long ID = companyInfo.ID;
                                                            }

                                                            await _CompanyInfoService.SaveAsync(companyInfo);

                                                            if (companyInfo.ID > 0)
                                                            {
                                                                if (workSheet.Cells[i, 12].Value != null)
                                                                {
                                                                    companyInfo.ProductGroupName = workSheet.Cells[i, 12].Value.ToString().Trim();

                                                                    if (!string.IsNullOrEmpty(companyInfo.ProductGroupName))
                                                                    {
                                                                        foreach (string productGroupName in companyInfo.ProductGroupName.Split(','))
                                                                        {
                                                                            if (!string.IsNullOrEmpty(productGroupName))
                                                                            {
                                                                                try
                                                                                {
                                                                                    ProductGroup productGroup = listProductGroup.Where(item => item.Name.Contains(productGroupName)).FirstOrDefault();
                                                                                    if (productGroup == null)
                                                                                    {
                                                                                        productGroup = new ProductGroup();
                                                                                        productGroup.Name = productGroupName;
                                                                                        await _ProductGroupService.SaveAsync(productGroup);
                                                                                        if (productGroup.ID > 0)
                                                                                        {
                                                                                            listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                                                                        }
                                                                                    }
                                                                                    CompanyInfoProductGroups companyInfoProductGroups = await _CompanyInfoProductGroupsService.GetByParentIDAndstatus_idAsync(companyInfo.ID, productGroup.ID);
                                                                                    companyInfoProductGroups.ParentID = companyInfo.ID;
                                                                                    companyInfoProductGroups.status_id = productGroup.ID;
                                                                                    await _CompanyInfoProductGroupsService.SaveAsync(companyInfoProductGroups);
                                                                                }
                                                                                catch (Exception ex)
                                                                                {
                                                                                    string message = ex.Message;
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }

                                                                int column = 26;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2013, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2013, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2014, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2014, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2015, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2015, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2016, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2016, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2017, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2017, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2018, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2018, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2019, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2019, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2020, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2020, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2021, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2021, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2022, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2022, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2023, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2023, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2024, i, column, column + 1, column + 2, column + 3);
                                                                column = column + 4;
                                                                await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2024, i, column, column + 1, column + 2, column + 3);
                                                            }
                                                        }
                                                    }
                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }

        [HttpPost]
        [Route("PostCompanyInfo_CompanyInfoLichSuKiemTraNewByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostCompanyInfo_CompanyInfoLichSuKiemTraNewByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "CompanyInfo_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            List<CompanyScope> listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                            List<DanhMucChuongTrinhQuanLyChatLuong> listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                            List<DanhMucCompanyTinhTrang> listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                            List<CompanyGroup> listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                            List<CompanyFields> listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                            List<ProductGroup> listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                            List<ProvinceData> listProvinceData = await _ProvinceDataService.GetAllToListAsync();
                                            List<DistrictData> listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                            List<WardData> listWardData = await _WardDataService.GetAllToListAsync();
                                            List<DanhMucThiTruong> listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                            List<DanhMucDangKyCapGiay> listDanhMucDangKyCapGiay = await _DanhMucDangKyCapGiayService.GetAllToListAsync();
                                            List<DanhMucXepLoai> listDanhMucXepLoai = await _DanhMucXepLoaiService.GetAllToListAsync();

                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 4; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    CompanyInfo companyInfo = new CompanyInfo();
                                                    if (workSheet.Cells[i, 3].Value != null)
                                                    {
                                                        companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                    }
                                                    companyInfo = await _CompanyInfoService.GetByDKKDAsync(companyInfo.DKKD);

                                                    if (companyInfo.ID == 0)
                                                    {
                                                        if (workSheet.Cells[i, 9].Value != null)
                                                        {
                                                            companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                        }
                                                        companyInfo = await _CompanyInfoService.GetByNameAsync(companyInfo.Name);
                                                    }

                                                    if (workSheet.Cells[i, 2].Value != null)
                                                    {
                                                        companyInfo.CompanyScopeName = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyScope companyScope = listCompanyScope.Where(item => item.Code.Contains(companyInfo.CompanyScopeName)).FirstOrDefault();
                                                            if (companyScope == null)
                                                            {
                                                                companyScope = new CompanyScope();
                                                                companyScope.Code = companyInfo.CompanyScopeName;
                                                                await _CompanyScopeService.SaveAsync(companyScope);
                                                                if (companyScope.ID > 0)
                                                                {
                                                                    listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyScopeID = companyScope.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 3].Value != null)
                                                    {
                                                        companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 4].Value != null)
                                                    {
                                                        string ngayCap = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = int.Parse(ngayCap.Split('/')[2]);
                                                            int thang = int.Parse(ngayCap.Split('/')[0]);
                                                            int ngay = int.Parse(ngayCap.Split('/')[1]);
                                                            companyInfo.DKKDNgayCap = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 5].Value != null)
                                                    {
                                                        companyInfo.DKKDSoCap = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 6].Value != null)
                                                    {
                                                        companyInfo.CompanyGroupName = workSheet.Cells[i, 6].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyGroup companyGroup = listCompanyGroup.Where(item => item.Code.Contains(companyInfo.CompanyGroupName)).FirstOrDefault();
                                                            if (companyGroup == null)
                                                            {
                                                                companyGroup = new CompanyGroup();
                                                                companyGroup.Code = companyInfo.CompanyGroupName;
                                                                await _CompanyGroupService.SaveAsync(companyGroup);
                                                                if (companyGroup.ID > 0)
                                                                {
                                                                    listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyGroupID = companyGroup.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 7].Value != null)
                                                    {
                                                        companyInfo.DanhMucCompanyTinhTrangName = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucCompanyTinhTrang danhMucCompanyTinhTrang = listDanhMucCompanyTinhTrang.Where(item => item.Code.Contains(companyInfo.DanhMucCompanyTinhTrangName)).FirstOrDefault();
                                                            if (danhMucCompanyTinhTrang == null)
                                                            {
                                                                danhMucCompanyTinhTrang = new DanhMucCompanyTinhTrang();
                                                                danhMucCompanyTinhTrang.Code = companyInfo.DanhMucCompanyTinhTrangName;
                                                                await _DanhMucCompanyTinhTrangService.SaveAsync(danhMucCompanyTinhTrang);
                                                                if (danhMucCompanyTinhTrang.ID > 0)
                                                                {
                                                                    listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucCompanyTinhTrangID = danhMucCompanyTinhTrang.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 8].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.MS = int.Parse(workSheet.Cells[i, 8].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 9].Value != null)
                                                    {
                                                        companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 10].Value != null)
                                                    {
                                                        companyInfo.fullname = workSheet.Cells[i, 10].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 11].Value != null)
                                                    {
                                                        companyInfo.CompanyFieldName = workSheet.Cells[i, 11].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyFields companyFields = listCompanyFields.Where(item => item.Code.Contains(companyInfo.CompanyFieldName)).FirstOrDefault();
                                                            if (companyFields == null)
                                                            {
                                                                companyFields = new CompanyFields();
                                                                companyFields.Code = companyInfo.CompanyFieldName;
                                                                await _CompanyFieldsService.SaveAsync(companyFields);
                                                                if (companyFields.ID > 0)
                                                                {
                                                                    listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyFieldID = companyFields.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 12].Value != null)
                                                    {
                                                        companyInfo.ProductGroupName = workSheet.Cells[i, 12].Value.ToString().Trim();

                                                        if (!string.IsNullOrEmpty(companyInfo.ProductGroupName))
                                                        {
                                                            foreach (string productGroupName in companyInfo.ProductGroupName.Split(','))
                                                            {
                                                                if (!string.IsNullOrEmpty(productGroupName))
                                                                {
                                                                    try
                                                                    {
                                                                        ProductGroup productGroup = listProductGroup.Where(item => item.Code.Contains(productGroupName)).FirstOrDefault();
                                                                        if (productGroup == null)
                                                                        {
                                                                            productGroup = new ProductGroup();
                                                                            productGroup.Code = productGroupName;
                                                                            await _ProductGroupService.SaveAsync(productGroup);
                                                                            if (productGroup.ID > 0)
                                                                            {
                                                                                listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                                                            }
                                                                        }
                                                                        CompanyInfoProductGroups companyInfoProductGroups = await _CompanyInfoProductGroupsService.GetByParentIDAndstatus_idAsync(companyInfo.ID, productGroup.ID);
                                                                        companyInfoProductGroups.ParentID = companyInfo.ID;
                                                                        companyInfoProductGroups.status_id = productGroup.ID;
                                                                        await _CompanyInfoProductGroupsService.SaveAsync(companyInfoProductGroups);
                                                                    }
                                                                    catch (Exception ex)
                                                                    {
                                                                        string message = ex.Message;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 13].Value != null)
                                                    {
                                                        companyInfo.phone = workSheet.Cells[i, 13].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 14].Value != null)
                                                    {
                                                        companyInfo.address = workSheet.Cells[i, 14].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 15].Value != null)
                                                    {
                                                        string ngayDangKy = workSheet.Cells[i, 15].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = GlobalHelper.InitializationDateTime.Year;
                                                            int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                            int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                            companyInfo.NgayDangKy = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 16].Value != null)
                                                    {
                                                        string ngayDangKy = workSheet.Cells[i, 16].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = GlobalHelper.InitializationDateTime.Year;
                                                            int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                            int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                            companyInfo.NgayHetHan = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 17].Value != null)
                                                    {
                                                        companyInfo.DistrictDataName = workSheet.Cells[i, 17].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DistrictData districtData = listDistrictData.Where(item => item.Name.Contains(companyInfo.DistrictDataName) && item.ParentID == GlobalHelper.ProvinceDataIDBenTre).FirstOrDefault();
                                                            if (districtData == null)
                                                            {
                                                                districtData = new DistrictData();
                                                                districtData.Name = companyInfo.CompanyScopeName;
                                                                await _DistrictDataService.SaveAsync(districtData);
                                                                if (districtData.ID > 0)
                                                                {
                                                                    listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DistrictDataID = districtData.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 18].Value != null)
                                                    {
                                                        companyInfo.WardDataName = workSheet.Cells[i, 18].Value.ToString().Trim();
                                                        try
                                                        {
                                                            WardData wardData = listWardData.Where(item => item.Name.Contains(companyInfo.WardDataName) && item.ParentID == companyInfo.DistrictDataID).FirstOrDefault();
                                                            if (wardData == null)
                                                            {
                                                                wardData = new WardData();
                                                                wardData.Name = companyInfo.WardDataName;
                                                                await _WardDataService.SaveAsync(wardData);
                                                                if (wardData.ID > 0)
                                                                {
                                                                    listWardData = await _WardDataService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.WardDataID = wardData.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 19].Value != null)
                                                    {
                                                        companyInfo.hamlet = workSheet.Cells[i, 19].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 20].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.CongSuatThietKe = decimal.Parse(workSheet.Cells[i, 20].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 21].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.SanLuong = decimal.Parse(workSheet.Cells[i, 21].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 22].Value != null)
                                                    {
                                                        companyInfo.DanhMucThiTruongName = workSheet.Cells[i, 22].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucThiTruong danhMucThiTruong = listDanhMucThiTruong.Where(item => item.Code.Contains(companyInfo.DanhMucThiTruongName)).FirstOrDefault();
                                                            if (danhMucThiTruong == null)
                                                            {
                                                                danhMucThiTruong = new DanhMucThiTruong();
                                                                danhMucThiTruong.Code = companyInfo.DanhMucThiTruongName;
                                                                await _DanhMucThiTruongService.SaveAsync(danhMucThiTruong);
                                                                if (danhMucThiTruong.ID > 0)
                                                                {
                                                                    listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucThiTruongID = danhMucThiTruong.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 23].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.DienTich = decimal.Parse(workSheet.Cells[i, 23].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 24].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.SoLuongLaoDong = int.Parse(workSheet.Cells[i, 24].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 25].Value != null)
                                                    {
                                                        companyInfo.DanhMucChuongTrinhQuanLyChatLuongName = workSheet.Cells[i, 25].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucChuongTrinhQuanLyChatLuong danhMucChuongTrinhQuanLyChatLuong = listDanhMucChuongTrinhQuanLyChatLuong.Where(item => item.Code.Contains(companyInfo.DanhMucChuongTrinhQuanLyChatLuongName)).FirstOrDefault();
                                                            if (danhMucChuongTrinhQuanLyChatLuong == null)
                                                            {
                                                                danhMucChuongTrinhQuanLyChatLuong = new DanhMucChuongTrinhQuanLyChatLuong();
                                                                danhMucChuongTrinhQuanLyChatLuong.Code = companyInfo.DanhMucChuongTrinhQuanLyChatLuongName;
                                                                await _DanhMucChuongTrinhQuanLyChatLuongService.SaveAsync(danhMucChuongTrinhQuanLyChatLuong);
                                                                if (danhMucChuongTrinhQuanLyChatLuong.ID > 0)
                                                                {
                                                                    listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucChuongTrinhQuanLyChatLuongID = danhMucChuongTrinhQuanLyChatLuong.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 37].Value != null)
                                                    {
                                                        companyInfo.Note = workSheet.Cells[i, 37].Value.ToString().Trim();
                                                    }


                                                    if (workSheet.Cells[i, 38].Value != null)
                                                    {
                                                        companyInfo.Description = workSheet.Cells[i, 38].Value.ToString().Trim();
                                                    }

                                                    companyInfo.ParentID = baseParameter.ParentID;
                                                    companyInfo.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;

                                                    await _CompanyInfoService.SaveAsync(companyInfo);

                                                    if (companyInfo.ID > 0)
                                                    {
                                                        int column = 26;
                                                        await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 1, 2013, i, column, column + 1, column + 2, column + 3);
                                                        column = column + 4;
                                                        await CompanyInfoLichSuKiemTraSetGiaTri(workSheet, companyInfo, listDanhMucDangKyCapGiay, listDanhMucXepLoai, 2, 2013, i, column, column + 1, column + 2, column + 3);
                                                    }
                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }

        [HttpPost]
        [Route("PostCompanyInfoByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostCompanyInfoByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "CompanyInfo2024_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            List<CompanyScope> listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                            List<DanhMucChuongTrinhQuanLyChatLuong> listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                            List<DanhMucCompanyTinhTrang> listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                            List<CompanyGroup> listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                            List<CompanyFields> listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                            List<ProductGroup> listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                            List<ProvinceData> listProvinceData = await _ProvinceDataService.GetAllToListAsync();
                                            List<DistrictData> listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                            List<WardData> listWardData = await _WardDataService.GetAllToListAsync();
                                            List<DanhMucThiTruong> listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                            List<DanhMucDangKyCapGiay> listDanhMucDangKyCapGiay = await _DanhMucDangKyCapGiayService.GetAllToListAsync();
                                            List<DanhMucXepLoai> listDanhMucXepLoai = await _DanhMucXepLoaiService.GetAllToListAsync();

                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 4; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    CompanyInfo companyInfo = new CompanyInfo();
                                                    if (workSheet.Cells[i, 3].Value != null)
                                                    {
                                                        companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                    }
                                                    companyInfo = await _CompanyInfoService.GetByDKKDAsync(companyInfo.DKKD);

                                                    if (companyInfo.ID == 0)
                                                    {
                                                        if (workSheet.Cells[i, 9].Value != null)
                                                        {
                                                            companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                        }
                                                        companyInfo = await _CompanyInfoService.GetByNameAsync(companyInfo.Name);
                                                    }

                                                    if (workSheet.Cells[i, 2].Value != null)
                                                    {
                                                        companyInfo.CompanyScopeName = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyScope companyScope = listCompanyScope.Where(item => item.Code.Contains(companyInfo.CompanyScopeName)).FirstOrDefault();
                                                            if (companyScope == null)
                                                            {
                                                                companyScope = new CompanyScope();
                                                                companyScope.Code = companyInfo.CompanyScopeName;
                                                                await _CompanyScopeService.SaveAsync(companyScope);
                                                                if (companyScope.ID > 0)
                                                                {
                                                                    listCompanyScope = await _CompanyScopeService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyScopeID = companyScope.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 3].Value != null)
                                                    {
                                                        companyInfo.DKKD = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 4].Value != null)
                                                    {
                                                        string ngayCap = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = int.Parse(ngayCap.Split('/')[2]);
                                                            int thang = int.Parse(ngayCap.Split('/')[0]);
                                                            int ngay = int.Parse(ngayCap.Split('/')[1]);
                                                            companyInfo.DKKDNgayCap = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 5].Value != null)
                                                    {
                                                        companyInfo.DKKDSoCap = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 6].Value != null)
                                                    {
                                                        companyInfo.CompanyGroupName = workSheet.Cells[i, 6].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyGroup companyGroup = listCompanyGroup.Where(item => item.Code.Contains(companyInfo.CompanyGroupName)).FirstOrDefault();
                                                            if (companyGroup == null)
                                                            {
                                                                companyGroup = new CompanyGroup();
                                                                companyGroup.Code = companyInfo.CompanyGroupName;
                                                                await _CompanyGroupService.SaveAsync(companyGroup);
                                                                if (companyGroup.ID > 0)
                                                                {
                                                                    listCompanyGroup = await _CompanyGroupService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyGroupID = companyGroup.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 7].Value != null)
                                                    {
                                                        companyInfo.DanhMucCompanyTinhTrangName = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucCompanyTinhTrang danhMucCompanyTinhTrang = listDanhMucCompanyTinhTrang.Where(item => item.Code.Contains(companyInfo.DanhMucCompanyTinhTrangName)).FirstOrDefault();
                                                            if (danhMucCompanyTinhTrang == null)
                                                            {
                                                                danhMucCompanyTinhTrang = new DanhMucCompanyTinhTrang();
                                                                danhMucCompanyTinhTrang.Code = companyInfo.DanhMucCompanyTinhTrangName;
                                                                await _DanhMucCompanyTinhTrangService.SaveAsync(danhMucCompanyTinhTrang);
                                                                if (danhMucCompanyTinhTrang.ID > 0)
                                                                {
                                                                    listDanhMucCompanyTinhTrang = await _DanhMucCompanyTinhTrangService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucCompanyTinhTrangID = danhMucCompanyTinhTrang.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 8].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.MS = int.Parse(workSheet.Cells[i, 8].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 9].Value != null)
                                                    {
                                                        companyInfo.Name = workSheet.Cells[i, 9].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 10].Value != null)
                                                    {
                                                        companyInfo.fullname = workSheet.Cells[i, 10].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 11].Value != null)
                                                    {
                                                        companyInfo.CompanyFieldName = workSheet.Cells[i, 11].Value.ToString().Trim();
                                                        try
                                                        {
                                                            CompanyFields companyFields = listCompanyFields.Where(item => item.Code.Contains(companyInfo.CompanyFieldName)).FirstOrDefault();
                                                            if (companyFields == null)
                                                            {
                                                                companyFields = new CompanyFields();
                                                                companyFields.Code = companyInfo.CompanyFieldName;
                                                                await _CompanyFieldsService.SaveAsync(companyFields);
                                                                if (companyFields.ID > 0)
                                                                {
                                                                    listCompanyFields = await _CompanyFieldsService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.CompanyFieldID = companyFields.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 12].Value != null)
                                                    {
                                                        companyInfo.ProductGroupName = workSheet.Cells[i, 12].Value.ToString().Trim();
                                                        try
                                                        {
                                                            ProductGroup productGroup = listProductGroup.Where(item => item.Name.Contains(companyInfo.ProductGroupName)).FirstOrDefault();
                                                            if (productGroup == null)
                                                            {
                                                                productGroup = new ProductGroup();
                                                                productGroup.Name = companyInfo.ProductGroupName;
                                                                await _ProductGroupService.SaveAsync(productGroup);
                                                                if (productGroup.ID > 0)
                                                                {
                                                                    listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.ProductGroupID = productGroup.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                        if (!string.IsNullOrEmpty(companyInfo.ProductGroupName))
                                                        {
                                                            foreach (string productGroupName in companyInfo.ProductGroupName.Split(','))
                                                            {
                                                                if (!string.IsNullOrEmpty(productGroupName))
                                                                {
                                                                    try
                                                                    {
                                                                        ProductGroup productGroup = listProductGroup.Where(item => item.Code.Contains(productGroupName)).FirstOrDefault();
                                                                        if (productGroup == null)
                                                                        {
                                                                            productGroup = new ProductGroup();
                                                                            productGroup.Code = productGroupName;
                                                                            await _ProductGroupService.SaveAsync(productGroup);
                                                                            if (productGroup.ID > 0)
                                                                            {
                                                                                listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                                                            }
                                                                        }
                                                                        CompanyInfoProductGroups companyInfoProductGroups = await _CompanyInfoProductGroupsService.GetByParentID_ProductGroupIDAsync(companyInfo.ID, productGroup.ID);
                                                                        companyInfoProductGroups.ParentID = companyInfo.ID;
                                                                        companyInfoProductGroups.ProductGroupID = productGroup.ID;
                                                                        companyInfoProductGroups.ProductGroupName = productGroup.Name;
                                                                        await _CompanyInfoProductGroupsService.SaveAsync(companyInfoProductGroups);
                                                                    }
                                                                    catch (Exception ex)
                                                                    {
                                                                        string message = ex.Message;
                                                                    }
                                                                }
                                                            }
                                                        }


                                                    }

                                                    if (workSheet.Cells[i, 13].Value != null)
                                                    {
                                                        companyInfo.phone = workSheet.Cells[i, 13].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 14].Value != null)
                                                    {
                                                        companyInfo.address = workSheet.Cells[i, 14].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 15].Value != null)
                                                    {
                                                        string ngayDangKy = workSheet.Cells[i, 15].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = GlobalHelper.InitializationDateTime.Year;
                                                            int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                            int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                            companyInfo.NgayDangKy = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 16].Value != null)
                                                    {
                                                        string ngayDangKy = workSheet.Cells[i, 16].Value.ToString().Trim();
                                                        try
                                                        {
                                                            int nam = GlobalHelper.InitializationDateTime.Year;
                                                            int thang = int.Parse(ngayDangKy.Split('.')[1]);
                                                            int ngay = int.Parse(ngayDangKy.Split('.')[0]);
                                                            companyInfo.NgayHetHan = new DateTime(nam, thang, ngay);
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 17].Value != null)
                                                    {
                                                        companyInfo.DistrictDataName = workSheet.Cells[i, 17].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DistrictData districtData = listDistrictData.Where(item => item.Name.Contains(companyInfo.DistrictDataName) && item.ParentID == GlobalHelper.ProvinceDataIDBenTre).FirstOrDefault();
                                                            if (districtData == null)
                                                            {
                                                                districtData = new DistrictData();
                                                                districtData.Name = companyInfo.CompanyScopeName;
                                                                await _DistrictDataService.SaveAsync(districtData);
                                                                if (districtData.ID > 0)
                                                                {
                                                                    listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DistrictDataID = districtData.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 18].Value != null)
                                                    {
                                                        companyInfo.WardDataName = workSheet.Cells[i, 18].Value.ToString().Trim();
                                                        try
                                                        {
                                                            WardData wardData = listWardData.Where(item => item.Name.Contains(companyInfo.WardDataName) && item.ParentID == companyInfo.DistrictDataID).FirstOrDefault();
                                                            if (wardData == null)
                                                            {
                                                                wardData = new WardData();
                                                                wardData.Name = companyInfo.WardDataName;
                                                                await _WardDataService.SaveAsync(wardData);
                                                                if (wardData.ID > 0)
                                                                {
                                                                    listWardData = await _WardDataService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.WardDataID = wardData.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 19].Value != null)
                                                    {
                                                        companyInfo.hamlet = workSheet.Cells[i, 19].Value.ToString().Trim();
                                                    }

                                                    if (workSheet.Cells[i, 20].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.CongSuatThietKe = decimal.Parse(workSheet.Cells[i, 20].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 21].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.SanLuong = decimal.Parse(workSheet.Cells[i, 21].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 22].Value != null)
                                                    {
                                                        companyInfo.DanhMucThiTruongName = workSheet.Cells[i, 22].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucThiTruong danhMucThiTruong = listDanhMucThiTruong.Where(item => item.Code.Contains(companyInfo.DanhMucThiTruongName)).FirstOrDefault();
                                                            if (danhMucThiTruong == null)
                                                            {
                                                                danhMucThiTruong = new DanhMucThiTruong();
                                                                danhMucThiTruong.Code = companyInfo.DanhMucThiTruongName;
                                                                await _DanhMucThiTruongService.SaveAsync(danhMucThiTruong);
                                                                if (danhMucThiTruong.ID > 0)
                                                                {
                                                                    listDanhMucThiTruong = await _DanhMucThiTruongService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucThiTruongID = danhMucThiTruong.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 23].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.DienTich = decimal.Parse(workSheet.Cells[i, 23].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 24].Value != null)
                                                    {
                                                        try
                                                        {
                                                            companyInfo.SoLuongLaoDong = int.Parse(workSheet.Cells[i, 24].Value.ToString().Trim());
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 25].Value != null)
                                                    {
                                                        companyInfo.DanhMucChuongTrinhQuanLyChatLuongName = workSheet.Cells[i, 25].Value.ToString().Trim();
                                                        try
                                                        {
                                                            DanhMucChuongTrinhQuanLyChatLuong danhMucChuongTrinhQuanLyChatLuong = listDanhMucChuongTrinhQuanLyChatLuong.Where(item => item.Code.Contains(companyInfo.DanhMucChuongTrinhQuanLyChatLuongName)).FirstOrDefault();
                                                            if (danhMucChuongTrinhQuanLyChatLuong == null)
                                                            {
                                                                danhMucChuongTrinhQuanLyChatLuong = new DanhMucChuongTrinhQuanLyChatLuong();
                                                                danhMucChuongTrinhQuanLyChatLuong.Code = companyInfo.DanhMucChuongTrinhQuanLyChatLuongName;
                                                                await _DanhMucChuongTrinhQuanLyChatLuongService.SaveAsync(danhMucChuongTrinhQuanLyChatLuong);
                                                                if (danhMucChuongTrinhQuanLyChatLuong.ID > 0)
                                                                {
                                                                    listDanhMucChuongTrinhQuanLyChatLuong = await _DanhMucChuongTrinhQuanLyChatLuongService.GetAllToListAsync();
                                                                }
                                                            }
                                                            companyInfo.DanhMucChuongTrinhQuanLyChatLuongID = danhMucChuongTrinhQuanLyChatLuong.ID;
                                                        }
                                                        catch (Exception ex)
                                                        {
                                                            string message = ex.Message;
                                                        }
                                                    }

                                                    if (workSheet.Cells[i, 37].Value != null)
                                                    {
                                                        companyInfo.Note = workSheet.Cells[i, 37].Value.ToString().Trim();
                                                    }


                                                    if (workSheet.Cells[i, 38].Value != null)
                                                    {
                                                        companyInfo.Description = workSheet.Cells[i, 38].Value.ToString().Trim();
                                                    }

                                                    companyInfo.ParentID = baseParameter.ParentID;
                                                    companyInfo.ProvinceDataID = GlobalHelper.ProvinceDataIDBenTre;
                                                    await _CompanyInfoService.SaveAsync(companyInfo);


                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }

        private async Task<int> CompanyInfoLichSuKiemTraSetGiaTri(ExcelWorksheet workSheet, CompanyInfo companyInfo, List<DanhMucDangKyCapGiay> listDanhMucDangKyCapGiay, List<DanhMucXepLoai> listDanhMucXepLoai, int soLan, int nam, int i, int columnDanhMucDangKyCapGiay, int columnNgay, int columnThang, int columnDanhMucXepLoai)
        {

            try
            {
                CompanyInfoLichSuKiemTra companyInfoLichSuKiemTra = new CompanyInfoLichSuKiemTra();
                if (workSheet.Cells[i, columnDanhMucDangKyCapGiay].Value != null)
                {
                    companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName = workSheet.Cells[i, columnDanhMucDangKyCapGiay].Value.ToString().Trim();
                    if (!string.IsNullOrEmpty(companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName))
                    {
                        if (workSheet.Cells[i, columnNgay].Value != null)
                        {
                            try
                            {
                                companyInfoLichSuKiemTra.Ngay = int.Parse(workSheet.Cells[i, columnNgay].Value.ToString().Trim());
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        if (workSheet.Cells[i, columnThang].Value != null)
                        {
                            try
                            {
                                companyInfoLichSuKiemTra.Thang = int.Parse(workSheet.Cells[i, columnThang].Value.ToString().Trim());
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        companyInfoLichSuKiemTra.Nam = nam;
                        if (companyInfoLichSuKiemTra.Ngay == null)
                        {
                            companyInfoLichSuKiemTra.Ngay = 1;
                        }
                        if (companyInfoLichSuKiemTra.Thang == null)
                        {
                            companyInfoLichSuKiemTra.Thang = 1;
                        }

                        companyInfoLichSuKiemTra = await _CompanyInfoLichSuKiemTraService.GetByParentID_Nam_Thang_NgayAsync(companyInfoLichSuKiemTra.ParentID.Value, companyInfoLichSuKiemTra.Nam.Value, companyInfoLichSuKiemTra.Thang.Value, companyInfoLichSuKiemTra.Ngay.Value);

                        if (workSheet.Cells[i, columnDanhMucDangKyCapGiay].Value != null)
                        {
                            companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName = workSheet.Cells[i, columnDanhMucDangKyCapGiay].Value.ToString().Trim();
                            if (companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName == "CG")
                            {
                                companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName = "CG1";
                            }
                            try
                            {
                                DanhMucDangKyCapGiay danhMucDangKyCapGiay = listDanhMucDangKyCapGiay.Where(item => item.Code.Contains(companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName)).FirstOrDefault();
                                if (danhMucDangKyCapGiay == null)
                                {
                                    danhMucDangKyCapGiay = new DanhMucDangKyCapGiay();
                                    danhMucDangKyCapGiay.Code = companyInfoLichSuKiemTra.DanhMucDangKyCapGiayName;
                                    await _DanhMucDangKyCapGiayService.SaveAsync(danhMucDangKyCapGiay);
                                    if (danhMucDangKyCapGiay.ID > 0)
                                    {
                                        listDanhMucDangKyCapGiay = await _DanhMucDangKyCapGiayService.GetAllToListAsync();
                                    }
                                }
                                companyInfoLichSuKiemTra.DanhMucDangKyCapGiayID = danhMucDangKyCapGiay.ID;
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        if (workSheet.Cells[i, columnNgay].Value != null)
                        {
                            try
                            {
                                companyInfoLichSuKiemTra.Ngay = int.Parse(workSheet.Cells[i, columnNgay].Value.ToString().Trim());
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        if (workSheet.Cells[i, columnThang].Value != null)
                        {
                            try
                            {
                                companyInfoLichSuKiemTra.Thang = int.Parse(workSheet.Cells[i, columnThang].Value.ToString().Trim());
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        if (workSheet.Cells[i, columnDanhMucXepLoai].Value != null)
                        {
                            companyInfoLichSuKiemTra.DanhMucXepLoaiName = workSheet.Cells[i, columnDanhMucXepLoai].Value.ToString().Trim();
                            try
                            {
                                DanhMucXepLoai danhMucXepLoai = listDanhMucXepLoai.Where(item => item.Code.Contains(companyInfoLichSuKiemTra.DanhMucXepLoaiName)).FirstOrDefault();
                                if (danhMucXepLoai == null)
                                {
                                    danhMucXepLoai = new DanhMucXepLoai();
                                    danhMucXepLoai.Code = companyInfoLichSuKiemTra.DanhMucXepLoaiName;
                                    await _DanhMucXepLoaiService.SaveAsync(danhMucXepLoai);
                                    if (danhMucXepLoai.ID > 0)
                                    {
                                        listDanhMucXepLoai = await _DanhMucXepLoaiService.GetAllToListAsync();
                                    }
                                }
                                companyInfoLichSuKiemTra.DanhMucXepLoaiID = danhMucXepLoai.ID;
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }

                        companyInfoLichSuKiemTra.SoLan = soLan;
                        companyInfoLichSuKiemTra.Nam = nam;
                        companyInfoLichSuKiemTra.ParentID = companyInfo.ID;
                        companyInfoLichSuKiemTra.Name = companyInfo.Name;
                        if (string.IsNullOrEmpty(companyInfoLichSuKiemTra.Name))
                        {
                            companyInfoLichSuKiemTra.Name = companyInfo.fullname;
                        }
                        await _CompanyInfoLichSuKiemTraService.SaveAsync(companyInfoLichSuKiemTra);
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            return 1;
        }

        [HttpPost]
        [Route("PostCamKet17ByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostCamKet17ByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "CamKet17_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            List<ProductGroup> listProductGroup = await _ProductGroupService.GetAllToListAsync();
                                            List<DistrictData> listDistrictData = await _DistrictDataService.GetAllToListAsync();
                                            List<WardData> listWardData = await _WardDataService.GetAllToListAsync();
                                            List<PlanThamDinh> listPlanThamDinh = await _PlanThamDinhService.GetByParentIDAndActiveToListAsync(GlobalHelper.PlanTypeIDCamKet17, true);

                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 3; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    CompanyInfo companyInfo = new CompanyInfo();
                                                    if (workSheet.Cells[i, 4].Value != null)
                                                    {
                                                        companyInfo.Code = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                    }
                                                    if (string.IsNullOrEmpty(companyInfo.Code))
                                                    {
                                                        if (workSheet.Cells[i, 2].Value != null)
                                                        {
                                                            companyInfo.Code = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                        }
                                                    }
                                                    companyInfo = await _CompanyInfoService.GetByCodeAsync(companyInfo.Code);
                                                    if (companyInfo == null)
                                                    {
                                                        companyInfo = new CompanyInfo();
                                                    }
                                                    if (workSheet.Cells[i, 2].Value != null)
                                                    {
                                                        companyInfo.Name = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 2].Value != null)
                                                    {
                                                        companyInfo.fullname = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 3].Value != null)
                                                    {
                                                        companyInfo.address = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 4].Value != null)
                                                    {
                                                        companyInfo.Code = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 4].Value != null)
                                                    {
                                                        companyInfo.phone = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 5].Value != null)
                                                    {
                                                        companyInfo.Description = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                    }
                                                    if (workSheet.Cells[i, 10].Value != null)
                                                    {
                                                        companyInfo.DistrictDataName = workSheet.Cells[i, 10].Value.ToString().Trim();
                                                        if (!string.IsNullOrEmpty(companyInfo.DistrictDataName))
                                                        {
                                                            DistrictData districtData = listDistrictData.Where(item => item.Name.ToLower().Contains(companyInfo.DistrictDataName.ToLower())).FirstOrDefault();
                                                            if (districtData != null)
                                                            {
                                                                companyInfo.DistrictDataID = districtData.ID;
                                                            }
                                                        }
                                                    }
                                                    if (workSheet.Cells[i, 11].Value != null)
                                                    {
                                                        companyInfo.WardDataName = workSheet.Cells[i, 11].Value.ToString().Trim();
                                                    }
                                                    if (string.IsNullOrEmpty(companyInfo.WardDataName))
                                                    {
                                                        if (!string.IsNullOrEmpty(companyInfo.address))
                                                        {
                                                            string address = companyInfo.address;
                                                            address = address.Replace(@"-", @" ");
                                                            for (int j = address.Split(' ').Length - 2; j < address.Split(' ').Length; j++)
                                                            {
                                                                string item = address.Split(' ')[j];
                                                                companyInfo.WardDataName = companyInfo.WardDataName + " " + item;
                                                            }
                                                        }
                                                    }
                                                    companyInfo.WardDataName = companyInfo.WardDataName.Trim();
                                                    companyInfo.WardDataName = companyInfo.WardDataName.Replace(@"-", @" ");
                                                    WardData wardData = listWardData.Where(item => item.ParentID == companyInfo.DistrictDataID && item.Name.Contains(companyInfo.WardDataName)).FirstOrDefault();
                                                    if (wardData == null)
                                                    {
                                                        wardData = new WardData();
                                                        wardData.ParentID = companyInfo.DistrictDataID;
                                                        wardData.Name = companyInfo.WardDataName;
                                                        await _WardDataService.SaveAsync(wardData);
                                                        if (wardData.ID > 0)
                                                        {
                                                            listWardData = await _WardDataService.GetAllToListAsync();
                                                        }
                                                    }
                                                    if (wardData != null)
                                                    {
                                                        companyInfo.WardDataID = wardData.ID;
                                                    }
                                                    companyInfo.ParentID = 1;
                                                    if (companyInfo.ID == 0)
                                                    {
                                                        await _CompanyInfoService.SaveAsync(companyInfo);
                                                    }
                                                    if (companyInfo.ID > 0)
                                                    {
                                                        PlanThamDinhCompanies planThamDinhCompaniesExist = await _PlanThamDinhCompaniesService.GetSQLByByPlanThamDinhParentID_CompanyInfoIDAsync(GlobalHelper.PlanTypeIDCamKet17, companyInfo.ID);
                                                        if (planThamDinhCompaniesExist.ID == 0)
                                                        {
                                                            PlanThamDinh planThamDinh = new PlanThamDinh();
                                                            planThamDinh.ParentID = GlobalHelper.PlanTypeIDCamKet17;
                                                            planThamDinh.NgayBatDau = new DateTime(2000, 1, 1);
                                                            planThamDinh.NgayKetThuc = new DateTime(2000, 1, 1);
                                                            if (workSheet.Cells[i, 6].Value != null)
                                                            {
                                                                string ngayBatDau = workSheet.Cells[i, 6].Value.ToString().Trim();
                                                                if (!string.IsNullOrEmpty(ngayBatDau))
                                                                {
                                                                    ngayBatDau = ngayBatDau.Replace(@"'", @"");
                                                                    ngayBatDau = ngayBatDau.Replace(@".", @"/");
                                                                    ngayBatDau = ngayBatDau.Replace(@"-", @"/");
                                                                    if (ngayBatDau.Split('/').Length == 2)
                                                                    {
                                                                        try
                                                                        {
                                                                            int month = int.Parse(ngayBatDau.Split('/')[0]);
                                                                            int year = int.Parse(ngayBatDau.Split('/')[1].Split(' ')[0]);
                                                                            planThamDinh.NgayBatDau = new DateTime(year, month, 1);
                                                                        }
                                                                        catch (Exception ex)
                                                                        {
                                                                            string mes = ex.Message;
                                                                        }
                                                                    }
                                                                    if (ngayBatDau.Split('/').Length == 3)
                                                                    {
                                                                        try
                                                                        {
                                                                            int month = int.Parse(ngayBatDau.Split('/')[0]);
                                                                            int day = int.Parse(ngayBatDau.Split('/')[1]);
                                                                            int year = int.Parse(ngayBatDau.Split('/')[2].Split(' ')[0]);
                                                                            planThamDinh.NgayBatDau = new DateTime(year, month, day);
                                                                        }
                                                                        catch (Exception ex)
                                                                        {
                                                                            string mes = ex.Message;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            if (workSheet.Cells[i, 7].Value != null)
                                                            {
                                                                string ngayKetThuc = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                                if (!string.IsNullOrEmpty(ngayKetThuc))
                                                                {
                                                                    ngayKetThuc = ngayKetThuc.Replace(@"'", @"");
                                                                    ngayKetThuc = ngayKetThuc.Replace(@".", @"/");
                                                                    ngayKetThuc = ngayKetThuc.Replace(@"-", @"/");
                                                                    if (ngayKetThuc.Split('/').Length == 2)
                                                                    {
                                                                        try
                                                                        {
                                                                            int month = int.Parse(ngayKetThuc.Split('/')[0]);
                                                                            int year = int.Parse(ngayKetThuc.Split('/')[1].Split(' ')[0]);
                                                                            planThamDinh.NgayKetThuc = new DateTime(year, month, 1);
                                                                        }
                                                                        catch (Exception ex)
                                                                        {
                                                                            string mes = ex.Message;
                                                                        }
                                                                    }
                                                                    if (ngayKetThuc.Split('/').Length == 3)
                                                                    {
                                                                        try
                                                                        {
                                                                            int day = int.Parse(ngayKetThuc.Split('/')[0]);
                                                                            int month = int.Parse(ngayKetThuc.Split('/')[1]);
                                                                            int year = int.Parse(ngayKetThuc.Split('/')[2].Split(' ')[0]);
                                                                            planThamDinh.NgayKetThuc = new DateTime(year, month, day);
                                                                        }
                                                                        catch (Exception ex)
                                                                        {
                                                                            string mes = ex.Message;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            await _PlanThamDinhService.SaveAsync(planThamDinh);
                                                            if (planThamDinh.ID > 0)
                                                            {
                                                                PlanThamDinhCompanies planThamDinhCompanies = new PlanThamDinhCompanies();
                                                                planThamDinhCompanies.ParentID = planThamDinh.ID;
                                                                planThamDinhCompanies.NgayGhiNhan = planThamDinh.NgayBatDau;
                                                                planThamDinhCompanies.NgayHetHan = planThamDinh.NgayKetThuc;
                                                                planThamDinhCompanies.CompanyInfoID = companyInfo.ID;
                                                                planThamDinhCompanies.DanhMucATTPXepLoaiID = GlobalHelper.DanhMucATTPXepLoaiIDKhongDat;

                                                                if (workSheet.Cells[i, 5].Value != null)
                                                                {
                                                                    planThamDinhCompanies.HTMLContent = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                                }
                                                                if (workSheet.Cells[i, 8].Value != null)
                                                                {
                                                                    string ketQua = workSheet.Cells[i, 8].Value.ToString().Trim();
                                                                    if (!string.IsNullOrEmpty(ketQua))
                                                                    {
                                                                        planThamDinhCompanies.DanhMucATTPXepLoaiID = GlobalHelper.DanhMucATTPXepLoaiIDDat;
                                                                    }
                                                                }
                                                                await _PlanThamDinhCompaniesService.SaveAsync(planThamDinhCompanies);
                                                            }
                                                        }
                                                    }
                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }

        [HttpPost]
        [Route("PostCamKet17001ByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostCamKet17001ByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            DataTable table = new DataTable();
            table.Columns.Add("RowNumber");
            table.Columns.Add("DonViToChuc");
            table.Columns.Add("DiaChi");
            table.Columns.Add("DienThoai");
            table.Columns.Add("MatHang");
            table.Columns.Add("NgayKy");
            table.Columns.Add("NgayKiemTra");
            table.Columns.Add("Dat");
            table.Columns.Add("KhongDat");
            table.Columns.Add("QuanHuyen");
            table.Columns.Add("PhuongXa");


            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "CamKet17_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 3; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    DataRow row = table.Rows.Add();
                                                    row[0] = i - 2;
                                                    for (int j = 2; j < 12; j++)
                                                    {
                                                        if (workSheet.Cells[i, j].Value != null)
                                                        {
                                                            if ((j == 6) || (j == 7))
                                                            {
                                                                try
                                                                {
                                                                    string ngayThang = workSheet.Cells[i, j].Value.ToString().Trim();
                                                                    int year = 2000;
                                                                    int month = 1;
                                                                    int day = 1;
                                                                    if (!string.IsNullOrEmpty(ngayThang))
                                                                    {
                                                                        ngayThang = ngayThang.Replace(@"'", @"");
                                                                        ngayThang = ngayThang.Replace(@".", @"/");
                                                                        ngayThang = ngayThang.Replace(@"-", @"/");

                                                                        if (ngayThang.Split('/').Length == 2)
                                                                        {
                                                                            try
                                                                            {
                                                                                month = int.Parse(ngayThang.Split('/')[0]);
                                                                                year = int.Parse(ngayThang.Split('/')[1].Split(' ')[0]);
                                                                            }
                                                                            catch (Exception ex)
                                                                            {
                                                                                string mes = ex.Message;
                                                                                year = 2000;
                                                                                month = 1;
                                                                                day = 1;
                                                                            }
                                                                        }
                                                                        if (ngayThang.Split('/').Length == 3)
                                                                        {
                                                                            try
                                                                            {
                                                                                day = int.Parse(ngayThang.Split('/')[0]);
                                                                                month = int.Parse(ngayThang.Split('/')[1]);
                                                                                year = int.Parse(ngayThang.Split('/')[2].Split(' ')[0]);
                                                                            }
                                                                            catch (Exception ex)
                                                                            {
                                                                                string mes = ex.Message;
                                                                                year = 2000;
                                                                                month = 1;
                                                                                day = 1;
                                                                            }
                                                                        }
                                                                    }
                                                                    if (day > 31)
                                                                    {
                                                                        day = 1;
                                                                    }
                                                                    if (year > 2024)
                                                                    {
                                                                        year = 2000;
                                                                    }
                                                                    if (month > 12)
                                                                    {
                                                                        int day1 = day;
                                                                        day = month;
                                                                        month = day1;
                                                                    }
                                                                    row[j - 1] = year + "-" + month + "-" + day;
                                                                }
                                                                catch (Exception ex)
                                                                {
                                                                }
                                                            }
                                                            else
                                                            {
                                                                row[j - 1] = workSheet.Cells[i, j].Value.ToString().Trim();
                                                            }
                                                        }
                                                        else
                                                        {
                                                            if ((j == 6) || (j == 7))
                                                            {
                                                                int year = 2000;
                                                                int month = 1;
                                                                int day = 1;
                                                                row[j - 1] = year + "-" + month + "-" + day;
                                                            }
                                                        }
                                                    }
                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                            await _PlanThamDinhCompaniesService.InsertItemsByDataTableAsync(table);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }
        [HttpPost]
        [Route("PostGiamSatDuLuongByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostGiamSatDuLuongByExcelFileAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        string fileName = "GiamSatDuLuong_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }
                        try
                        {
                            FileInfo fileLocation = new FileInfo(physicalPath);
                            if (fileLocation.Length > 0)
                            {
                                if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                                {
                                    using (ExcelPackage package = new ExcelPackage(fileLocation))
                                    {
                                        if (package.Workbook.Worksheets.Count > 0)
                                        {
                                            ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                            if (workSheet != null)
                                            {
                                                int totalRows = workSheet.Dimension.Rows;
                                                ProvinceData provinceData = await _ProvinceDataService.GetByIDAsync(GlobalHelper.ProvinceDataIDBenTre);

                                                List<DistrictData> listDistrictData = await _DistrictDataService.GetByParentIDToListAsync(provinceData.ID);
                                                int rowData = 6;
                                                for (int i = 6; i <= totalRows; i++)
                                                {
                                                    try
                                                    {
                                                        if (workSheet.Cells[i, 7].Value != null)
                                                        {
                                                            string mes = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                            if (mes != "0")
                                                            {
                                                                if (workSheet.Cells[i, 1].Value != null)
                                                                {
                                                                    provinceData.Note = workSheet.Cells[i, 1].Value.ToString().Trim();
                                                                    if (provinceData.Name.ToLower().Contains(provinceData.Note.ToLower()))
                                                                    {
                                                                        rowData = i;
                                                                    }
                                                                }
                                                                if (workSheet.Cells[rowData, 2].Value != null)
                                                                {
                                                                    DistrictData districtData = new DistrictData();
                                                                    districtData.Name = workSheet.Cells[rowData, 2].Value.ToString().Trim();
                                                                    districtData = listDistrictData.Where(item => item.Name.ToLower().Contains(districtData.Name.ToLower())).FirstOrDefault();
                                                                    if (districtData != null)
                                                                    {
                                                                        if (districtData.ID > 0)
                                                                        {
                                                                            if (workSheet.Cells[rowData, 4].Value != null)
                                                                            {
                                                                                DanhMucLayMau danhMucLayMau = new DanhMucLayMau();
                                                                                danhMucLayMau.Name = workSheet.Cells[rowData, 4].Value.ToString().Trim();
                                                                                if (workSheet.Cells[i, 7].Value != null)
                                                                                {
                                                                                    danhMucLayMau.Note = workSheet.Cells[i, 7].Value.ToString().Trim();
                                                                                    danhMucLayMau.Name = danhMucLayMau.Name + "-" + danhMucLayMau.Note;
                                                                                }
                                                                                DanhMucLayMau danhMucLayMauExist = await _DanhMucLayMauService.GetByNameAsync(danhMucLayMau.Name);
                                                                                if (danhMucLayMauExist.ID > 0)
                                                                                {
                                                                                    danhMucLayMau = danhMucLayMauExist;
                                                                                }
                                                                                await _DanhMucLayMauService.SaveAsync(danhMucLayMau);

                                                                                PlanThamDinh planThamDinh = new PlanThamDinh();
                                                                                planThamDinh.ParentID = GlobalHelper.PlanTypeIDGiamSatDuLuong;
                                                                                planThamDinh.DanhMucThoiGianLayMauID = 1;
                                                                                planThamDinh.Nam = baseParameter.Nam;

                                                                                if (workSheet.Cells[i, 8].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 1;
                                                                                }
                                                                                if (workSheet.Cells[i, 9].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 2;
                                                                                }
                                                                                if (workSheet.Cells[i, 10].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 3;
                                                                                }
                                                                                if (workSheet.Cells[i, 11].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 4;
                                                                                }
                                                                                if (workSheet.Cells[i, 12].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 5;
                                                                                }
                                                                                if (workSheet.Cells[i, 13].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 6;
                                                                                }
                                                                                if (workSheet.Cells[i, 14].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 7;
                                                                                }
                                                                                if (workSheet.Cells[i, 15].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 8;
                                                                                }
                                                                                if (workSheet.Cells[i, 16].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 9;
                                                                                }
                                                                                if (workSheet.Cells[i, 17].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 10;
                                                                                }
                                                                                if (workSheet.Cells[i, 18].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 11;
                                                                                }
                                                                                if (workSheet.Cells[i, 19].Value != null)
                                                                                {
                                                                                    planThamDinh.Thang = 12;
                                                                                }
                                                                                if (planThamDinh.Thang > 0)
                                                                                {
                                                                                    planThamDinh.Name = "Giám sát dư lượng tháng " + planThamDinh.Thang + " năm " + planThamDinh.Nam;
                                                                                    PlanThamDinh planThamDinhExist = await _PlanThamDinhService.GetByCondition(item => item.Active == true && item.ParentID == planThamDinh.ParentID && item.DanhMucThoiGianLayMauID == planThamDinh.DanhMucThoiGianLayMauID && item.Nam == planThamDinh.Nam && item.Thang == planThamDinh.Thang).FirstOrDefaultAsync();
                                                                                    if (planThamDinhExist != null)
                                                                                    {
                                                                                        if (planThamDinhExist.ID > 0)
                                                                                        {
                                                                                            planThamDinh.ID = planThamDinhExist.ID;
                                                                                            planThamDinh.Code = planThamDinhExist.Code;
                                                                                        }
                                                                                    }
                                                                                    await _PlanThamDinhService.SaveAsync(planThamDinh);
                                                                                    if (planThamDinh.ID > 0)
                                                                                    {
                                                                                        for (int j = 22; j < 100; j++)
                                                                                        {
                                                                                            if (workSheet.Cells[i, j].Value != null)
                                                                                            {
                                                                                                if (workSheet.Cells[4, j].Value != null)
                                                                                                {
                                                                                                    PlanThamDinhDanhMucLayMau planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                                                                                    planThamDinhDanhMucLayMau.Code = planThamDinh.Code;
                                                                                                    planThamDinhDanhMucLayMau.ParentID = planThamDinh.ID;
                                                                                                    planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                                                                                    planThamDinhDanhMucLayMau.DanhMucLayMauID = danhMucLayMau.ID;

                                                                                                    DanhMucLayMauChiTieu danhMucLayMauChiTieu = new DanhMucLayMauChiTieu();
                                                                                                    danhMucLayMauChiTieu.Name = workSheet.Cells[4, j].Value.ToString().Trim();
                                                                                                    if (workSheet.Cells[3, j].Value != null)
                                                                                                    {
                                                                                                        danhMucLayMauChiTieu.Note = workSheet.Cells[3, j].Value.ToString().Trim();
                                                                                                    }
                                                                                                    DanhMucLayMauChiTieu danhMucLayMauChiTieuExist = await _DanhMucLayMauChiTieuService.GetByNameAsync(danhMucLayMauChiTieu.Name);
                                                                                                    if (danhMucLayMauChiTieuExist.ID > 0)
                                                                                                    {
                                                                                                        danhMucLayMauChiTieu = danhMucLayMauChiTieuExist;
                                                                                                    }
                                                                                                    await _DanhMucLayMauChiTieuService.SaveAsync(danhMucLayMauChiTieu);
                                                                                                    planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = danhMucLayMauChiTieu.ID;
                                                                                                    PlanThamDinhDanhMucLayMau planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                                                                                    if (planThamDinhDanhMucLayMauExist == null)
                                                                                                    {
                                                                                                        await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                    catch (Exception ex)
                                                    {
                                                        string message = ex.Message;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        catch (Exception e)
                        {
                            string mes = e.Message;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }

            return result;
        }
        [HttpPost]
        [Route("PostNhuyenThe02ManhVoByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostNhuyenThe02ManhVoByExcelFileAsync()
        {
            List<CompanyInfo> result = new List<CompanyInfo>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        string fileName = "NhuyenThe02ManhVo_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                        }
                        try
                        {
                            FileInfo fileLocation = new FileInfo(physicalPath);
                            if (fileLocation.Length > 0)
                            {
                                if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                                {
                                    using (ExcelPackage package = new ExcelPackage(fileLocation))
                                    {
                                        if (package.Workbook.Worksheets.Count > 0)
                                        {
                                            ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                            if (workSheet != null)
                                            {
                                                int totalRows = workSheet.Dimension.Rows;
                                                ProvinceData provinceData = await _ProvinceDataService.GetByIDAsync(GlobalHelper.ProvinceDataIDBenTre);

                                                List<DistrictData> listDistrictData = await _DistrictDataService.GetByParentIDToListAsync(provinceData.ID);
                                                for (int i = 4; i <= totalRows; i++)
                                                {
                                                    try
                                                    {
                                                        PlanThamDinh PlanThamDinh = new PlanThamDinh();
                                                        PlanThamDinh.Nam = baseParameter.Nam;
                                                        PlanThamDinh.ParentID = GlobalHelper.PlanTypeIDNhuyenThe02ManhVo;
                                                        PlanThamDinh.DanhMucThoiGianLayMauID = 3;
                                                        if (workSheet.Cells[i, 1].Value != null)
                                                        {
                                                            PlanThamDinh.Name = workSheet.Cells[i, 1].Value.ToString().Trim();
                                                        }
                                                        if (workSheet.Cells[i, 2].Value != null)
                                                        {
                                                            string ngayThang = workSheet.Cells[i, 2].Value.ToString().Trim();
                                                            try
                                                            {
                                                                string namString = ngayThang.Split('/')[2];
                                                                int nam = int.Parse(namString);
                                                                string thangString = ngayThang.Split('/')[1];
                                                                int thang = int.Parse(thangString);
                                                                string ngayString = ngayThang.Split('/')[0];
                                                                string ngay01String = ngayString.Split('-')[0];
                                                                string ngay02String = ngayString.Split('-')[1];
                                                                int ngay01 = int.Parse(ngay01String);
                                                                int ngay02 = int.Parse(ngay02String);
                                                                PlanThamDinh.NgayBatDau = new DateTime(nam, thang, ngay01, 0, 0, 0);
                                                                PlanThamDinh.NgayKetThuc = new DateTime(nam, thang, ngay02, 0, 0, 0);
                                                                PlanThamDinh.NgayGuiMau = PlanThamDinh.NgayKetThuc;
                                                                PlanThamDinh.Thang = PlanThamDinh.NgayBatDau.Value.Month;
                                                            }
                                                            catch (Exception ex)
                                                            {
                                                                string message = ex.Message;
                                                            }
                                                        }
                                                        if (workSheet.Cells[i, 3].Value != null)
                                                        {
                                                            string mes = workSheet.Cells[i, 3].Value.ToString().Trim();
                                                            string DistrictDataName = workSheet.Cells[3, 3].Value.ToString().Trim();
                                                            await NhuyenThe02ManhVoSyns(mes, PlanThamDinh, DistrictDataName, listDistrictData);
                                                        }
                                                        if (workSheet.Cells[i, 4].Value != null)
                                                        {
                                                            string mes = workSheet.Cells[i, 4].Value.ToString().Trim();
                                                            string DistrictDataName = workSheet.Cells[3, 4].Value.ToString().Trim();
                                                            await NhuyenThe02ManhVoSyns(mes, PlanThamDinh, DistrictDataName, listDistrictData);
                                                        }
                                                        if (workSheet.Cells[i, 5].Value != null)
                                                        {
                                                            string mes = workSheet.Cells[i, 5].Value.ToString().Trim();
                                                            string DistrictDataName = workSheet.Cells[3, 5].Value.ToString().Trim();
                                                            await NhuyenThe02ManhVoSyns(mes, PlanThamDinh, DistrictDataName, listDistrictData);
                                                        }
                                                    }
                                                    catch (Exception ex)
                                                    {
                                                        string message = ex.Message;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        catch (Exception e)
                        {
                            string mes = e.Message;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        private async Task<bool> NhuyenThe02ManhVoSyns(string mes, PlanThamDinh PlanThamDinh, string DistrictDataName, List<DistrictData> listDistrictData)
        {
            bool result = GlobalHelper.InitializationBool;
            if ((mes == "*") || (mes == "**") || (mes == "x") || (mes == "X"))
            {
                PlanThamDinh PlanThamDinhExist = await _PlanThamDinhService.GetByCondition(item => item.Active == true && item.ParentID == PlanThamDinh.ParentID && item.DanhMucThoiGianLayMauID == PlanThamDinh.DanhMucThoiGianLayMauID && item.Nam == PlanThamDinh.Nam && item.NgayBatDau == PlanThamDinh.NgayBatDau && item.NgayKetThuc == PlanThamDinh.NgayKetThuc).FirstOrDefaultAsync();
                if (PlanThamDinhExist != null)
                {
                    if (PlanThamDinhExist.ID > 0)
                    {
                        PlanThamDinh.ID = PlanThamDinhExist.ID;
                        PlanThamDinh.Code = PlanThamDinhExist.Code;
                    }
                }
                await _PlanThamDinhService.SaveAsync(PlanThamDinh);
                if (PlanThamDinh.ID > 0)
                {
                    DistrictData districtData = new DistrictData();
                    districtData.Name = DistrictDataName;
                    districtData = listDistrictData.Where(item => item.Name.ToLower().Contains(districtData.Name.ToLower())).FirstOrDefault();
                    if (districtData != null)
                    {
                        if (districtData.ID > 0)
                        {

                            PlanThamDinhDanhMucLayMau planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                            planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                            planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                            planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                            planThamDinhDanhMucLayMau.DanhMucLayMauID = 58;
                            planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1825;
                            PlanThamDinhDanhMucLayMau planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                            if (planThamDinhDanhMucLayMauExist == null)
                            {
                                await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                            }

                            planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                            planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                            planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                            planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                            planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                            planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1826;
                            planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                            if (planThamDinhDanhMucLayMauExist == null)
                            {
                                await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                            }

                            planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                            planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                            planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                            planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                            planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                            planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1827;
                            planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                            if (planThamDinhDanhMucLayMauExist == null)
                            {
                                await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                            }

                            planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                            planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                            planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                            planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                            planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                            planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1828;
                            planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                            if (planThamDinhDanhMucLayMauExist == null)
                            {
                                await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                            }

                            if (mes == "*")
                            {
                                planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                                planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                                planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                                planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1829;
                                planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                if (planThamDinhDanhMucLayMauExist == null)
                                {
                                    await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                }
                            }
                            if (mes == "**")
                            {
                                planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                                planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                                planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                                planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1829;
                                planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                if (planThamDinhDanhMucLayMauExist == null)
                                {
                                    await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                }

                                planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                                planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                                planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                                planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1830;
                                planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                if (planThamDinhDanhMucLayMauExist == null)
                                {
                                    await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                }

                                planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                                planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                                planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                                planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1831;
                                planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                if (planThamDinhDanhMucLayMauExist == null)
                                {
                                    await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                }

                                planThamDinhDanhMucLayMau = new PlanThamDinhDanhMucLayMau();
                                planThamDinhDanhMucLayMau.Code = PlanThamDinh.Code;
                                planThamDinhDanhMucLayMau.ParentID = PlanThamDinh.ID;
                                planThamDinhDanhMucLayMau.DistrictDataID = districtData.ID;
                                planThamDinhDanhMucLayMau.DanhMucLayMauID = 57;
                                planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID = 1832;
                                planThamDinhDanhMucLayMauExist = await _PlanThamDinhDanhMucLayMauService.GetByCondition(item => item.ParentID == planThamDinhDanhMucLayMau.ParentID && item.DistrictDataID == planThamDinhDanhMucLayMau.DistrictDataID && item.DanhMucLayMauID == planThamDinhDanhMucLayMau.DanhMucLayMauID && item.DanhMucLayMauChiTieuID == planThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID).FirstOrDefaultAsync();
                                if (planThamDinhDanhMucLayMauExist == null)
                                {
                                    await _PlanThamDinhDanhMucLayMauService.SaveAsync(planThamDinhDanhMucLayMau);
                                }
                            }
                        }
                    }
                }
            }
            return result;
        }
        [HttpPost]
        [Route("PostMaSoCoSoNuoiByExcelFileAsync")]
        public virtual async Task<List<CompanyInfo>> PostMaSoCoSoNuoiByExcelFileAsync()
        {
            BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
            List<CompanyInfo> result = new List<CompanyInfo>();
            DataTable table = new DataTable();
            table.Columns.Add("RowNumber");
            table.Columns.Add("DonViToChuc");
            table.Columns.Add("QuanHuyen");
            table.Columns.Add("PhuongXa");
            table.Columns.Add("DiaChi");
            table.Columns.Add("DienThoai");
            table.Columns.Add("DienTich");
            table.Columns.Add("CoSoNuoiDienTichNuoiTrong");
            table.Columns.Add("CoSoNuoiSoLuongAo");
            table.Columns.Add("HinhThucNuoiTrong");
            table.Columns.Add("VatNuoi");


            if (Request.Form.Files.Count > 0)
            {
                var file = Request.Form.Files[0];
                if (file == null || file.Length == 0)
                {
                }
                if (file != null)
                {
                    string fileExtension = Path.GetExtension(file.FileName);
                    string fileName = "MaSoCoSoNuoi_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                    var physicalPath = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Upload, fileName);
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    try
                    {
                        FileInfo fileLocation = new FileInfo(physicalPath);
                        if (fileLocation.Length > 0)
                        {
                            if ((fileExtension == ".xlsx") || (fileExtension == ".xls"))
                            {
                                using (ExcelPackage package = new ExcelPackage(fileLocation))
                                {
                                    if (package.Workbook.Worksheets.Count > 0)
                                    {
                                        ExcelWorksheet workSheet = package.Workbook.Worksheets[1];
                                        if (workSheet != null)
                                        {
                                            int totalRows = workSheet.Dimension.Rows;
                                            for (int i = 2; i <= totalRows; i++)
                                            {
                                                try
                                                {
                                                    DataRow row = table.Rows.Add();
                                                    row[0] = i - 1;
                                                    for (int j = 2; j < 12; j++)
                                                    {
                                                        if (workSheet.Cells[i, j].Value != null)
                                                        {
                                                            row[j - 1] = workSheet.Cells[i, j].Value.ToString().Trim();
                                                        }
                                                    }
                                                }
                                                catch (Exception ex)
                                                {
                                                    string message = ex.Message;
                                                }
                                            }
                                            await _PlanThamDinhService.InsertItemsByDataTableAsync(table, "sp_MaSoCoSoNuoiInsertItemsByMaSoCoSoNuoiExcel");
                                        }
                                    }
                                }
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        string mes = e.Message;
                    }
                }
            }
            return result;
        }
    }
}

