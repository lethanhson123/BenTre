namespace Repository.Implement
{
    public class CompanyStaffExamAnswersRepository : BaseRepository<CompanyStaffExamAnswers>
    , ICompanyStaffExamAnswersRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyStaffExamAnswersRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

