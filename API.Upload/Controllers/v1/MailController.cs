namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class MailController : BaseController<PlanThamDinhCompanies, IPlanThamDinhCompaniesService>
    {
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        private readonly IWebHostEnvironment _WebHostEnvironment;


        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly ICompanyInfoService _CompanyInfoService;
        public MailController(IPlanThamDinhCompaniesService PlanThamDinhCompaniesService, IWebHostEnvironment WebHostEnvironment

            , IPlanThamDinhService PlanThamDinhService
            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService

            , IStateAgencyService StateAgencyService
            , ICompanyInfoService CompanyInfoService

            ) : base(PlanThamDinhCompaniesService, WebHostEnvironment)
        {
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
            _WebHostEnvironment = WebHostEnvironment;

            _PlanThamDinhService = PlanThamDinhService;
            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;

            _StateAgencyService = StateAgencyService;
            _CompanyInfoService = CompanyInfoService;
        }

        [HttpPost]
        [Route("AnToanThucPhamThamDinhThongBaoByPlanThamDinhIDAsync")]
        public async Task<bool> AnToanThucPhamThamDinhThongBaoByPlanThamDinhIDAsync()
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByParentIDToListAsync(model.ID);
                foreach (PlanThamDinhCompanies itemPlanThamDinhCompanies in listPlanThamDinhCompanies)
                {
                    await PlanThamDinhSendEmailThongBaoByPlanThamDinhCompanies(itemPlanThamDinhCompanies.ID);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("AnToanThucPhamThamDinhThongBaoByPlanThamDinhCompaniesIDAsync")]
        public async Task<bool> AnToanThucPhamThamDinhThongBaoByPlanThamDinhCompaniesIDAsync()
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                await PlanThamDinhSendEmailThongBaoByPlanThamDinhCompanies(model.ID);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync")]
        public async Task<bool> AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync()
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                await PlanThamDinhSendEmailKetQuaByPlanThamDinhCompanies(model.ID);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        private async Task<string> PlanThamDinhSendEmailThongBaoByPlanThamDinhCompanies(long planThamDinhCompaniesID)
        {
            string result = GlobalHelper.InitializationString;
            PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(planThamDinhCompaniesID);

            PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(planThamDinhCompanies.ParentID.Value);
            StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
            StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

            Helper.Model.Mail mail = new Helper.Model.Mail();
            mail.MailFrom = GlobalHelper.MasterEmailUser;
            mail.UserName = GlobalHelper.MasterEmailUser;
            mail.Password = GlobalHelper.MasterEmailPassword;
            mail.SMTPPort = GlobalHelper.SMTPPort;
            mail.SMTPServer = GlobalHelper.SMTPServer;
            mail.IsMailBodyHtml = GlobalHelper.IsMailBodyHtml;
            mail.IsMailUsingSSL = GlobalHelper.IsMailUsingSSL;
            mail.Display = GlobalHelper.MasterEmailDisplay;
            mail.Subject = companyInfo.Name + ": Về Thông báo Thẩm định An toàn thực phẩm - " + GlobalHelper.InitializationDateTime.ToString("dd/MM/yyyy hh:mm:ss");

            mail.MailTo = companyInfo.email;

            //mail.MailTo = "digitalkingdomplus@gmail.com";
            
            if (!string.IsNullOrEmpty(mail.MailTo))
            {
                string contentHTML = GlobalHelper.InitializationString;
                var physicalPathRead = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, "EmailAnToanThucPhamThamDinhThongBao.html");
                using (FileStream fs = new FileStream(physicalPathRead, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        contentHTML = r.ReadToEnd();
                    }
                }
                contentHTML = contentHTML.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                contentHTML = contentHTML.Replace(@"[StateAgencyName]", stateAgency.Name);
                contentHTML = contentHTML.Replace("[CompanyInfoName]", companyInfo.Name);
                contentHTML = contentHTML.Replace("[CompanyInfoDKKD]", companyInfo.DKKD);
                contentHTML = contentHTML.Replace("[CompanyInfoAddress]", companyInfo.address);
                contentHTML = contentHTML.Replace("[CompanyInfoPhone]", companyInfo.phone);

                try
                {
                    string NgayGhiNhan = "ngày " + planThamDinhCompanies.NgayGhiNhan.Value.Day + " tháng " + planThamDinhCompanies.NgayGhiNhan.Value.Month + " năm " + planThamDinhCompanies.NgayGhiNhan.Value.Year;
                    contentHTML = contentHTML.Replace("[NgayGhiNhan]", NgayGhiNhan);
                }
                catch (Exception ex)
                {
                    contentHTML = contentHTML.Replace("[NgayGhiNhan]", companyInfo.phone);
                    string msg = ex.Message;
                }
               
                mail.Content = contentHTML;
                MailHelper.SendMail(mail);
            }
            return result;
        }
        private async Task<string> PlanThamDinhSendEmailKetQuaByPlanThamDinhCompanies(long planThamDinhCompaniesID)
        {
            string result = GlobalHelper.InitializationString;
            PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByIDAsync(planThamDinhCompaniesID);

            PlanThamDinh planThamDinh = await _PlanThamDinhService.GetByIDAsync(planThamDinhCompanies.ParentID.Value);
            StateAgency stateAgency = await _StateAgencyService.GetByIDAsync(planThamDinh.StateAgencyID.Value);
            StateAgency stateAgencyParent = await _StateAgencyService.GetByIDAsync(stateAgency.ParentID.Value);

            CompanyInfo companyInfo = await _CompanyInfoService.GetByIDAsync(planThamDinhCompanies.CompanyInfoID.Value);
            companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;

            Helper.Model.Mail mail = new Helper.Model.Mail();
            mail.MailFrom = GlobalHelper.MasterEmailUser;
            mail.UserName = GlobalHelper.MasterEmailUser;
            mail.Password = GlobalHelper.MasterEmailPassword;
            mail.SMTPPort = GlobalHelper.SMTPPort;
            mail.SMTPServer = GlobalHelper.SMTPServer;
            mail.IsMailBodyHtml = GlobalHelper.IsMailBodyHtml;
            mail.IsMailUsingSSL = GlobalHelper.IsMailUsingSSL;
            mail.Display = GlobalHelper.MasterEmailDisplay;
            mail.Subject = companyInfo.Name + ": Về Kết quả Thẩm định An toàn thực phẩm - " + GlobalHelper.InitializationDateTime.ToString("dd/MM/yyyy hh:mm:ss");

            mail.MailTo = companyInfo.email;

            mail.MailTo = "digitalkingdomplus@gmail.com";

            if (!string.IsNullOrEmpty(mail.MailTo))
            {
                string contentHTML = GlobalHelper.InitializationString;
                var physicalPathRead = Path.Combine(_WebHostEnvironment.WebRootPath, GlobalHelper.Download, "EmailAnToanThucPhamThamDinhKetQua.html");
                using (FileStream fs = new FileStream(physicalPathRead, FileMode.Open))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        contentHTML = r.ReadToEnd();
                    }
                }
                contentHTML = contentHTML.Replace(@"[StateAgencyParentName]", stateAgencyParent.Name);
                contentHTML = contentHTML.Replace(@"[StateAgencyName]", stateAgency.Name);
                contentHTML = contentHTML.Replace("[CompanyInfoName]", companyInfo.Name);
                contentHTML = contentHTML.Replace("[CompanyInfoDKKD]", companyInfo.DKKD);
                contentHTML = contentHTML.Replace("[CompanyInfoAddress]", companyInfo.address);
                contentHTML = contentHTML.Replace("[CompanyInfoPhone]", companyInfo.phone);
                contentHTML = contentHTML.Replace("[DanhMucATTPXepLoaiName]", planThamDinhCompanies.DanhMucATTPXepLoaiName);

                StringBuilder contentListPlanThamDinhCompanyDocument = new StringBuilder();

                List<PlanThamDinhCompanyDocument> ListPlanThamDinhCompanyDocument = await _PlanThamDinhCompanyDocumentService.GetByParentIDToListAsync(planThamDinhCompanies.ID);
                foreach (PlanThamDinhCompanyDocument itemPlanThamDinhCompanyDocument in ListPlanThamDinhCompanyDocument)
                {
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"<tr>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"<td>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"Tải về");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"</td>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"<td>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"<a href='"+ itemPlanThamDinhCompanyDocument.FileName + "'><b>"+ itemPlanThamDinhCompanyDocument.Name + "</b></a>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"</td>");
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"</tr>");                
                }
                contentHTML = contentHTML.Replace("[ListPlanThamDinhCompanyDocument]", contentListPlanThamDinhCompanyDocument.ToString());

                try
                {
                    string NgayGhiNhan = "ngày " + planThamDinhCompanies.NgayGhiNhan.Value.Day + " tháng " + planThamDinhCompanies.NgayGhiNhan.Value.Month + " năm " + planThamDinhCompanies.NgayGhiNhan.Value.Year;
                    contentHTML = contentHTML.Replace("[NgayGhiNhan]", NgayGhiNhan);
                }
                catch (Exception ex)
                {
                    contentHTML = contentHTML.Replace("[NgayGhiNhan]", companyInfo.phone);
                    string msg = ex.Message;
                }

                mail.Content = contentHTML;
                MailHelper.SendMail(mail);
            }
            return result;
        }
    }
}

