using API.Model;
using Data.Model;
using System.Linq;
//using System.Management.Automation.Language;

namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class PlanThamDinhCompanyDocumentController : BaseController<PlanThamDinhCompanyDocument, IPlanThamDinhCompanyDocumentService>
    {
        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IPlanThamDinhThanhVienService _PlanThamDinhThanhVienService;
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IPlanThamDinhCompanyProductGroupService _PlanThamDinhCompanyProductGroupService;
        private readonly IPlanThamDinhCompanyBienBanService _PlanThamDinhCompanyBienBanService;
        private readonly IPlanThamDinhDanhMucLayMauService _PlanThamDinhDanhMucLayMauService;
        private readonly IPlanThamDinhDistrictDataService _PlanThamDinhDistrictDataService;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly IThanhVienService _ThanhVienService;
        private readonly ICompanyInfoService _CompanyInfoService;
        private readonly IDocumentTemplateService _DocumentTemplateService;
        private readonly IBienBanATTPService _BienBanATTPService;
        private readonly IDistrictDataService _DistrictDataService;

        private readonly IRegisterHarvestService _RegisterHarvestService;
        private readonly IRegisterHarvestItemsService _RegisterHarvestItemsService;
        private readonly IDanhMucLayMauPhanLoaiService _DanhMucLayMauPhanLoaiService;
        private readonly IDanhMucLayMauService _DanhMucLayMauService;

        private readonly IProductInfoService _ProductInfoService;
        private readonly ICompanyLakeService _CompanyLakeService;

        private readonly ICompanyInfoDonViDongGoiService _CompanyInfoDonViDongGoiService;
        private readonly ICompanyInfoDonViDongGoiSanPhamService _CompanyInfoDonViDongGoiSanPhamService;
        private readonly ICompanyInfoDonViDongGoiThiTruongService _CompanyInfoDonViDongGoiThiTruongService;
        public PlanThamDinhCompanyDocumentController(IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService, IWebHostEnvironment WebHostEnvironment

            , IPlanThamDinhService PlanThamDinhService
            , IPlanThamDinhThanhVienService PlanThamDinhThanhVienService
            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService
            , IPlanThamDinhCompanyProductGroupService PlanThamDinhCompanyProductGroupService
            , IPlanThamDinhCompanyBienBanService PlanThamDinhCompanyBienBanService
            , IPlanThamDinhDanhMucLayMauService PlanThamDinhDanhMucLayMauService
            , IPlanThamDinhDistrictDataService PlanThamDinhDistrictDataService

            , IStateAgencyService StateAgencyService
            , IThanhVienService ThanhVienService
            , ICompanyInfoService CompanyInfoService
            , IDocumentTemplateService DocumentTemplateService
            , IBienBanATTPService BienBanATTPService
            , IDistrictDataService DistrictDataService

            , IRegisterHarvestService RegisterHarvestService
            , IRegisterHarvestItemsService RegisterHarvestItemsService

            , IDanhMucLayMauPhanLoaiService DanhMucLayMauPhanLoaiService
            , IDanhMucLayMauService DanhMucLayMauService

            , IProductInfoService ProductInfoService
            , ICompanyLakeService CompanyLakeService

            , ICompanyInfoDonViDongGoiService CompanyInfoDonViDongGoiService
            , ICompanyInfoDonViDongGoiSanPhamService CompanyInfoDonViDongGoiSanPhamService
            , ICompanyInfoDonViDongGoiThiTruongService CompanyInfoDonViDongGoiThiTruongService

            ) : base(PlanThamDinhCompanyDocumentService, WebHostEnvironment)
        {
            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;
            _WebHostEnvironment = WebHostEnvironment;

            _PlanThamDinhService = PlanThamDinhService;
            _PlanThamDinhThanhVienService = PlanThamDinhThanhVienService;
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _PlanThamDinhCompanyProductGroupService = PlanThamDinhCompanyProductGroupService;
            _PlanThamDinhCompanyBienBanService = PlanThamDinhCompanyBienBanService;
            _PlanThamDinhDanhMucLayMauService = PlanThamDinhDanhMucLayMauService;
            _PlanThamDinhDistrictDataService = PlanThamDinhDistrictDataService;

            _StateAgencyService = StateAgencyService;
            _ThanhVienService = ThanhVienService;
            _CompanyInfoService = CompanyInfoService;
            _DocumentTemplateService = DocumentTemplateService;
            _BienBanATTPService = BienBanATTPService;
            _DistrictDataService = DistrictDataService;

            _RegisterHarvestService = RegisterHarvestService;
            _RegisterHarvestItemsService = RegisterHarvestItemsService;
            _DanhMucLayMauPhanLoaiService = DanhMucLayMauPhanLoaiService;
            _DanhMucLayMauService = DanhMucLayMauService;

            _ProductInfoService = ProductInfoService;
            _CompanyLakeService = CompanyLakeService;

            _CompanyInfoDonViDongGoiService = CompanyInfoDonViDongGoiService;
            _CompanyInfoDonViDongGoiSanPhamService = CompanyInfoDonViDongGoiSanPhamService;
            _CompanyInfoDonViDongGoiThiTruongService = CompanyInfoDonViDongGoiThiTruongService;
        }
        [HttpPost]
        [Route("SaveAsync")]
        public override async Task<PlanThamDinhCompanyDocument> SaveAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                result = JsonConvert.DeserializeObject<PlanThamDinhCompanyDocument>(Request.Form["data"]);
                result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                var physicalPath = Path.Combine(folderPath, result.FileName);
                bool isFolderExists = System.IO.Directory.Exists(folderPath);
                if (!isFolderExists)
                {
                    System.IO.Directory.CreateDirectory(folderPath);
                }
                using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(result.HTMLContent);
                    }
                }
                result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;

                result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

                if (result.ID > 0)
                {
                    if (result.IsLamMoi == true)
                    {
                        result.IsLamMoi = false;
                        try
                        {
                            switch (result.DocumentTemplateID)
                            {
                                case 15:
                                    await PlanThamDinhCompanyDocument15(result);
                                    break;
                                case 16:
                                    await PlanThamDinhCompanyDocument16(result);
                                    break;
                                case 37:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                    await PlanThamDinhCompanyDocument37(result);
                                    break;
                                case 47:
                                case 48:
                                    await PlanThamDinhCompanyDocument47(result);
                                    break;
                                case 38:
                                    await PlanThamDinhCompanyDocument38(result);
                                    break;
                                case 39:
                                    await PlanThamDinhCompanyDocument39(result);
                                    break;
                                case 40:
                                    await PlanThamDinhCompanyDocument40(result);
                                    break;
                                case 41:
                                    await PlanThamDinhCompanyDocument41(result);
                                    break;
                                case 42:
                                    await PlanThamDinhCompanyDocument42(result);
                                    break;
                                case 46:
                                    await PlanThamDinhCompanyDocument46(result);
                                    break;
                                case 43:
                                    await PlanThamDinhCompanyDocument43(result);
                                    break;
                                case 56:
                                    await PlanThamDinhCompanyDocument56(result);
                                    break;
                                case 57:
                                    await PlanThamDinhCompanyDocument57(result);
                                    break;
                                case 58:
                                    await PlanThamDinhCompanyDocument58(result);
                                    break;
                                case 59:
                                    await PlanThamDinhCompanyDocument59(result);
                                    break;
                                case 60:
                                case 95:
                                    await PlanThamDinhCompanyDocument60(result);
                                    break;
                                case 61:
                                case 96:
                                    await PlanThamDinhCompanyDocument61(result);
                                    break;
                                case 62:
                                case 97:
                                    await PlanThamDinhCompanyDocument62(result);
                                    break;
                                case 63:
                                    await PlanThamDinhCompanyDocument63(result);
                                    break;
                                case 64:
                                    await PlanThamDinhCompanyDocument64(result);
                                    break;
                                case 66:
                                    await PlanThamDinhCompanyDocument66(result);
                                    break;
                                case 67:
                                    await PlanThamDinhCompanyDocument67(result);
                                    break;
                                case 68:
                                    await PlanThamDinhCompanyDocument68(result);
                                    break;
                                case 69:
                                    await PlanThamDinhCompanyDocument69(result);
                                    break;
                                case 70:
                                    await PlanThamDinhCompanyDocument70(result);
                                    break;
                                case 71:
                                    await PlanThamDinhCompanyDocument71(result);
                                    break;
                                case 72:
                                    await PlanThamDinhCompanyDocument72(result);
                                    break;
                                case 77:
                                    await PlanThamDinhCompanyDocument77(result);
                                    break;
                                case 78:
                                    await PlanThamDinhCompanyDocument78(result);
                                    break;
                                case 79:
                                    await PlanThamDinhCompanyDocument79(result);
                                    break;
                                case 80:
                                    await PlanThamDinhCompanyDocument80(result);
                                    break;
                                case 81:
                                    await PlanThamDinhCompanyDocument81(result);
                                    break;
                                case 84:
                                    await PlanThamDinhCompanyDocument84(result);
                                    break;
                                case 87:
                                    await PlanThamDinhCompanyDocument87(result);
                                    break;
                                case 88:
                                    await PlanThamDinhCompanyDocument88(result);
                                    break;
                                case 89:
                                    await PlanThamDinhCompanyDocument89(result);
                                    break;
                                case 90:
                                    await PlanThamDinhCompanyDocument90(result);
                                    break;
                                case 91:
                                    await PlanThamDinhCompanyDocument90(result);
                                    break;
                            }
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }

        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument15(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {

                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);



                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }

            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument16(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument37(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;
                    try
                    {
                        PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);

                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(planThamDinhCompanies.ParentID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(planThamDinhCompanies.ID);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await _PlanThamDinhCompanyBienBanService.GetSQLByParentID_DanhMucProductGroupIDToListAsync(planThamDinhCompanies.ID, documentTemplate.DanhMucProductGroupID.Value);



                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[HinhThucThamDinh]", planThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        StringBuilder ListCompany = new StringBuilder();
                        ListCompany.AppendLine("1) " + companyInfo.role_name + @": " + companyInfo.fullname);
                        ListCompany.AppendLine(@"<br/>");
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListCompany]", ListCompany.ToString());

                        string ListProductGroup = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                        {
                            ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);

                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];

                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + ") " + itemPlanThamDinhThanhVien.DanhMucChucDanhName + @": " + itemPlanThamDinhThanhVien.ThanhVienName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());

                        StringBuilder NhomChiTieuDanhGia = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                        {
                            PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                            int stt = i + 1;
                            NhomChiTieuDanhGia.AppendLine(@"<tr>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + stt);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Name);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Description);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 2)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 3)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 4)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Note);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.HTMLContent);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[NhomChiTieuDanhGia]", NhomChiTieuDanhGia.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[TongChiTieu]", listPlanThamDinhCompanyBienBan.Count.ToString());

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[Dat_Ac_Count]", planThamDinhCompanies.Dat_Ac_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[Nhe_Mi_Count]", planThamDinhCompanies.Nhe_Mi_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[Nang_Ma_Count]", planThamDinhCompanies.Nang_Ma_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[NghiemTrong_Se_Count]", planThamDinhCompanies.NghiemTrong_Se_Count.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", planThamDinhCompanies.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[ChiTieu]", planThamDinhCompanies.ChiTieuDanhGiaCount.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[XepLoai]", planThamDinhCompanies.DanhMucATTPXepLoaiName);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", companyInfo.MS.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", companyInfo.DKKDNgayCap.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            DateTime now = result.NgayGhiNhan.Value;
                            string NgayKy = "ngày " + now.Day + " tháng " + now.Month + " năm " + now.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument47(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);

                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(planThamDinhCompanies.ParentID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(planThamDinhCompanies.ID);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await _PlanThamDinhCompanyBienBanService.GetSQLByParentID_DanhMucProductGroupIDToListAsync(planThamDinhCompanies.ID, documentTemplate.DanhMucProductGroupID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[HinhThucThamDinh]", planThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);

                        string NguoiKy = result.ThanhVienName;
                        if (!string.IsNullOrEmpty(result.Note))
                        {
                            NguoiKy = NguoiKy;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", NguoiKy);

                        StringBuilder ListCompany = new StringBuilder();
                        ListCompany.AppendLine("1) " + companyInfo.role_name + @": " + companyInfo.fullname);
                        ListCompany.AppendLine(@"<br/>");
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListCompany]", ListCompany.ToString());

                        string ListProductGroup = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                        {
                            ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);

                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];

                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + ") " + itemPlanThamDinhThanhVien.DanhMucChucDanhName + @": " + itemPlanThamDinhThanhVien.ThanhVienName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());

                        StringBuilder NhomChiTieuDanhGia = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                        {
                            PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                            int stt = i + 1;
                            NhomChiTieuDanhGia.AppendLine(@"<tr>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + stt);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Name);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Description);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 2)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 3)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 4)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Note);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.HTMLContent);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[NhomChiTieuDanhGia]", NhomChiTieuDanhGia.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[TongChiTieu]", listPlanThamDinhCompanyBienBan.Count.ToString());

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[Dat_Ac_Count]", planThamDinhCompanies.Dat_Ac_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[Nhe_Mi_Count]", planThamDinhCompanies.Nhe_Mi_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[Nang_Ma_Count]", planThamDinhCompanies.Nang_Ma_Count.Value.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[NghiemTrong_Se_Count]", planThamDinhCompanies.NghiemTrong_Se_Count.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", planThamDinhCompanies.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[ChiTieu]", planThamDinhCompanies.ChiTieuDanhGiaCount.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[XepLoai]", planThamDinhCompanies.DanhMucATTPXepLoaiName);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", companyInfo.MS.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", companyInfo.DKKDNgayCap.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            DateTime now = result.NgayGhiNhan.Value;
                            string NgayKy = "ngày " + now.Day + " tháng " + now.Month + " năm " + now.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument38(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(result.PlanThamDinhID.Value);
                        StringBuilder DanhSachThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];
                            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhCompanies.CompanyInfoID.Value);
                            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                            List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(itemPlanThamDinhCompanies.ID);
                            string ListProductGroup = GlobalHelper.InitializationString;
                            foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                            {
                                ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                            }

                            int stt = i + 1;
                            DanhSachThamDinh.AppendLine(@"<tr>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + stt);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.Name);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.fullname);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.TypeName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + ListProductGroup);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.phone);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.address);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            try
                            {
                                DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                            }
                            catch (Exception ex)
                            {
                                DanhSachThamDinh.AppendLine(@"");
                                string mes = ex.Message;
                            }
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"</tr>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThamDinh]", DanhSachThamDinh.ToString());
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument39(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        try
                        {
                            string NgayThamDinh = "ngày " + planThamDinh.NgayBatDau.Value.Day + " tháng " + planThamDinh.NgayBatDau.Value.Month + " năm " + planThamDinh.NgayBatDau.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", NgayThamDinh);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(result.PlanThamDinhID.Value);
                        StringBuilder DanhSachThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];
                            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhCompanies.CompanyInfoID.Value);
                            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                            List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(itemPlanThamDinhCompanies.ID);
                            string ListProductGroup = GlobalHelper.InitializationString;
                            foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                            {
                                ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                            }

                            int stt = i + 1;
                            DanhSachThamDinh.AppendLine(@"<tr>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + stt);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.Name);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.fullname);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.TypeName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + ListProductGroup);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.phone);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.address);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            try
                            {
                                DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                            }
                            catch (Exception ex)
                            {
                                DanhSachThamDinh.AppendLine(@"");
                                string mes = ex.Message;
                            }
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"</tr>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThamDinh]", DanhSachThamDinh.ToString());


                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];

                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + ") " + itemPlanThamDinhThanhVien.DanhMucChucDanhName + @": " + itemPlanThamDinhThanhVien.ThanhVienName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument40(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(result.PlanThamDinhID.Value);
                        StringBuilder DanhSachThamDinh = new StringBuilder();
                        int stt = GlobalHelper.InitializationNumber;
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];

                            if ((itemPlanThamDinhCompanies.DanhMucATTPXepLoaiID == 2) || (itemPlanThamDinhCompanies.DanhMucATTPXepLoaiID == 3))
                            {
                                CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhCompanies.CompanyInfoID.Value);
                                companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                                List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(itemPlanThamDinhCompanies.ID);
                                string ListProductGroup = GlobalHelper.InitializationString;
                                foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                                {
                                    ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                                }

                                stt = stt + 1;
                                DanhSachThamDinh.AppendLine(@"<tr>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + stt);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + companyInfo.Name);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + companyInfo.fullname);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + companyInfo.TypeName);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + ListProductGroup);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + companyInfo.phone);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + companyInfo.address);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPXepLoaiName);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"<td>");
                                DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.Note);
                                DanhSachThamDinh.AppendLine(@"</td>");
                                DanhSachThamDinh.AppendLine(@"</tr>");
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThamDinh]", DanhSachThamDinh.ToString());
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument41(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        if ((planThamDinhCompanies.DanhMucATTPXepLoaiID == 2) || (planThamDinhCompanies.DanhMucATTPXepLoaiID == 3))
                        {
                            PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(planThamDinhCompanies.ParentID.Value);

                            List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDAndActiveToListAsync(planThamDinhCompanies.ID, true);

                            StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                            StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                            result.HTMLContent = documentTemplate.HTMLContent;

                            result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                            result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                            string ChucDanh = GlobalHelper.InitializationString;
                            string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                            if (result.Active == true)
                            {
                                ChucDanh = "KT.";
                                ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                                if (NguoiKy != null)
                                {
                                    ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                                }
                            }
                            result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                            result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                            result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                            result.HTMLContent = result.HTMLContent.Replace(@"[AnToanThucPhamMaSo]", result.Description);

                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                            string ListProductGroup = GlobalHelper.InitializationString;
                            foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                            {
                                ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                            }
                            result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);

                            try
                            {
                                string NgayKy = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                                string NgayKyEngLish = "(" + result.NgayGhiNhan.Value.Day + "/" + result.NgayGhiNhan.Value.Month + "/" + result.NgayGhiNhan.Value.Year + ")";
                                result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);
                                result.HTMLContent = result.HTMLContent.Replace(@"[NgayKyEngLish]", NgayKyEngLish);
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }

                            try
                            {
                                string NgayHetHan = "ngày " + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Day + " tháng " + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Month + " năm " + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Year;
                                string NgayHetHanEnglish = "(" + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Day + "/" + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Month + "/" + planThamDinhCompanies.NgayHieuLucGiayChungNhan.Value.Year + ")";
                                result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", NgayHetHan);
                                result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHanEnglish]", NgayHetHanEnglish);
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                        }
                        else
                        {
                            companyInfo.Name = companyInfo.Name + " (Xếp loại: " + planThamDinhCompanies.DanhMucATTPXepLoaiName + "): Không đủ điều kiện cấp Giấy chứng nhận";
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument46(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[TruongDoanThamDinh]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[LanhDao]", result.ThanhVienName001);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(result.PlanThamDinhID.Value);
                        StringBuilder DanhSachThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies itemPlanThamDinhCompanies = listPlanThamDinhCompanies[i];


                            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhCompanies.CompanyInfoID.Value);
                            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                            List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync(itemPlanThamDinhCompanies.ID);
                            string ListProductGroup = GlobalHelper.InitializationString;
                            foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                            {
                                ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                            }

                            int stt = i + 1;
                            DanhSachThamDinh.AppendLine(@"<tr>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + stt);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.Name);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.fullname);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.TypeName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + ListProductGroup);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.phone);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + companyInfo.address);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.DanhMucATTPXepLoaiName);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"<td>");
                            DanhSachThamDinh.AppendLine(@"" + itemPlanThamDinhCompanies.Note);
                            DanhSachThamDinh.AppendLine(@"</td>");
                            DanhSachThamDinh.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThamDinh]", DanhSachThamDinh.ToString());

                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument43(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(planThamDinh.ID);

                        StringBuilder PlanThamDinhDanhMucLayMau = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                        {
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];

                            try
                            {
                                DistrictData districtData = await _DistrictDataService.GetByIDAsync(itemPlanThamDinhDanhMucLayMau.DistrictDataID.Value);
                                itemPlanThamDinhDanhMucLayMau.DistrictDataName = districtData.Name + " (" + districtData.Note + ")";
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                            try
                            {
                                CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhDanhMucLayMau.CompanyInfoID.Value);
                                itemPlanThamDinhDanhMucLayMau.CompanyInfoName = companyInfo.Name + " (" + companyInfo.address + ")";
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }

                            int stt = i + 1;
                            try
                            {
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<tr>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + stt);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.TypeName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.CompanyInfoName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                if (itemPlanThamDinhDanhMucLayMau.SoLuongLayMau != null)
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.SoLuongLayMau);
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                else
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");

                                if (itemPlanThamDinhDanhMucLayMau.NgayGhiNhan != null)
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                else
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.ThanhVienName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.CompanyLakeName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</tr>");
                            }
                            catch (Exception ex)
                            {
                                string mes = ex.Message;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhDanhMucLayMau]", PlanThamDinhDanhMucLayMau.ToString());
                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            string NgayThamDinh = " tháng " + planThamDinh.NgayBatDau.Value.Month + " năm " + planThamDinh.NgayBatDau.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", NgayThamDinh);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            string NgayBatDau = planThamDinh.NgayBatDau.Value.Day + "/" + planThamDinh.NgayBatDau.Value.Month + "/" + planThamDinh.NgayBatDau.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            string NgayKetThuc = planThamDinh.NgayKetThuc.Value.Day + "/" + planThamDinh.NgayKetThuc.Value.Month + "/" + planThamDinh.NgayKetThuc.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", NgayKetThuc);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument56(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(planThamDinh.ID);

                        StringBuilder PlanThamDinhDanhMucLayMau = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                        {
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];

                            try
                            {
                                DistrictData districtData = await _DistrictDataService.GetByIDAsync(itemPlanThamDinhDanhMucLayMau.DistrictDataID.Value);
                                itemPlanThamDinhDanhMucLayMau.DistrictDataName = districtData.Name + " (" + districtData.Note + ")";
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }
                            try
                            {
                                CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(itemPlanThamDinhDanhMucLayMau.CompanyInfoID.Value);
                                itemPlanThamDinhDanhMucLayMau.CompanyInfoName = companyInfo.Name + " (" + companyInfo.address + ")";
                            }
                            catch (Exception ex)
                            {
                                string message = ex.Message;
                            }

                            int stt = i + 1;
                            try
                            {
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<tr>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + stt);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.TypeName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.CompanyInfoName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                if (itemPlanThamDinhDanhMucLayMau.SoLuongLayMau != null)
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.SoLuongLayMau);
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                else
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");

                                if (itemPlanThamDinhDanhMucLayMau.NgayGhiNhan != null)
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                else
                                {
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"");
                                    PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                }
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.ThanhVienName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"<td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"" + itemPlanThamDinhDanhMucLayMau.CompanyLakeName);
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</td>");
                                PlanThamDinhDanhMucLayMau.AppendLine(@"</tr>");
                            }
                            catch (Exception ex)
                            {
                                string mes = ex.Message;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhDanhMucLayMau]", PlanThamDinhDanhMucLayMau.ToString());
                        try
                        {
                            string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            string NgayThamDinh = " THÁNG " + planThamDinh.NgayBatDau.Value.Month + " NĂM " + planThamDinh.NgayBatDau.Value.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", NgayThamDinh);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }
                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument57(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        RegisterHarvest RegisterHarvest = await _RegisterHarvestService.GetByIDAsync(result.RegisterHarvestID.Value);
                        List<RegisterHarvestItems> listRegisterHarvestItems = await _RegisterHarvestItemsService.GetByParentIDToListAsync(result.RegisterHarvestID.Value);
                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(RegisterHarvest.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", companyInfo.fullname);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhMucLayMauName]", RegisterHarvest.DanhMucLayMauName);


                        StringBuilder RegisterHarvestItems = new StringBuilder();
                        for (int i = 0; i < listRegisterHarvestItems.Count; i++)
                        {
                            RegisterHarvestItems itemRegisterHarvestItems = listRegisterHarvestItems[i];
                            if (!string.IsNullOrEmpty(itemRegisterHarvestItems.HTMLContent))
                            {
                                RegisterHarvest.Note = itemRegisterHarvestItems.HTMLContent;
                            }

                            int stt = i + 1;
                            try
                            {
                                RegisterHarvestItems.AppendLine(@"<tr>");
                                RegisterHarvestItems.AppendLine(@"<td>");
                                RegisterHarvestItems.AppendLine(@"" + stt);
                                RegisterHarvestItems.AppendLine(@"</td>");
                                if (itemRegisterHarvestItems.NgayGhiNhan != null)
                                {
                                    RegisterHarvestItems.AppendLine(@"<td style='text-align: right;'>");
                                    RegisterHarvestItems.AppendLine(@"" + itemRegisterHarvestItems.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                                    RegisterHarvestItems.AppendLine(@"</td>");
                                }
                                else
                                {
                                    RegisterHarvestItems.AppendLine(@"<td>");
                                    RegisterHarvestItems.AppendLine(@"");
                                    RegisterHarvestItems.AppendLine(@"</td>");
                                }
                                if (itemRegisterHarvestItems.SoLuong != null)
                                {
                                    RegisterHarvestItems.AppendLine(@"<td style='text-align: right;'>");
                                    RegisterHarvestItems.AppendLine(@"" + itemRegisterHarvestItems.SoLuong.Value.ToString("N2"));
                                    RegisterHarvestItems.AppendLine(@"</td>");
                                }
                                else
                                {
                                    RegisterHarvestItems.AppendLine(@"<td>");
                                    RegisterHarvestItems.AppendLine(@"");
                                    RegisterHarvestItems.AppendLine(@"</td>");
                                }
                                RegisterHarvestItems.AppendLine(@"<td>");
                                RegisterHarvestItems.AppendLine(@"" + itemRegisterHarvestItems.Name);
                                RegisterHarvestItems.AppendLine(@"</td>");
                                RegisterHarvestItems.AppendLine(@"<td>");
                                RegisterHarvestItems.AppendLine(@"" + itemRegisterHarvestItems.Description);
                                RegisterHarvestItems.AppendLine(@"</td>");
                                RegisterHarvestItems.AppendLine(@"<td>");
                                RegisterHarvestItems.AppendLine(@"" + itemRegisterHarvestItems.Note);
                                RegisterHarvestItems.AppendLine(@"</td>");
                                RegisterHarvestItems.AppendLine(@"</tr>");
                            }
                            catch (Exception ex)
                            {
                                string mes = ex.Message;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListRegisterHarvestItems]", RegisterHarvestItems.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[DiaChiNhanHang]", RegisterHarvest.Note);

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", RegisterHarvest.NgayBatDau.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", GlobalHelper.InitializationString);
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", RegisterHarvest.NgayKetThuc.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", GlobalHelper.InitializationString);
                        }






                        string NgayThongBao = "ngày " + GlobalHelper.InitializationDateTime.Day + " tháng " + GlobalHelper.InitializationDateTime.Month + " năm " + GlobalHelper.InitializationDateTime.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument58(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        RegisterHarvestItems RegisterHarvestItems = await _RegisterHarvestItemsService.GetByIDAsync(result.RegisterHarvestItemsID.Value);
                        RegisterHarvest RegisterHarvest = await _RegisterHarvestService.GetByIDAsync(RegisterHarvestItems.ParentID.Value);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(RegisterHarvest.ParentID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(RegisterHarvest.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        DistrictData districtData = await _DistrictDataService.GetByIDAsync(companyInfo.DistrictDataID.Value);
                        companyInfo.DistrictDataName = districtData.Name + " (" + districtData.Note + ")";

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoHieuPhuongTien]", RegisterHarvestItems.Code001);
                        result.HTMLContent = result.HTMLContent.Replace(@"[VungThuHoach]", RegisterHarvestItems.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[XepLoai]", RegisterHarvestItems.DanhMucATTPXepLoaiName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhMucLayMauName]", RegisterHarvest.DanhMucLayMauName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CoSoNhanHang]", RegisterHarvestItems.Description);


                        if (RegisterHarvestItems.NgayGhiNhan != null)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThuHoach]", RegisterHarvestItems.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", RegisterHarvestItems.NgayGhiNhan.Value.AddDays(3).ToString("dd/MM/yyyy"));
                        }
                        else
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThuHoach]", GlobalHelper.InitializationString);
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", GlobalHelper.InitializationString);
                        }
                        if (RegisterHarvestItems.SoLuong001 != null)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[SoLuongKiemSoat]", RegisterHarvestItems.SoLuong001.Value.ToString("N2"));
                        }
                        else
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[SoLuongKiemSoat]", GlobalHelper.InitializationString);
                        }

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

                }


            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument59(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        RegisterHarvestItems RegisterHarvestItems = await _RegisterHarvestItemsService.GetByIDAsync(result.RegisterHarvestItemsID.Value);
                        RegisterHarvest RegisterHarvest = await _RegisterHarvestService.GetByIDAsync(RegisterHarvestItems.ParentID.Value);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(RegisterHarvest.ParentID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(RegisterHarvest.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        DistrictData districtData = await _DistrictDataService.GetByIDAsync(companyInfo.DistrictDataID.Value);
                        companyInfo.DistrictDataName = districtData.Name + " (" + districtData.Note + ")";

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyAddress]", stateAgency.Note);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoHieuPhuongTien]", RegisterHarvestItems.Code001);
                        result.HTMLContent = result.HTMLContent.Replace(@"[VungThuHoach]", RegisterHarvestItems.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[XepLoai]", RegisterHarvestItems.DanhMucATTPXepLoaiName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhMucLayMauName]", RegisterHarvest.DanhMucLayMauName);
                        RegisterHarvestItems.Description = RegisterHarvestItems.Description + " (" + RegisterHarvestItems.HTMLContent + ")";
                        result.HTMLContent = result.HTMLContent.Replace(@"[CoSoNhanHang]", RegisterHarvestItems.Description);


                        if (RegisterHarvestItems.NgayGhiNhan != null)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThuHoach]", RegisterHarvestItems.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", RegisterHarvestItems.NgayGhiNhan.Value.AddDays(3).ToString("dd/MM/yyyy"));
                        }
                        else
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThuHoach]", GlobalHelper.InitializationString);
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", GlobalHelper.InitializationString);
                        }
                        if (RegisterHarvestItems.SoLuong001 != null)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[SoLuongKiemSoat]", RegisterHarvestItems.SoLuong001.Value.ToString("N2"));
                        }
                        else
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[SoLuongKiemSoat]", GlobalHelper.InitializationString);
                        }
                        if (result.NgayGhiNhan != null)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayGhiNhan]", result.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                        }
                        else
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayGhiNhan]", GlobalHelper.InitializationString);
                        }
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument60(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string SoDot = planThamDinh.SoDot + "/" + planThamDinh.Nam;
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoDot]", SoDot);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy"));
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayGuiMau]", planThamDinh.NgayGuiMau.Value.ToString("dd/MM/yyyy"));

                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];
                            ThanhVien ThanhVien = await _ThanhVienService.GetByIDAsync(itemPlanThamDinhThanhVien.ThanhVienID.Value);
                            if (itemPlanThamDinhThanhVien.DanhMucChucDanhID == 9)
                            {
                                itemPlanThamDinhThanhVien.ThanhVienName = "Mời " + ThanhVien.Name + " cử người tham gia đoàn với tư cách là thành viên";
                            }
                            else
                            {
                                itemPlanThamDinhThanhVien.ThanhVienName = ThanhVien.Name + "-" + ThanhVien.DanhMucChucDanhName + "-" + ThanhVien.AgencyDepartmentName + ": " + itemPlanThamDinhThanhVien.DanhMucChucDanhName;
                            }
                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + ". " + itemPlanThamDinhThanhVien.ThanhVienName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(planThamDinh.ID);

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMauDistinct = listPlanThamDinhDanhMucLayMau.DistinctBy(item => item.DistrictDataID).ToList();

                        string KhuVuc = GlobalHelper.InitializationString;
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMauDistinct.Count; i++)
                        {
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMauDistinct[i];

                            KhuVuc = KhuVuc + ", " + itemPlanThamDinhDanhMucLayMau.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument61(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string SoDot = planThamDinh.SoDot + "/" + planThamDinh.Nam;
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoDot]", SoDot);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy"));
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayGuiMau]", planThamDinh.NgayGuiMau.Value.ToString("dd/MM/yyyy"));

                        string KhachMoi = GlobalHelper.InitializationString;
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];
                            ThanhVien ThanhVien = await _ThanhVienService.GetByIDAsync(itemPlanThamDinhThanhVien.ThanhVienID.Value);
                            if (itemPlanThamDinhThanhVien.DanhMucChucDanhID == 9)
                            {
                                KhachMoi = KhachMoi + ", " + itemPlanThamDinhThanhVien.ThanhVienName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhachMoi]", KhachMoi);

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(planThamDinh.ID);

                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMauDistinct = listPlanThamDinhDanhMucLayMau.DistinctBy(item => item.DistrictDataID).ToList();

                        string KhuVuc = GlobalHelper.InitializationString;
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMauDistinct.Count; i++)
                        {
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMauDistinct[i];
                            KhuVuc = KhuVuc + ", " + itemPlanThamDinhDanhMucLayMau.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);

                        StringBuilder KhuVucChanNuoi = new StringBuilder();
                        StringBuilder KhuVucTrongTrot = new StringBuilder();
                        StringBuilder ListPlanThamDinhDanhMucLayMauChanNuoi = new StringBuilder();
                        StringBuilder ListPlanThamDinhDanhMucLayMauTrongTrot = new StringBuilder();
                        int stt = GlobalHelper.InitializationNumber;
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                        {
                            stt = stt + 1;
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];

                            DanhMucLayMau DanhMucLayMau = await _DanhMucLayMauService.GetByIDAsync(itemPlanThamDinhDanhMucLayMau.DanhMucLayMauID.Value);

                            if (DanhMucLayMau.DanhMucLayMauPhanLoaiID == 1)
                            {
                                KhuVucChanNuoi.AppendLine("- Ngày " + itemPlanThamDinhDanhMucLayMau.NgayGhiNhan.Value.ToString("dd/MM/yyyy") + " trên địa bàn " + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                KhuVucChanNuoi.AppendLine("<br/>");
                                KhuVucChanNuoi.AppendLine("<br/>");

                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<tr>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("" + stt);
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauName);
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuName);
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("" + itemPlanThamDinhDanhMucLayMau.SoLuongLayMau);
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauChanNuoi.AppendLine("</tr>");
                            }
                            if (DanhMucLayMau.DanhMucLayMauPhanLoaiID == 2)
                            {
                                KhuVucTrongTrot.AppendLine("- Ngày " + itemPlanThamDinhDanhMucLayMau.NgayGhiNhan.Value.ToString("dd/MM/yyyy") + " trên địa bàn " + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                KhuVucTrongTrot.AppendLine("<br/>");
                                KhuVucTrongTrot.AppendLine("<br/>");

                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<tr>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("" + stt);
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauName);
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuName);
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("" + itemPlanThamDinhDanhMucLayMau.SoLuongLayMau);
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("<td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DistrictDataName);
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</td>");
                                ListPlanThamDinhDanhMucLayMauTrongTrot.AppendLine("</tr>");
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVucChanNuoi]", KhuVucChanNuoi.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVucTrongTrot]", KhuVucTrongTrot.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhDanhMucLayMauChanNuoi]", ListPlanThamDinhDanhMucLayMauChanNuoi.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhDanhMucLayMauTrongTrot]", ListPlanThamDinhDanhMucLayMauTrongTrot.ToString());
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument62(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string SoDot = planThamDinh.SoDot + "/" + planThamDinh.Nam;
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoDot]", SoDot);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);


                        List<PlanThamDinhDanhMucLayMau> listPlanThamDinhDanhMucLayMau = await _PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync(planThamDinh.ID);


                        StringBuilder ListPlanThamDinhDanhMucLayMau = new StringBuilder();

                        int stt = GlobalHelper.InitializationNumber;
                        for (int i = 0; i < listPlanThamDinhDanhMucLayMau.Count; i++)
                        {
                            stt = stt + 1;
                            PlanThamDinhDanhMucLayMau itemPlanThamDinhDanhMucLayMau = listPlanThamDinhDanhMucLayMau[i];
                            if (itemPlanThamDinhDanhMucLayMau.IsGoiY == false)
                            {
                                if (itemPlanThamDinhDanhMucLayMau.Active == true)
                                {
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<tr>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + stt);
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.CompanyInfoName);
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.Name + " [" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauName + "] (" + itemPlanThamDinhDanhMucLayMau.TypeName + ")");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuName);
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td style='text-align:right;'>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.KetQuaPhanTich.Value.ToString("N2") + " (" + itemPlanThamDinhDanhMucLayMau.Note + ")");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("<td style='text-align:right;'>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("" + itemPlanThamDinhDanhMucLayMau.GioiHanToiDa + " (" + itemPlanThamDinhDanhMucLayMau.Note + ")");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</td>");
                                    ListPlanThamDinhDanhMucLayMau.AppendLine("</tr>");
                                }
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhDanhMucLayMau]", ListPlanThamDinhDanhMucLayMau.ToString());

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument42(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                        List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByPlanThamDinhIDToListAsync(planThamDinh.ID);
                        string ListProductGroup = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                        {
                            ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);

                        StringBuilder ListPlanThamDinhCompaniesBanDau = new StringBuilder();
                        StringBuilder ListPlanThamDinhCompaniesCheBien = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies item = listPlanThamDinhCompanies[i];

                            if (item.Active == true)
                            {
                                int stt = i + 1;
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<tr>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"" + item.CompanyInfoName);
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"" + item.Note);
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"Bản cam kết: <b>" + item.HTMLContent + "</b> | Giấy chứng nhận: <b>" + item.Description + "</b>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</tr>");
                            }
                            else
                            {
                                int stt = i + 1;
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<tr>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"" + item.CompanyInfoName);
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"" + item.Note);
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"Bản cam kết: <b>" + item.HTMLContent + "</b> | Giấy chứng nhận: <b>" + item.Description + "</b>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</tr>");
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompaniesBanDau]", ListPlanThamDinhCompaniesBanDau.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompaniesCheBien]", ListPlanThamDinhCompaniesCheBien.ToString());

                        string NgayKy = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

                }


            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument63(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[Description]", planThamDinh.Description);

                        List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByPlanThamDinhIDToListAsync(planThamDinh.ID);
                        string ListProductGroup = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                        {
                            ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);

                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);

                        StringBuilder ListPlanThamDinhCompaniesBanDau = new StringBuilder();
                        StringBuilder ListPlanThamDinhCompaniesCheBien = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies item = listPlanThamDinhCompanies[i];

                            if (item.Active == true)
                            {
                                int stt = i + 1;
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<tr>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"" + item.CompanyInfoName);
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"" + item.Note);
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"Bản cam kết: <b>" + item.HTMLContent + "</b> | Giấy chứng nhận: <b>" + item.Description + "</b>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesCheBien.AppendLine(@"</tr>");
                            }
                            else
                            {
                                int stt = i + 1;
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<tr>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"" + item.CompanyInfoName);
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"" + item.Note);
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"<td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"Bản cam kết: <b>" + item.HTMLContent + "</b> | Giấy chứng nhận: <b>" + item.Description + "</b>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</td>");
                                ListPlanThamDinhCompaniesBanDau.AppendLine(@"</tr>");
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompaniesBanDau]", ListPlanThamDinhCompaniesBanDau.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompaniesCheBien]", ListPlanThamDinhCompaniesCheBien.ToString());



                        string NgayKy = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument64(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[Description]", planThamDinh.Description);

                        List<PlanThamDinhCompanyProductGroup> listPlanThamDinhCompanyProductGroup = await _PlanThamDinhCompanyProductGroupService.GetByPlanThamDinhIDToListAsync(planThamDinh.ID);
                        string ListProductGroup = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhCompanyProductGroup itemProductGroup in listPlanThamDinhCompanyProductGroup)
                        {
                            ListProductGroup = ListProductGroup + ", " + itemProductGroup.ProductGroupName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductGroup]", ListProductGroup);


                        string NgayKy = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument66(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(GlobalHelper.StateAgencyID);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = "ngày " + result.CreatedDate.Value.Day + " tháng " + result.CreatedDate.Value.Month + " năm " + result.CreatedDate.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);

                        string NgayKetThuc = "ngày " + result.LastUpdatedDate.Value.Day + " tháng " + result.LastUpdatedDate.Value.Month + " năm " + result.LastUpdatedDate.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", NgayKetThuc);

                        List<ProductInfo> listProductInfo = await _ProductInfoService.GetByBatDau_KetThucToListAsync(result.CreatedDate.Value, result.LastUpdatedDate.Value);


                        StringBuilder ListProductInfo = new StringBuilder();
                        for (int i = 0; i < listProductInfo.Count; i++)
                        {
                            ProductInfo item = listProductInfo[i];

                            if (item.Active == true)
                            {
                                int stt = i + 1;
                                ListProductInfo.AppendLine(@"<tr>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + stt);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.Code);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.CompanyInfoName);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.HTMLContent);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.Description);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.Name);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.Display);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.NgayGhiNhan.Value.ToString("dd/MM/yyyy"));
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"<td>");
                                ListProductInfo.AppendLine(@"" + item.Note);
                                ListProductInfo.AppendLine(@"</td>");
                                ListProductInfo.AppendLine(@"</tr>");
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListProductInfo]", ListProductInfo.ToString());
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument67(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string KhuVuc = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);

                        StringBuilder DoanThanhTra = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            int stt = i + 1;
                            PlanThamDinhThanhVien item = listPlanThamDinhThanhVien[i];

                            ThanhVien ThanhVien = await _ThanhVienService.GetByIDAsync(item.ThanhVienID.Value);

                            item.ThanhVienName = stt + ". " + ThanhVien.Name + "-" + ThanhVien.DanhMucChucDanhName + "-" + ThanhVien.StateAgencyName + ": " + item.DanhMucChucDanhName;
                            DoanThanhTra.AppendLine(@"" + item.ThanhVienName);
                            DoanThanhTra.AppendLine(@"<br/>");
                            DoanThanhTra.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThanhTra]", DoanThanhTra.ToString());

                        StringBuilder ListPlanThamDinhCompanies = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies item = listPlanThamDinhCompanies[i];


                            int stt = i + 1;
                            ListPlanThamDinhCompanies.AppendLine(@"<tr>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + stt);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.CompanyInfoName + " (" + item.TypeName + ")");
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.Description);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.HTMLContent);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.Display);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"");
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompanies]", ListPlanThamDinhCompanies.ToString());

                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);


                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument68(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);

                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[TruongDoan]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[LanhDao]", result.ThanhVienName001);

                        string KhuVuc = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);





                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);

                        string NgayKetThuc = planThamDinh.NgayKetThuc.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", NgayKetThuc);

                        string NgayGuiMau = planThamDinh.NgayGuiMau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayGuiMau]", NgayGuiMau);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument69(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[TruongDoan]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[LanhDao]", result.ThanhVienName001);





                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);




                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument70(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyDiaChi]", stateAgency.Note);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyDienThoai]", stateAgency.Display);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[TruongDoan]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[LanhDao]", result.ThanhVienName001);

                        StringBuilder ListPlanThamDinhCompanies = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies item = listPlanThamDinhCompanies[i];


                            int stt = i + 1;
                            ListPlanThamDinhCompanies.AppendLine(@"<tr>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + stt);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.CompanyInfoName + " (" + item.TypeName + ")");
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.Description);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.HTMLContent);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"" + item.Display);
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"<td>");
                            ListPlanThamDinhCompanies.AppendLine(@"");
                            ListPlanThamDinhCompanies.AppendLine(@"</td>");
                            ListPlanThamDinhCompanies.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompanies]", ListPlanThamDinhCompanies.ToString());


                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument71(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[TruongDoan]", result.ThanhVienName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[LanhDao]", result.ThanhVienName001);





                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument72(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);
                        List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(planThamDinh.ID);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string KhuVuc = GlobalHelper.InitializationString;
                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);

                        int stt = GlobalHelper.InitializationNumber;
                        StringBuilder ListPlanThamDinhCompanies = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanies.Count; i++)
                        {
                            PlanThamDinhCompanies item = listPlanThamDinhCompanies[i];



                            if (item.Active == true)
                            {

                            }
                            else
                            {
                                stt = stt + 1;
                                string NoiDung = GlobalHelper.InitializationString;
                                CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(item.CompanyInfoID.Value);
                                companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                                NoiDung = stt + ". " + companyInfo.Name + ". Địa chỉ: " + companyInfo.address + ". (Hành vi vi phạm:" + item.Note + ")";
                                ListPlanThamDinhCompanies.AppendLine(@"" + NoiDung);
                                ListPlanThamDinhCompanies.AppendLine(@"<br/>");
                                ListPlanThamDinhCompanies.AppendLine(@"<br/>");
                            }

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListPlanThamDinhCompanies]", ListPlanThamDinhCompanies.ToString());

                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);
                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument77(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyDiaChi]", stateAgency.Note);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string KhuVuc = GlobalHelper.InitializationString;
                        StringBuilder DanhSachKhuVuc = new StringBuilder();

                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);


                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);

                        string NgayKetThuc = planThamDinh.NgayKetThuc.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", NgayKetThuc);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument78(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string KhuVuc = GlobalHelper.InitializationString;
                        StringBuilder DanhSachKhuVuc = new StringBuilder();

                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                            item.DistrictDataName = "- Ngày " + item.NgayGhiNhan.Value.ToString("dd/MM/yyyy") + ": kiểm tra trên địa bàn " + item.DistrictDataName;
                            DanhSachKhuVuc.AppendLine(@"" + item.DistrictDataName);
                            DanhSachKhuVuc.AppendLine(@"<br/>");
                            DanhSachKhuVuc.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachKhuVuc]", DanhSachKhuVuc.ToString());

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument79(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        if (result.ParentID > 0)
                        {
                            PlanThamDinhCompanies PlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);
                            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(PlanThamDinhCompanies.CompanyInfoID.Value);
                            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                            result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);

                            string NgayGhiNhan = PlanThamDinhCompanies.NgayGhiNhan.Value.ToString("dd/MM/yyyy");
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayGhiNhan]", NgayThongBao);

                            int stt = GlobalHelper.InitializationNumber;
                            StringBuilder DoanKiemTra = new StringBuilder();
                            for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                            {
                                stt = stt + 1;
                                PlanThamDinhThanhVien item = listPlanThamDinhThanhVien[i];

                                ThanhVien ThanhVien = await _ThanhVienService.GetByIDAsync(item.ThanhVienID.Value);

                                item.ThanhVienName = stt + ". " + ThanhVien.Name + "-" + ThanhVien.DanhMucChucDanhName + "-" + ThanhVien.StateAgencyName + ": " + item.DanhMucChucDanhName;
                                DoanKiemTra.AppendLine(@"" + item.ThanhVienName);
                                DoanKiemTra.AppendLine(@"<br/>");
                                DoanKiemTra.AppendLine(@"<br/>");
                            }
                            stt = stt + 1;
                            DoanKiemTra.AppendLine(stt + @". Đại diện Phòng Nông nghiệp và Phát triển nông thôn" + companyInfo.DistrictDataName);
                            DoanKiemTra.AppendLine(@"<br/>");
                            DoanKiemTra.AppendLine(@"<br/>");
                            result.HTMLContent = result.HTMLContent.Replace(@"[DoanKiemTra]", DoanKiemTra.ToString());

                            result.Name = result.Name + "-" + companyInfo.Name;

                        }
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument80(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhDistrictData> listPlanThamDinhDistrictData = await _PlanThamDinhDistrictDataService.GetByParentIDToListAsync(planThamDinh.ID);


                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyDiaChi]", stateAgency.Note);
                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string KhuVuc = GlobalHelper.InitializationString;
                        StringBuilder DanhSachKhuVuc = new StringBuilder();

                        foreach (PlanThamDinhDistrictData item in listPlanThamDinhDistrictData)
                        {
                            KhuVuc = KhuVuc + ", " + item.DistrictDataName;
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[KhuVuc]", KhuVuc);


                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayBatDau = planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayBatDau]", NgayBatDau);

                        string NgayKetThuc = planThamDinh.NgayKetThuc.Value.ToString("dd/MM/yyyy");
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayKetThuc]", NgayKetThuc);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }


                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument81(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        if (result.ParentID > 0)
                        {
                            PlanThamDinhCompanies PlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);
                            result.Name = result.Name + "-" + PlanThamDinhCompanies.CompanyInfoName;

                        }
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }
                }

                result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                var physicalPath = Path.Combine(folderPath, result.FileName);
                bool isFolderExists = System.IO.Directory.Exists(folderPath);
                if (!isFolderExists)
                {
                    System.IO.Directory.CreateDirectory(folderPath);
                }
                using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(result.HTMLContent);
                    }
                }
                result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

            }
            return result;
        }


        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument90(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(result.ParentID.Value);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await _PlanThamDinhCompanyBienBanService.GetSQLByParentID_DanhMucProductGroupIDToListAsync(planThamDinhCompanies.ID, documentTemplate.DanhMucProductGroupID.Value);

                        if (result.CompanyInfoDonViDongGoiID != null)
                        {
                            CompanyInfoDonViDongGoi companyInfoDonViDongGoi = await _CompanyInfoDonViDongGoiService.GetByIDAsync(planThamDinhCompanies.CompanyInfoDonViDongGoiID.Value);

                            result.HTMLContent = result.HTMLContent.Replace(@"[DienTich]", companyInfoDonViDongGoi.DienTich.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[CongSuatToiDa]", companyInfoDonViDongGoi.CongSuatToiDa.ToString());


                            List<CompanyInfoDonViDongGoiSanPham> listCompanyInfoDonViDongGoiSanPham = await _CompanyInfoDonViDongGoiSanPhamService.GetByParentIDToListAsync(companyInfoDonViDongGoi.ID);
                            StringBuilder lisSanPham = new StringBuilder();
                            for (int i = 0; i < listCompanyInfoDonViDongGoiSanPham.Count; i++)
                            {
                                int stt = i + 1;
                                if (i < listCompanyInfoDonViDongGoiSanPham.Count - 1)
                                {
                                    lisSanPham.AppendLine(listCompanyInfoDonViDongGoiSanPham[i].Name + @",");
                                }
                                else
                                {
                                    lisSanPham.AppendLine(listCompanyInfoDonViDongGoiSanPham[i].Name);
                                }
                            }
                            //result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachSanPham]", lisSanPham.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachSanPham]", companyInfoDonViDongGoi.SanPham);

                            List<CompanyInfoDonViDongGoiThiTruong> listCompanyInfoDonViDongGoiThiTruong = await _CompanyInfoDonViDongGoiThiTruongService.GetByParentIDToListAsync(companyInfoDonViDongGoi.ID);
                            StringBuilder lisThiTruong = new StringBuilder();
                            for (int i = 0; i < listCompanyInfoDonViDongGoiThiTruong.Count; i++)
                            {
                                int stt = i + 1;
                                if (i < listCompanyInfoDonViDongGoiThiTruong.Count - 1)
                                {
                                    lisThiTruong.AppendLine(listCompanyInfoDonViDongGoiThiTruong[i].Name + @",");
                                }
                                else
                                {
                                    lisThiTruong.AppendLine(listCompanyInfoDonViDongGoiThiTruong[i].Name);
                                }
                            }
                            //result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThiTruong]", lisThiTruong.ToString());
                            result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachThiTruong]", companyInfoDonViDongGoi.ThiTruong);
                        }

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[HinhThucThamDinh]", planThamDinhCompanies.DanhMucATTPLoaiHoSoName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", companyInfo.fullname);



                        StringBuilder ListCompany = new StringBuilder();
                        ListCompany.AppendLine("1) " + companyInfo.role_name + @": " + companyInfo.fullname);
                        ListCompany.AppendLine(@"<br/>");
                        result.HTMLContent = result.HTMLContent.Replace(@"[ListCompany]", ListCompany.ToString());


                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];

                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + @". Ông/Bà: " + @": " + itemPlanThamDinhThanhVien.ThanhVienName + @". Chức vụ: " + itemPlanThamDinhThanhVien.DanhMucChucDanhName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());



                        StringBuilder NhomChiTieuDanhGia = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                        {
                            PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                            NhomChiTieuDanhGia.AppendLine(@"<tr>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Name);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Description);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID != 1)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Note);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.HTMLContent);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[NhomChiTieuDanhGia]", NhomChiTieuDanhGia.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[TongChiTieu]", listPlanThamDinhCompanyBienBan.Count.ToString());


                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }

                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }
                }

                result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                var physicalPath = Path.Combine(folderPath, result.FileName);
                bool isFolderExists = System.IO.Directory.Exists(folderPath);
                if (!isFolderExists)
                {
                    System.IO.Directory.CreateDirectory(folderPath);
                }
                using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(result.HTMLContent);
                    }
                }
                result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);

            }
            return result;
        }

        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument91(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    result.HTMLContent = documentTemplate.HTMLContent;

                    try
                    {

                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }
                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }



            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument84(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);


                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", companyInfo.DKKDNgayCap.Value.ToString("dd/MM/yyyy"));
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyEmail]", companyInfo.email);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyCoSoNuoiMa]", companyInfo.CoSoNuoiMa);


                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        List<CompanyLake> listCompanyLake = await _CompanyLakeService.GetByParentIDToListAsync(companyInfo.ID);

                        StringBuilder DanhSachAoHo = new StringBuilder();
                        int stt = GlobalHelper.InitializationNumber;
                        foreach (CompanyLake item in listCompanyLake)
                        {
                            item.address = item.address + ", " + item.WardDataName + ", " + item.DistrictDataName + ", " + item.ProvinceDataName;
                            stt = stt + 1;
                            DanhSachAoHo.AppendLine(@"<tr>");
                            DanhSachAoHo.AppendLine(@"<td>");
                            DanhSachAoHo.AppendLine(@"" + stt);
                            DanhSachAoHo.AppendLine(@"</td>");
                            DanhSachAoHo.AppendLine(@"<td>");
                            DanhSachAoHo.AppendLine(@"" + item.Code);
                            DanhSachAoHo.AppendLine(@"</td>");
                            DanhSachAoHo.AppendLine(@"<td>");
                            DanhSachAoHo.AppendLine(@"" + item.Name);
                            DanhSachAoHo.AppendLine(@"</td>");
                            DanhSachAoHo.AppendLine(@"<td style='text-align: right;'>");
                            DanhSachAoHo.AppendLine(@"" + item.acreage.Value.ToString("N1"));
                            DanhSachAoHo.AppendLine(@"</td>");
                            DanhSachAoHo.AppendLine(@"<td>");
                            DanhSachAoHo.AppendLine(@"" + item.address);
                            DanhSachAoHo.AppendLine(@"</td>");
                            DanhSachAoHo.AppendLine(@"</tr>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhSachAoHo]", DanhSachAoHo.ToString());
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument87(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SanPham]", planThamDinh.Display);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);

                        string NgayHetHan = "ngày " + planThamDinh.NgayKetThuc.Value.Day + " tháng " + planThamDinh.NgayKetThuc.Value.Month + " năm " + planThamDinh.NgayKetThuc.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayHetHan]", NgayHetHan);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument88(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    try
                    {
                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        result.HTMLContent = documentTemplate.HTMLContent;

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);

                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SanPham]", planThamDinh.Display);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SoThongBao]", result.Description);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);

                        string NgayThongBao = "ngày " + result.NgayGhiNhan.Value.Day + " tháng " + result.NgayGhiNhan.Value.Month + " năm " + result.NgayGhiNhan.Value.Year;
                        result.HTMLContent = result.HTMLContent.Replace(@"[NgayThongBao]", NgayThongBao);
                    }
                    catch (Exception ex)
                    {
                        string message = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }
        private async Task<PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument89(PlanThamDinhCompanyDocument result)
        {
            DocumentTemplate documentTemplate = await _DocumentTemplateService.GetByIDAsync(result.DocumentTemplateID.Value);
            if (documentTemplate.ID > 0)
            {
                if (!string.IsNullOrEmpty(documentTemplate.HTMLContent))
                {
                    try
                    {
                        result.HTMLContent = documentTemplate.HTMLContent;

                        PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(result.PlanThamDinhID.Value);
                        List<PlanThamDinhThanhVien> listPlanThamDinhThanhVien = await _PlanThamDinhThanhVienService.GetByParentIDToListAsync(planThamDinh.ID);

                        CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinh.CompanyInfoID.Value);
                        companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

                        StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
                        StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

                        List<PlanThamDinhCompanyBienBan> listPlanThamDinhCompanyBienBan = await _PlanThamDinhCompanyBienBanService.GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync(planThamDinh.ID, planThamDinh.DanhMucProductGroupID.Value);

                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[StateAgencyName]", stateAgency.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyName]", companyInfo.Name);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyAddress]", companyInfo.address);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKD]", companyInfo.DKKD);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNoiCap]", companyInfo.business_number_place);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyPhone]", companyInfo.phone);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DienTichNuoiTrong]", companyInfo.CoSoNuoiDienTichNuoiTrong.Value.ToString("N1"));
                        result.HTMLContent = result.HTMLContent.Replace(@"[DanhMucHinhThucNuoiName]", companyInfo.DanhMucHinhThucNuoiName);
                        result.HTMLContent = result.HTMLContent.Replace(@"[CompanyFax]", GlobalHelper.InitializationString);
                        result.HTMLContent = result.HTMLContent.Replace(@"[DaiDienCoSo]", result.Display);

                        result.HTMLContent = result.HTMLContent.Replace(@"[SanPham]", planThamDinh.Display);

                        string ChucDanh = GlobalHelper.InitializationString;
                        string ChucDanhNguoiKy = GlobalHelper.InitializationString;
                        if (result.Active == true)
                        {
                            ChucDanh = "KT.";
                            ThanhVien NguoiKy = await _ThanhVienService.GetByIDAsync(result.ThanhVienID.Value);
                            if (NguoiKy != null)
                            {
                                ChucDanhNguoiKy = NguoiKy.DanhMucChucDanhName;
                            }
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanh]", ChucDanh);
                        result.HTMLContent = result.HTMLContent.Replace(@"[ChucDanhNguoiKy]", ChucDanhNguoiKy);
                        result.HTMLContent = result.HTMLContent.Replace(@"[NguoiKy]", result.ThanhVienName);


                        StringBuilder DoanThamDinh = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhThanhVien.Count; i++)
                        {
                            PlanThamDinhThanhVien itemPlanThamDinhThanhVien = listPlanThamDinhThanhVien[i];

                            int stt = i + 1;
                            DoanThamDinh.AppendLine(stt + ") " + itemPlanThamDinhThanhVien.DanhMucChucDanhName + @": " + itemPlanThamDinhThanhVien.ThanhVienName);
                            DoanThamDinh.AppendLine(@"<br/>");
                            DoanThamDinh.AppendLine(@"<br/>");
                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[DoanThamDinh]", DoanThamDinh.ToString());

                        StringBuilder NhomChiTieuDanhGia = new StringBuilder();
                        for (int i = 0; i < listPlanThamDinhCompanyBienBan.Count; i++)
                        {
                            PlanThamDinhCompanyBienBan itemPlanThamDinhCompanyBienBan = listPlanThamDinhCompanyBienBan[i];

                            int stt = i + 1;
                            NhomChiTieuDanhGia.AppendLine(@"<tr>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + stt);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Name);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Description);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 1)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 2)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 3)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            if (itemPlanThamDinhCompanyBienBan.DanhMucThamDinhKetQuaDanhGiaID == 4)
                            {
                                NhomChiTieuDanhGia.AppendLine(@"<div style='font-size: 14px; text-align: center;'>X</div>");
                            }
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"<br/>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.Note);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"<td>");
                            NhomChiTieuDanhGia.AppendLine(@"" + itemPlanThamDinhCompanyBienBan.HTMLContent);
                            NhomChiTieuDanhGia.AppendLine(@"</td>");
                            NhomChiTieuDanhGia.AppendLine(@"</tr>");

                        }
                        result.HTMLContent = result.HTMLContent.Replace(@"[NhomChiTieuDanhGia]", NhomChiTieuDanhGia.ToString());
                        result.HTMLContent = result.HTMLContent.Replace(@"[TongChiTieu]", listPlanThamDinhCompanyBienBan.Count.ToString());

                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayThamDinh]", planThamDinh.NgayBatDau.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[ChiTieu]", planThamDinh.ChiTieuDanhGiaCount.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[XepLoai]", planThamDinh.DanhMucATTPXepLoaiName);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", companyInfo.MS.Value.ToString());
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyMS]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", companyInfo.DKKDNgayCap.Value.ToString("dd/MM/yyyy"));
                        }
                        catch (Exception ex)
                        {
                            result.HTMLContent = result.HTMLContent.Replace(@"[CompanyDKKDNgayCap]", GlobalHelper.InitializationString);
                            string message = ex.Message;
                        }
                        try
                        {
                            DateTime now = result.NgayGhiNhan.Value;
                            string NgayKy = "ngày " + now.Day + " tháng " + now.Month + " năm " + now.Year;
                            result.HTMLContent = result.HTMLContent.Replace(@"[NgayKy]", NgayKy);
                        }
                        catch (Exception ex)
                        {
                            string message = ex.Message;
                        }
                    }
                    catch (Exception ex)
                    {
                        string mes = ex.Message;
                    }

                    result.FileName = result.GetType().Name + "_" + result.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + ".html";
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, result.GetType().Name);
                    var physicalPath = Path.Combine(folderPath, result.FileName);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
                    {
                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                        {
                            w.WriteLine(result.HTMLContent);
                        }
                    }
                    result.FileName = GlobalHelper.APISite + "/" + result.GetType().Name + "/" + result.FileName;
                    result = await _PlanThamDinhCompanyDocumentService.SaveAsync(result);
                }
            }
            return result;
        }

        [HttpPost]
        [Route("GetByParentID_ThanhVienID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_ThanhVienID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByParentID_ThanhVienID_DocumentTemplateIDAsync(model.ParentID.Value, model.ThanhVienID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByParentID_DocumentTemplateIDAsync(model.ParentID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDToListAsync()
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByPlanThamDinhIDToListAsync(model.PlanThamDinhID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhIDAndEmptyToListAsync")]
        public async Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDAndEmptyToListAsync()
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByPlanThamDinhIDAndEmptyToListAsync(model.PlanThamDinhID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync(model.ParentID.Value, model.PlanTypeID.Value, model.DanhMucProductGroupID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanThamDinhID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByPlanThamDinhID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByPlanThamDinhID_DocumentTemplateIDAsync(model.PlanThamDinhID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByRegisterHarvestIDToListAsync")]
        public async Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDToListAsync()
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByRegisterHarvestIDToListAsync(model.RegisterHarvestID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByRegisterHarvestIDAndEmptyToListAsync")]
        public async Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDAndEmptyToListAsync()
        {
            List<PlanThamDinhCompanyDocument> result = new List<PlanThamDinhCompanyDocument>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByRegisterHarvestIDAndEmptyToListAsync(model.RegisterHarvestID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByRegisterHarvestID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByRegisterHarvestID_DocumentTemplateIDAsync(model.RegisterHarvestID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByRegisterHarvestItemsID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestItemsID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByRegisterHarvestItemsID_DocumentTemplateIDAsync(model.RegisterHarvestItemsID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPlanTypeID_DocumentTemplateIDAsync")]
        public async Task<PlanThamDinhCompanyDocument> GetByPlanTypeID_DocumentTemplateIDAsync()
        {
            PlanThamDinhCompanyDocument result = new PlanThamDinhCompanyDocument();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _PlanThamDinhCompanyDocumentService.GetByPlanTypeID_DocumentTemplateIDAsync(model.PlanTypeID.Value, model.DocumentTemplateID.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
    }
}


