using Data.Model;

namespace Service.Implement
{
    public class ReportService : BaseService<Report, IReportRepository>
    , IReportService
    {
        private readonly IReportRepository _ReportRepository;
        public ReportService(IReportRepository ReportRepository) : base(ReportRepository)
        {
            _ReportRepository = ReportRepository;
        }
        public virtual async Task<List<IOC>> ReportIOC0001ToListAsync(int nam, int thang)
        {
            List<IOC> result = new List<IOC>();
            if (nam > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                };
                DataTable dt = await SQLHelper.FillDataTableAsync(GlobalHelper.SQLServerConectionString, "sp_ReportIOC0001", parameters);
                result = SQLHelper.ToList<IOC>(dt);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0001ToListAsync(int nam, int thang)
        {
            List<Report> result = new List<Report>();
            if (nam > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0001", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0002ToListAsync(long parentID, int nam, bool active)
        {
            List<Report> result = new List<Report>();
            if (parentID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@ParentID",parentID),
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Active",active),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0002", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0003ToListAsync(long parentID, int nam, bool active)
        {
            List<Report> result = new List<Report>();
            if (parentID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@ParentID",parentID),
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Active",active),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0003", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0004_0005ToListAsync(long parentID, long districtDataID, int nam, int thang, bool active)
        {
            List<Report> result = new List<Report>();
            if (parentID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@ParentID",parentID),
                            new SqlParameter("@DistrictDataID",districtDataID),
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                            new SqlParameter("@Active",active),
                };
                if (districtDataID == 0)
                {
                    result = await GetByStoredProcedureToListAsync("sp_Report0004", parameters);
                }
                else
                {
                    result = await GetByStoredProcedureToListAsync("sp_Report0005", parameters);
                }
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0006ToListAsync(long parentID, long districtDataID, int nam, int thang, bool active)
        {
            List<Report> result = new List<Report>();
            if (parentID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@ParentID",parentID),
                            new SqlParameter("@DistrictDataID",districtDataID),
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                            new SqlParameter("@Active",active),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0006", parameters);
            }
            return result;
        }
        public virtual async Task<Report> ReportWebsite0001Async()
        {
            Report result = new Report();
            List<Report> list = await GetByStoredProcedureToListAsync("sp_ReportWebsite0001");
            if (list.Count > 0)
            {
                result = list[0];
            }
            return result;
        }
        public virtual async Task<List<Report>> ReportWebsite0002ToListAsync(string SearchString)
        {
            List<Report> result = new List<Report>();
            if (!string.IsNullOrEmpty(SearchString))
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@SearchString",SearchString),
                };
                result = await GetByStoredProcedureToListAsync("sp_ReportWebsite0002", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> ReportWebsite0003ToListAsync(string FTPFull)
        {
            List<Report> result = new List<Report>();
            result = await GetByStoredProcedureToListAsync("sp_ReportWebsite0003");
            string HTMLContent = GlobalHelper.InitializationString;
            string folderPath = Path.Combine(FTPFull);
            var physicalPath = Path.Combine(folderPath, "ReportWebsite0003.json");
            bool isFolderExists = System.IO.Directory.Exists(folderPath);
            if (!isFolderExists)
            {
                System.IO.Directory.CreateDirectory(folderPath);
            }
            if (result.Count > 0)
            {
                HTMLContent = System.Text.Json.JsonSerializer.Serialize(result);
            }
            using (FileStream fs = new FileStream(physicalPath, FileMode.Create))
            {
                using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                {
                    w.WriteLine(HTMLContent);
                }
            }
            return result;
        }

        public virtual async Task<List<Report>> Report0007ToListAsync(int nam, int thang, bool active)
        {
            List<Report> result = new List<Report>();
            if (nam > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                            new SqlParameter("@Active",active),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0007", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0008ToListAsync(int nam, int thang, bool active)
        {
            List<Report> result = new List<Report>();
            if (nam > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Nam",nam),
                            new SqlParameter("@Thang",thang),
                            new SqlParameter("@Active",active),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0008", parameters);
            }
            return result;
        }

        public virtual async Task<List<Report>> ReportPushNotification0000001Async()
        {
            List<Report> result = new List<Report>();
            result = await GetByStoredProcedureToListAsync("sp_ReportPushNotification0000001");
            return result;
        }
        public virtual async Task<List<Report>> Report0009ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0009", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0010ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0010", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0011ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0011", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0012ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0012", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0013ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0013", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0014ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0014", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0015ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0015", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0016ToListAsync(long PlanTypeID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0016", parameters);
            }
            return result;
        }
        public virtual async Task<List<Report>> Report0017ToListAsync(long PlanTypeID, long DistrictDataID)
        {
            List<Report> result = new List<Report>();
            if (PlanTypeID > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@PlanTypeID",PlanTypeID),
                            new SqlParameter("@DistrictDataID",DistrictDataID),
                };
                result = await GetByStoredProcedureToListAsync("sp_Report0017", parameters);
            }
            return result;
        }
        public virtual async Task<Report> ReportDashboard0001Async()
        {
            Report result = new Report();
            List<Report> list = await GetByStoredProcedureToListAsync("sp_ReportDashboard0001");
            if (list.Count > 0)
            {
                result = list[0];
            }
            return result;
        }
        public virtual async Task<List<Report>> ReportDashboard0002ToListAsync()
        {
            List<Report> result = new List<Report>();
            result = await GetByStoredProcedureToListAsync("sp_ReportDashboard0002");           
            return result;
        }
        public virtual async Task<List<Report>> ReportDashboard0003ToListAsync()
        {
            List<Report> result = new List<Report>();
            result = await GetByStoredProcedureToListAsync("sp_ReportDashboard0003");
            return result;
        }
        public virtual async Task<List<Report>> ReportDashboard0004ToListAsync()
        {
            List<Report> result = new List<Report>();
            result = await GetByStoredProcedureToListAsync("sp_ReportDashboard0004");
            return result;
        }
        public virtual async Task<List<Report>> ReportDashboard0005ToListAsync(int nam)
        {
            List<Report> result = new List<Report>();
            if (nam > 0)
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Nam",nam),                            
                };
                result = await GetByStoredProcedureToListAsync("sp_ReportDashboard0005", parameters);
            }
            return result;
        }
    }
}

