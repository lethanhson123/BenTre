namespace Repository.Implement
{
    public class CompanyExaminationQuestionsRepository : BaseRepository<CompanyExaminationQuestions>
    , ICompanyExaminationQuestionsRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyExaminationQuestionsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

