namespace Service.Interface
{
    public interface IReportService : IBaseService<Report>
    {
        Task<List<IOC>> ReportIOC0001ToListAsync(int nam, int thang);
        Task<List<Report>> Report0001ToListAsync(int nam, int thang);
        Task<List<Report>> Report0002ToListAsync(long parentID, int nam, bool active);
        Task<List<Report>> Report0003ToListAsync(long parentID, int nam, bool active);
        Task<List<Report>> Report0004_0005ToListAsync(long parentID, long districtDataID, int nam, int thang, bool active);
        Task<List<Report>> Report0006ToListAsync(long parentID, long districtDataID, int nam, int thang, bool active);
        Task<Report> ReportWebsite0001Async();
        Task<List<Report>> ReportWebsite0002ToListAsync(string SearchString);
        Task<List<Report>> ReportWebsite0003ToListAsync(string FTPFull);
        Task<List<Report>> Report0007ToListAsync(int nam, int thang, bool active);
        Task<List<Report>> Report0008ToListAsync(int nam, int thang, bool active);
        Task<List<Report>> ReportPushNotification0000001Async();
        Task<List<Report>> Report0009ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0010ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0011ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0012ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0013ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0014ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0015ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0016ToListAsync(long PlanTypeID);
        Task<List<Report>> Report0017ToListAsync(long PlanTypeID, long DistrictDataID);

        Task<Report> ReportDashboard0001Async();
        Task<List<Report>> ReportDashboard0002ToListAsync();
        Task<List<Report>> ReportDashboard0003ToListAsync();
        Task<List<Report>> ReportDashboard0004ToListAsync();
        Task<List<Report>> ReportDashboard0005ToListAsync(int nam);
    }
}

