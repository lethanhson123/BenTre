

using Data.Model;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Information;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class DownloadController : BaseController<CompanyInfo, ICompanyInfoService>
    {
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly IWebHostEnvironment _WebHostEnvironment;


        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IReportService _ReportService;

        public DownloadController(ICompanyInfoService CompanyInfoService
            , IWebHostEnvironment WebHostEnvironment

            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService
            , IReportService ReportService

            ) : base(CompanyInfoService, WebHostEnvironment)
        {
            _CompanyInfoService = CompanyInfoService;
            _WebHostEnvironment = WebHostEnvironment;


            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _ReportService = ReportService;
        }

        [HttpPost]
        [Route("ExportGiamSatDuLuong001ToExcelAsync")]
        public async Task<JsonResult> ExportGiamSatDuLuong001ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<PlanThamDinhCompanies> list = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync(baseParameter.ParentID.Value, baseParameter.Nam.Value, baseParameter.Thang.Value, baseParameter.Active.Value);
                string fileName = @"GiamSatDuLuong_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelGiamSatDuLuongPlanThamDinhCompanies(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportAnToanThucPhamSauThuHoach001ToExcelAsync")]
        public async Task<JsonResult> ExportAnToanThucPhamSauThuHoach001ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<PlanThamDinhCompanies> list = await _PlanThamDinhCompaniesService.GetBySearchStringToListAsync(baseParameter.SearchString);
                string fileName = @"AnToanThucPhamSauThuHoach_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelAnToanThucPhamSauThuHoachPlanThamDinhCompanies(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportCamKet17001ToExcelAsync")]
        public async Task<JsonResult> ExportCamKet17001ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<PlanThamDinhCompanies> list = await _PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync(baseParameter.ParentID.Value, baseParameter.DistrictDataID.Value, baseParameter.WardDataID.Value, baseParameter.Active.Value);
                string fileName = @"CamKet17_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelCamKet17PlanThamDinhCompanies(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportCamKet17002PhuLucIIToExcelAsync")]
        public async Task<JsonResult> ExportCamKet17002PhuLucIIToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list0004_0005 = await _ReportService.Report0004_0005ToListAsync(baseParameter.ParentID.Value, baseParameter.DistrictDataID.Value, baseParameter.Nam.Value, baseParameter.Thang.Value, baseParameter.Active.Value);
                List<Report> list0006 = await _ReportService.Report0006ToListAsync(baseParameter.ParentID.Value, baseParameter.DistrictDataID.Value, baseParameter.Nam.Value, baseParameter.Thang.Value, baseParameter.Active.Value);
                string fileName = @"CamKet17_PhuLucII_" + baseParameter.Nam.Value + "_" + baseParameter.Thang.Value + "_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelCamKet17PhuLucII(list0004_0005, list0006, streamExport, baseParameter.DistrictDataID.Value, baseParameter.Nam.Value, baseParameter.Thang.Value);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport00040005ToExcelAsync")]
        public async Task<JsonResult> ExportReport00040005ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0004_0005ToListAsync(baseParameter.ParentID.Value, baseParameter.DistrictDataID.Value, baseParameter.Nam.Value, baseParameter.Thang.Value, baseParameter.Active.Value);
                string fileName = @"CamKet17_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport00040005(list, streamExport, baseParameter.DistrictDataID.Value);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }

        [HttpPost]
        [Route("ExportReport0009ToExcelAsync")]
        public async Task<JsonResult> ExportReport0009ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0009ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0009_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport009(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0010ToExcelAsync")]
        public async Task<JsonResult> ExportReport0010ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0010ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0010_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport010(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0011ToExcelAsync")]
        public async Task<JsonResult> ExportReport0011ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0011ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0011_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport011(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0012ToExcelAsync")]
        public async Task<JsonResult> ExportReport0012ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0012ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0012_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport012(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0013ToExcelAsync")]
        public async Task<JsonResult> ExportReport0013ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0013ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0013_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport013(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0014ToExcelAsync")]
        public async Task<JsonResult> ExportReport0014ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0014ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0014_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport014(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0015ToExcelAsync")]
        public async Task<JsonResult> ExportReport0015ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0015ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"ThamDinhAnToanThucPham_Report0015_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport015(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0016ToExcelAsync")]
        public async Task<JsonResult> ExportReport0016ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0016ToListAsync(baseParameter.PlanTypeID.Value);
                string fileName = @"MaSoCoSoNuoi_Report0016_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport016(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        [HttpPost]
        [Route("ExportReport0017ToExcelAsync")]
        public async Task<JsonResult> ExportReport0017ToExcelAsync()
        {
            string result = GlobalHelper.InitializationString;
            BaseParameter baseParameter = new BaseParameter();
            try
            {
                baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<Report> list = await _ReportService.Report0017ToListAsync(baseParameter.PlanTypeID.Value, baseParameter.DistrictDataID.Value);
                string fileName = @"MaSoCoSoNuoi_Report0017_" + GlobalHelper.InitializationDateTimeCode + ".xlsx";
                var streamExport = new MemoryStream();
                InitializationExcelReport017(list, streamExport);
                var physicalPathCreate = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, fileName);
                using (var stream = new FileStream(physicalPathCreate, FileMode.Create))
                {
                    streamExport.CopyTo(stream);
                }
                result = GlobalHelper.APISite + "/" + GlobalHelper.Download + "/" + fileName;
            }
            catch (Exception ex)
            {
                result = ex.Message;
            }
            return Json(result);
        }
        private void InitializationExcelGiamSatDuLuongPlanThamDinhCompanies(List<PlanThamDinhCompanies> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("GiamSatDuLuong");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "ID";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Đơn vị Tổ chức";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ao hồ";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Mẫu xét nghiệm";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Chỉ tiêu";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Khối lượng (kg)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Kết quả đánh giá";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (PlanThamDinhCompanies item in list)
                {
                    try
                    {

                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.ID;
                        workSheet.Cells[row, 2].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 3].Value = item.CompanyInfoName;
                        workSheet.Cells[row, 4].Value = item.CompanyLakeName;
                        workSheet.Cells[row, 5].Value = item.DanhMucLayMauName;
                        workSheet.Cells[row, 6].Value = item.DanhMucLayMauChiTieuName;
                        workSheet.Cells[row, 7].Value = item.SoLuongLayMau;
                        workSheet.Cells[row, 8].Value = item.DanhMucATTPXepLoaiName;


                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;

                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelAnToanThucPhamSauThuHoachPlanThamDinhCompanies(List<PlanThamDinhCompanies> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("AnToanThucPhamSauThuHoach");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Đơn vị Tổ chức";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Đăng ký kinh doanh";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Điện thoại";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quận huyện";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Phường xã";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Địa chỉ";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ngày lấy mẫu";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Mẫu xét nghiệm";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Chỉ tiêu";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Khối lượng (kg)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Kết quả đánh giá";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (PlanThamDinhCompanies item in list)
                {
                    try
                    {
                        CompanyInfo companyInfo = _CompanyInfoService.GetByID(item.CompanyInfoID.Value);
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.CompanyInfoName;
                        workSheet.Cells[row, 3].Value = companyInfo.DKKD == null ? GlobalHelper.InitializationString : companyInfo.DKKD;
                        workSheet.Cells[row, 4].Value = companyInfo.phone == null ? GlobalHelper.InitializationString : companyInfo.phone;
                        workSheet.Cells[row, 5].Value = companyInfo.DistrictDataName == null ? GlobalHelper.InitializationString : companyInfo.DistrictDataName;
                        workSheet.Cells[row, 6].Value = companyInfo.WardDataName == null ? GlobalHelper.InitializationString : companyInfo.WardDataName;
                        workSheet.Cells[row, 7].Value = companyInfo.address == null ? GlobalHelper.InitializationString : companyInfo.address;

                        workSheet.Cells[row, 8].Value = item.NgayGhiNhan.Value.ToString("dd/MM/yyyy");
                        workSheet.Cells[row, 9].Value = item.DanhMucLayMauName;
                        workSheet.Cells[row, 10].Value = item.DanhMucLayMauChiTieuName;
                        workSheet.Cells[row, 11].Value = item.SoLuongLayMau;
                        workSheet.Cells[row, 12].Value = item.DanhMucATTPXepLoaiName;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelCamKet17PlanThamDinhCompanies(List<PlanThamDinhCompanies> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("CamKet17");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tên cơ sở";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Địa chỉ";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Điện thoại";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Mặt hàng sản xuất";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ngày ký cam kết";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ngày kiểm tra";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Đạt";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Không đạt";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quận huyện";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Xã phường";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (PlanThamDinhCompanies item in list)
                {
                    try
                    {
                        CompanyInfo companyInfo = _CompanyInfoService.GetByID(item.CompanyInfoID.Value);
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.CompanyInfoName == null ? GlobalHelper.InitializationString : item.CompanyInfoName;
                        workSheet.Cells[row, 3].Value = companyInfo.address == null ? GlobalHelper.InitializationString : companyInfo.address;
                        workSheet.Cells[row, 4].Value = companyInfo.phone == null ? GlobalHelper.InitializationString : companyInfo.phone;
                        workSheet.Cells[row, 5].Value = item.HTMLContent == null ? GlobalHelper.InitializationString : item.HTMLContent;
                        workSheet.Cells[row, 6].Value = item.NgayGhiNhan == null ? GlobalHelper.InitializationString : item.NgayGhiNhan.Value.ToString("dd/MM/yyyy");
                        workSheet.Cells[row, 7].Value = item.NgayHetHan == null ? GlobalHelper.InitializationString : item.NgayHetHan.Value.ToString("dd/MM/yyyy");
                        workSheet.Cells[row, 8].Value = item.DanhMucATTPXepLoaiID == 6 ? item.DanhMucATTPXepLoaiName : GlobalHelper.InitializationString;
                        workSheet.Cells[row, 9].Value = item.DanhMucATTPXepLoaiID == 9 ? item.DanhMucATTPXepLoaiName : GlobalHelper.InitializationString; 
                        workSheet.Cells[row, 10].Value = companyInfo.DistrictDataName == null ? GlobalHelper.InitializationString : companyInfo.DistrictDataName;
                        workSheet.Cells[row, 11].Value = companyInfo.WardDataName == null ? GlobalHelper.InitializationString : companyInfo.WardDataName;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelCamKet17PhuLucII(List<Report> list, List<Report> list0006, MemoryStream streamExport, long districtDataID, int nam, int thang)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("CamKet17");
                int row = 5;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                if (districtDataID == 0)
                {
                    workSheet.Cells[row, column].Value = "Tỉnh thành";
                    column = column + 1;
                    workSheet.Cells[row, column].Value = "Quận huyện";
                    column = column + 1;
                }
                else
                {
                    workSheet.Cells[row, column].Value = "Quận huyện";
                    column = column + 1;
                    workSheet.Cells[row, column].Value = "Xã phường";
                    column = column + 1;
                }
                workSheet.Cells[row, column].Value = "Thống kê: Tăng/Giảm cùng kỳ";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thống kê: Số cơ sở thuộc đối tượng Thông tư 17";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ký cam kết: Số cơ sở ký cam kết trong tháng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ký cam kết: Lũy kế";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ký cam kết: Tỷ lệ %";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Kiểm tra: Số cơ sở kiểm tra trong tháng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Kiểm tra: Lũy kế";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Kiểm tra: Tỷ lệ %";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                workSheet.Cells[1, 1].Value = "Phụ lục II: BIỂU MẪU BÁO CÁO THỰC HIỆN THÔNG TƯ SỐ 17/2018/TT-BNNPTNT";
                workSheet.Cells[1, 1].Style.Font.Bold = true;
                workSheet.Cells[1, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                workSheet.Cells[1, 1].Style.Font.Name = "Times New Roman";
                workSheet.Cells[1, 1].Style.Font.Size = 14;
                workSheet.Cells[1, 1, 1, column - 1].Merge = true;

                workSheet.Cells[2, 1].Value = "(Kèm theo Công văn số: 2224/SNN-QLCL ngày 28 tháng 6 năm 2022 của Sở Nông nghiệp và Phát triển nông thôn)";
                workSheet.Cells[2, 1].Style.Font.Bold = true;
                workSheet.Cells[2, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                workSheet.Cells[2, 1].Style.Font.Name = "Times New Roman";
                workSheet.Cells[2, 1].Style.Font.Size = 14;
                workSheet.Cells[2, 1, 2, column - 1].Merge = true;

                if (thang > 0)
                {
                    workSheet.Cells[4, 1].Value = "1. Biểu mẫu thông tin tổng hợp (tháng " + thang + " năm " + nam + ")";
                }
                else
                {
                    workSheet.Cells[4, 1].Value = "1. Biểu mẫu thông tin tổng hợp (năm " + nam + ")";
                }
                workSheet.Cells[4, 1].Style.Font.Bold = true;
                workSheet.Cells[4, 1].Style.Font.Name = "Times New Roman";
                workSheet.Cells[4, 1].Style.Font.Size = 14;
                workSheet.Cells[4, 1, 4, column - 1].Merge = true;


                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Display;
                        workSheet.Cells[row, 3].Value = item.Name;
                        try
                        {
                            workSheet.Cells[row, 4].Value = item.TyLe001.Value;
                            workSheet.Cells[row, 5].Value = item.ThongKe001.Value;
                            workSheet.Cells[row, 6].Value = item.ThongKe005.Value;
                            workSheet.Cells[row, 7].Value = item.ThongKe004.Value;
                            workSheet.Cells[row, 8].Value = item.TyLe002.Value.ToString("N0") + "%";
                            workSheet.Cells[row, 9].Value = item.ThongKe007.Value;
                            workSheet.Cells[row, 10].Value = item.ThongKe006.Value;
                            workSheet.Cells[row, 11].Value = item.TyLe003.Value.ToString("N0") + "%";
                        }
                        catch (Exception ex)
                        {
                            string mes = ex.Message;
                        }

                        for (int i = 1; i < column; i++)
                        {
                            if (i > 3)
                            {
                                workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                            }
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                row = row + 3;
                column = 1;

                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quận huyện";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Xã phường";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cơ sở";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Địa chỉ";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Điện thoại";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Mặt hàng sản xuất, kinh doanh";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ngày ký cam kết";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Ngày kiểm tra";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Đạt";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Không Đạt";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Lý do";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                if (thang > 0)
                {
                    workSheet.Cells[row - 1, 1].Value = "2. Biểu mẫu thông tin chi tiết (tháng " + thang + " năm " + nam + ")";
                }
                else
                {
                    workSheet.Cells[row - 1, 1].Value = "2. Biểu mẫu thông tin chi tiết (năm " + nam + ")";
                }                
                workSheet.Cells[row - 1, 1].Style.Font.Bold = true;
                workSheet.Cells[row - 1, 1].Style.Font.Name = "Times New Roman";
                workSheet.Cells[row - 1, 1].Style.Font.Size = 14;
                workSheet.Cells[row - 1, 1, row - 1, column - 1].Merge = true;

                row = row + 1;
                stt = 1;
                foreach (Report item in list0006)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.DistrictDataName;
                        workSheet.Cells[row, 3].Value = item.WardDataName;
                        workSheet.Cells[row, 4].Value = item.Name;
                        workSheet.Cells[row, 5].Value = item.address;
                        workSheet.Cells[row, 6].Value = item.phone;
                        workSheet.Cells[row, 7].Value = item.HTMLContent;
                        try
                        {
                            if (item.NgayGhiNhan.Value.Year > 2000)
                            {
                                workSheet.Cells[row, 8].Value = item.NgayGhiNhan.Value.ToString("dd/MM/yyyy");
                                workSheet.Cells[row, 8].Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                            }
                        }
                        catch (Exception ex)
                        {
                            string mes = ex.Message;
                        }
                        try
                        {
                            if (item.NgayHetHan.Value.Year > 2000)
                            {
                                workSheet.Cells[row, 9].Value = item.NgayHetHan.Value.ToString("dd/MM/yyyy");
                                workSheet.Cells[row, 9].Style.HorizontalAlignment = ExcelHorizontalAlignment.Right;
                            }
                        }
                        catch (Exception ex)
                        {
                            string mes = ex.Message;
                        }
                        if (item.DanhMucATTPXepLoaiID == GlobalHelper.DanhMucATTPXepLoaiIDDat)
                        {
                            workSheet.Cells[row, 10].Value = "X";
                            workSheet.Cells[row, 10].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        }
                        if (item.DanhMucATTPXepLoaiID == GlobalHelper.DanhMucATTPXepLoaiIDKhongDat)
                        {
                            workSheet.Cells[row, 11].Value = "X";
                            workSheet.Cells[row, 11].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        }
                        workSheet.Cells[row, 12].Value = item.Note;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }
                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport00040005(List<Report> list, MemoryStream streamExport, long districtDataID)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("CamKet17");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                if (districtDataID == 0)
                {
                    workSheet.Cells[row, column].Value = "Quận huyện";
                }
                else
                {
                    workSheet.Cells[row, column].Value = "Xã phường";
                }

                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng số Đơn vị Tổ chức";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng số Đơn vị Tổ chức ký cam kết";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng số Đơn vị Tổ chức kiểm tra (Đạt)";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;
                        workSheet.Cells[row, 3].Value = item.ThongKe001.Value;
                        workSheet.Cells[row, 4].Value = item.ThongKe002.Value;
                        workSheet.Cells[row, 5].Value = item.ThongKe003.Value;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport009(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Năm";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Nông sản - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cấp mới - C";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - Tổng";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - A";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - B";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Định kỳ - C";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Nam;

                        workSheet.Cells[row, 3].Value = item.ThongKe001;
                        workSheet.Cells[row, 4].Value = item.ThongKe002;
                        workSheet.Cells[row, 5].Value = item.ThongKe003;
                        workSheet.Cells[row, 6].Value = item.ThongKe004;
                        workSheet.Cells[row, 7].Value = item.ThongKe005;
                        workSheet.Cells[row, 8].Value = item.ThongKe006;
                        workSheet.Cells[row, 9].Value = item.ThongKe007;
                        workSheet.Cells[row, 10].Value = item.ThongKe008;
                        workSheet.Cells[row, 11].Value = item.ThongKe009;
                        workSheet.Cells[row, 12].Value = item.ThongKe010;
                        workSheet.Cells[row, 13].Value = item.ThongKe011;
                        workSheet.Cells[row, 14].Value = item.ThongKe012;

                        workSheet.Cells[row, 15].Value = item.ThongKe101;
                        workSheet.Cells[row, 16].Value = item.ThongKe102;
                        workSheet.Cells[row, 17].Value = item.ThongKe103;
                        workSheet.Cells[row, 18].Value = item.ThongKe104;
                        workSheet.Cells[row, 19].Value = item.ThongKe105;
                        workSheet.Cells[row, 20].Value = item.ThongKe106;
                        workSheet.Cells[row, 21].Value = item.ThongKe107;
                        workSheet.Cells[row, 22].Value = item.ThongKe108;
                        workSheet.Cells[row, 23].Value = item.ThongKe109;
                        workSheet.Cells[row, 24].Value = item.ThongKe110;
                        workSheet.Cells[row, 25].Value = item.ThongKe111;
                        workSheet.Cells[row, 26].Value = item.ThongKe112;

                        workSheet.Cells[row, 27].Value = item.ThongKe201;
                        workSheet.Cells[row, 28].Value = item.ThongKe202;
                        workSheet.Cells[row, 29].Value = item.ThongKe203;
                        workSheet.Cells[row, 30].Value = item.ThongKe204;
                        workSheet.Cells[row, 31].Value = item.ThongKe205;
                        workSheet.Cells[row, 32].Value = item.ThongKe206;
                        workSheet.Cells[row, 33].Value = item.ThongKe207;
                        workSheet.Cells[row, 34].Value = item.ThongKe208;
                        workSheet.Cells[row, 35].Value = item.ThongKe209;
                        workSheet.Cells[row, 36].Value = item.ThongKe210;
                        workSheet.Cells[row, 37].Value = item.ThongKe211;
                        workSheet.Cells[row, 38].Value = item.ThongKe212;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport010(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tình trạng";
                column = column + 1;
               
                workSheet.Cells[row, column].Value = "Nông sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        workSheet.Cells[row, 3].Value = item.ThongKe002;
                        workSheet.Cells[row, 4].Value = item.ThongKe003;
                        workSheet.Cells[row, 5].Value = item.ThongKe001;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport011(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Nhóm";
                column = column + 1;
              
                workSheet.Cells[row, column].Value = "Nông sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        workSheet.Cells[row, 3].Value = item.ThongKe002;
                        workSheet.Cells[row, 4].Value = item.ThongKe003;
                        workSheet.Cells[row, 5].Value = item.ThongKe001;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport012(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quy mô";
                column = column + 1;
               
                workSheet.Cells[row, column].Value = "Nông sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        workSheet.Cells[row, 3].Value = item.ThongKe002;
                        workSheet.Cells[row, 4].Value = item.ThongKe003;
                        workSheet.Cells[row, 5].Value = item.ThongKe001;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport013(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Huyện";
                column = column + 1;
               
                workSheet.Cells[row, column].Value = "Nông sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        workSheet.Cells[row, 3].Value = item.ThongKe002;
                        workSheet.Cells[row, 4].Value = item.ThongKe003;
                        workSheet.Cells[row, 5].Value = item.ThongKe001;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport014(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Loại hình";
                column = column + 1;               
                workSheet.Cells[row, column].Value = "Nông sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Thủy sản";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        
                        workSheet.Cells[row, 3].Value = item.ThongKe002;
                        workSheet.Cells[row, 4].Value = item.ThongKe003;
                        workSheet.Cells[row, 5].Value = item.ThongKe001;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport015(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Sản phẩm";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng";
                column = column + 1;               

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.Name;

                        workSheet.Cells[row, 3].Value = item.ThongKe001;                      

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport016(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quận huyện";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cơ sở nuôi";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng diện tích (ha)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Diện tích nuôi (ha)";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.DistrictDataName;

                        workSheet.Cells[row, 3].Value = item.ThongKe001;
                        workSheet.Cells[row, 4].Value = item.ThongKe002;
                        workSheet.Cells[row, 5].Value = item.ThongKe003;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        private void InitializationExcelReport017(List<Report> list, MemoryStream streamExport)
        {
            using (var package = new ExcelPackage(streamExport))
            {
                var workSheet = package.Workbook.Worksheets.Add("Sheet1");
                int row = 1;
                int column = 1;
                workSheet.Cells[row, column].Value = "STT";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Quận huyện";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Xã phường";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Cơ sở nuôi";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Tổng diện tích (ha)";
                column = column + 1;
                workSheet.Cells[row, column].Value = "Diện tích nuôi (ha)";
                column = column + 1;

                for (int i = 1; i < column; i++)
                {
                    workSheet.Cells[row, i].Style.Font.Bold = true;
                    workSheet.Cells[row, i].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                    workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                    workSheet.Cells[row, i].Style.Font.Size = 14;
                    workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                    workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                }

                row = row + 1;
                int stt = 1;
                foreach (Report item in list)
                {
                    try
                    {
                        workSheet.Cells[row, 1].Value = stt;
                        workSheet.Cells[row, 1].Style.HorizontalAlignment = ExcelHorizontalAlignment.Center;
                        workSheet.Cells[row, 2].Value = item.DistrictDataName;
                        workSheet.Cells[row, 3].Value = item.WardDataName;

                        workSheet.Cells[row, 4].Value = item.ThongKe001;
                        workSheet.Cells[row, 5].Value = item.ThongKe002;
                        workSheet.Cells[row, 6].Value = item.ThongKe003;

                        for (int i = 1; i < column; i++)
                        {
                            workSheet.Cells[row, i].Style.Font.Name = "Times New Roman";
                            workSheet.Cells[row, i].Style.Font.Size = 14;
                            workSheet.Cells[row, i].Style.Border.Top.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Left.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Right.Style = ExcelBorderStyle.Thin;
                            workSheet.Cells[row, i].Style.Border.Bottom.Style = ExcelBorderStyle.Thin;
                        }
                        stt = stt + 1;
                        row = row + 1;
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                }
                for (int i = 1; i <= column; i++)
                {
                    workSheet.Column(i).AutoFit();
                }
                package.Save();
            }
            streamExport.Position = 0;
        }
        [HttpPost]
        [Route("NamBatDau")]
        public NamThang NamBatDau()
        {
            NamThang namThang = new NamThang();
            namThang.ID = GlobalHelper.NamBatDau;
            namThang.Name = GlobalHelper.NamBatDau.ToString();
            return namThang;
        }
        [HttpPost]
        [Route("NamKeThuc")]
        public NamThang NamKeThuc()
        {
            NamThang namThang = new NamThang();
            namThang.ID = GlobalHelper.NamBatDau;
            namThang.Name = GlobalHelper.NamBatDau.ToString();
            return namThang;
        }
        [HttpPost]
        [Route("ListNam")]
        public List<NamThang> ListNam()
        {
            List<NamThang> result = new List<NamThang>();
            for (int i = GlobalHelper.NamBatDau; i < GlobalHelper.NamKeThuc; i++)
            {
                NamThang namThang = new NamThang();
                namThang.ID = i;
                namThang.Name = i.ToString();
                result.Add(namThang);
            }
            return result;
        }
        [HttpPost]
        [Route("ListThang")]
        public List<NamThang> ListThang()
        {
            List<NamThang> result = new List<NamThang>();
            for (int i = 0; i < 13; i++)
            {
                NamThang namThang = new NamThang();
                namThang.ID = i;
                namThang.Name = i.ToString();
                result.Add(namThang);
            }
            return result;
        }
    }
}


