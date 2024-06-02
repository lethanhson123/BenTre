namespace API.Controllers.v1
{
    [ApiController]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiVersion("1.0")]
    public class CompanyInfoLichSuKiemTraController : BaseController<CompanyInfoLichSuKiemTra, ICompanyInfoLichSuKiemTraService>
    {
        private readonly ICompanyInfoLichSuKiemTraService _CompanyInfoLichSuKiemTraService;
        private readonly IWebHostEnvironment _WebHostEnvironment;

        private readonly IPlanThamDinhService _PlanThamDinhService;
        private readonly IPlanThamDinhCompaniesService _PlanThamDinhCompaniesService;
        public CompanyInfoLichSuKiemTraController(ICompanyInfoLichSuKiemTraService CompanyInfoLichSuKiemTraService, IWebHostEnvironment WebHostEnvironment

            , IPlanThamDinhService PlanThamDinhService
            , IPlanThamDinhCompaniesService PlanThamDinhCompaniesService

            ) : base(CompanyInfoLichSuKiemTraService, WebHostEnvironment)
        {
            _CompanyInfoLichSuKiemTraService = CompanyInfoLichSuKiemTraService;
            _WebHostEnvironment = WebHostEnvironment;

            _PlanThamDinhService = PlanThamDinhService;
            _PlanThamDinhCompaniesService = PlanThamDinhCompaniesService;
        }
        [HttpPost]
        [Route("GetByParentID_NamToListAsync")]
        public async Task<List<CompanyInfoLichSuKiemTra>> GetByParentID_NamToListAsync()
        {
            List<CompanyInfoLichSuKiemTra> result = new List<CompanyInfoLichSuKiemTra>();
            try
            {
                BaseParameter model = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _CompanyInfoLichSuKiemTraService.GetByParentID_NamToListAsync(model.ParentID.Value, model.Nam.Value);
            }
            catch (Exception ex)
            {
                string mes = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("SyncAsync")]
        public async Task<int> SyncAsync()
        {
            int result = GlobalHelper.InitializationNumber;
            try
            {
                List<CompanyInfoLichSuKiemTra> listCompanyInfoLichSuKiemTra = await _CompanyInfoLichSuKiemTraService.GetAllToListAsync();
                foreach (CompanyInfoLichSuKiemTra itemCompanyInfoLichSuKiemTra in listCompanyInfoLichSuKiemTra)
                {
                    PlanThamDinhCompanies planThamDinhCompanies = await _PlanThamDinhCompaniesService.GetByCompanyInfoID_NgayGhiNhanAsync(itemCompanyInfoLichSuKiemTra.ParentID.Value, itemCompanyInfoLichSuKiemTra.NgayGhiNhan.Value);
                    if (planThamDinhCompanies == null)
                    {
                        PlanThamDinh planThamDinh = new PlanThamDinh();
                        planThamDinh.NgayBatDau = itemCompanyInfoLichSuKiemTra.NgayGhiNhan;
                        planThamDinh.Name = itemCompanyInfoLichSuKiemTra.Name;
                        await _PlanThamDinhService.SaveAsync(planThamDinh);
                        if (planThamDinh.ID > 0)
                        {
                            planThamDinhCompanies = new PlanThamDinhCompanies();
                            planThamDinhCompanies.ParentID = planThamDinh.ID;
                            planThamDinhCompanies.CompanyInfoID = itemCompanyInfoLichSuKiemTra.ParentID;
                            planThamDinhCompanies.DanhMucATTPLoaiHoSoID = itemCompanyInfoLichSuKiemTra.DanhMucDangKyCapGiayID;
                            planThamDinhCompanies.DanhMucATTPXepLoaiID = itemCompanyInfoLichSuKiemTra.DanhMucXepLoaiID + 1;
                            planThamDinhCompanies.NgayGhiNhan = itemCompanyInfoLichSuKiemTra.NgayGhiNhan;
                            await _PlanThamDinhCompaniesService.SaveAsync(planThamDinhCompanies);
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
    }
}

