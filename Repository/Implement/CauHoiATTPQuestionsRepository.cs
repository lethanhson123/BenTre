namespace Repository.Implement
{
    public class CauHoiATTPQuestionsRepository : BaseRepository<CauHoiATTPQuestions>
    , ICauHoiATTPQuestionsRepository
    {
    private readonly Data.Context.Context _context;
    public CauHoiATTPQuestionsRepository(Data.Context.Context context) : base(context)
    {
    _context = context;
    }
    }
    }

