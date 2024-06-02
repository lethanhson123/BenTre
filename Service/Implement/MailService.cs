
namespace Service.Implement
{
    public class MailService : BaseService<PlanThamDinhCompanies, IPlanThamDinhCompaniesRepository>
    , IMailService
    {
        private readonly IPlanThamDinhCompaniesRepository _PlanThamDinhCompaniesRepository;

        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IPlanThamDinhCompanyDocumentService _PlanThamDinhCompanyDocumentService;

        private readonly IStateAgencyService _StateAgencyService;
        private readonly ICompanyInfoService _CompanyInfoService;

        public MailService(IPlanThamDinhCompaniesRepository PlanThamDinhCompaniesRepository

            , IPlanThamDinhService PlanThamDinhService
            , IPlanThamDinhCompanyDocumentService PlanThamDinhCompanyDocumentService

            , IStateAgencyService StateAgencyService
            , ICompanyInfoService CompanyInfoService

            ) : base(PlanThamDinhCompaniesRepository)
        {
            _PlanThamDinhCompaniesRepository = PlanThamDinhCompaniesRepository;

            _PlanThamDinhService = PlanThamDinhService;
            _PlanThamDinhCompanyDocumentService = PlanThamDinhCompanyDocumentService;

            _StateAgencyService = StateAgencyService;
            _CompanyInfoService = CompanyInfoService;
        }
        public async Task<bool> AnToanThucPhamThamDinhThongBaoByPlanThamDinhIDAsync(long ID)
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {                
                List<PlanThamDinhCompanies> listPlanThamDinhCompanies = await GetByParentIDToListAsync(ID);
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
        public async Task<bool> AnToanThucPhamThamDinhThongBaoByPlanThamDinhCompaniesIDAsync(long ID)
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {                
                await PlanThamDinhSendEmailThongBaoByPlanThamDinhCompanies(ID);
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public async Task<bool> AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync(long ID)
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {                
                await PlanThamDinhSendEmailKetQuaByPlanThamDinhCompanies(ID);
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
            PlanThamDinhCompanies planThamDinhCompanies = await GetByIDAsync(planThamDinhCompaniesID);

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
                var physicalPathRead = Path.Combine(GlobalHelper.FTPFull, GlobalHelper.Download, "EmailAnToanThucPhamThamDinhThongBao.html");
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
            PlanThamDinhCompanies planThamDinhCompanies = await GetByIDAsync(planThamDinhCompaniesID);

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
                var physicalPathRead = Path.Combine(GlobalHelper.FTPFull, GlobalHelper.Download, "EmailAnToanThucPhamThamDinhKetQua.html");
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
                    contentListPlanThamDinhCompanyDocument.AppendLine(@"<a href='" + itemPlanThamDinhCompanyDocument.FileName + "'><b>" + itemPlanThamDinhCompanyDocument.Name + "</b></a>");
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

