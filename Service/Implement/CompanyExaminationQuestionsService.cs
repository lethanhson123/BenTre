namespace Service.Implement
{
    public class CompanyExaminationQuestionsService : BaseService<CompanyExaminationQuestions, ICompanyExaminationQuestionsRepository>
    , ICompanyExaminationQuestionsService
    {
    private readonly ICompanyExaminationQuestionsRepository _CompanyExaminationQuestionsRepository;
    public CompanyExaminationQuestionsService(ICompanyExaminationQuestionsRepository CompanyExaminationQuestionsRepository) : base(CompanyExaminationQuestionsRepository)
    {
    _CompanyExaminationQuestionsRepository = CompanyExaminationQuestionsRepository;
    }
    }
    }

