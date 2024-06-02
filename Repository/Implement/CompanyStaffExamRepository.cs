namespace Repository.Implement
{
    public class CompanyStaffExamRepository : BaseRepository<CompanyStaffExam>
    , ICompanyStaffExamRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyStaffExamRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

