namespace Repository.Implement
{
    public class CompanyExaminationRepository : BaseRepository<CompanyExamination>
    , ICompanyExaminationRepository
    {
    private readonly Data.Context.Context _context;
    public CompanyExaminationRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

