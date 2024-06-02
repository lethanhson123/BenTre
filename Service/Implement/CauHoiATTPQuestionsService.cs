namespace Service.Implement
{
    public class CauHoiATTPQuestionsService : BaseService<CauHoiATTPQuestions, ICauHoiATTPQuestionsRepository>
    , ICauHoiATTPQuestionsService
    {
    private readonly ICauHoiATTPQuestionsRepository _CauHoiATTPQuestionsRepository;
    public CauHoiATTPQuestionsService(ICauHoiATTPQuestionsRepository CauHoiATTPQuestionsRepository) : base(CauHoiATTPQuestionsRepository)
    {
    _CauHoiATTPQuestionsRepository = CauHoiATTPQuestionsRepository;
    }
    }
    }

