namespace Service.Implement
{
    public class CompanyStaffExamAnswersService : BaseService<CompanyStaffExamAnswers, ICompanyStaffExamAnswersRepository>
    , ICompanyStaffExamAnswersService
    {
        private readonly ICompanyStaffExamAnswersRepository _CompanyStaffExamAnswersRepository;

        private readonly ICompanyStaffExamService _CompanyStaffExamService;
        private readonly ICauHoiATTPQuestionsService _CauHoiATTPQuestionsService;

        public CompanyStaffExamAnswersService(ICompanyStaffExamAnswersRepository CompanyStaffExamAnswersRepository

            , ICompanyStaffExamService CompanyStaffExamService
            , ICauHoiATTPQuestionsService CauHoiATTPQuestionsService
            ) : base(CompanyStaffExamAnswersRepository)
        {
            _CompanyStaffExamAnswersRepository = CompanyStaffExamAnswersRepository;
            _CompanyStaffExamService = CompanyStaffExamService;
            _CauHoiATTPQuestionsService = CauHoiATTPQuestionsService;
        }
        public override void Initialization(CompanyStaffExamAnswers model)
        {
            BaseInitialization(model);
            if (model.NgayGhiNhan == null)
            {
                model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
        }
        public override async Task<CompanyStaffExamAnswers> SaveAsync(CompanyStaffExamAnswers model)
        {
            int result = GlobalHelper.InitializationNumber;
            CompanyStaffExamAnswers companyStaffExamAnswersExist = new CompanyStaffExamAnswers();
            companyStaffExamAnswersExist = await GetByCondition(item => item.ParentID == model.ParentID && model.CompanyExaminationQuestionsID == model.CompanyExaminationQuestionsID && item.CauHoiATTPID == model.CauHoiATTPID).FirstOrDefaultAsync();
            if (companyStaffExamAnswersExist != null)
            {
                if (companyStaffExamAnswersExist.ID > 0)
                {
                    companyStaffExamAnswersExist.CauHoiATTPQuestionsID = model.CauHoiATTPQuestionsID;
                    model = companyStaffExamAnswersExist;
                }
            }
            if (model.ID > 0)
            {
                result = await UpdateAsync(model);
            }
            else
            {
                result = await AddAsync(model);
            }
            if (result > 0)
            {
                await Sync(model);
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        private async Task<CompanyStaffExamAnswers> Sync(CompanyStaffExamAnswers model)
        {
            CompanyStaffExam CompanyStaffExam = await _CompanyStaffExamService.GetByIDAsync(model.ParentID.Value);
            CompanyStaffExam.point = GlobalHelper.InitializationNumber;
            List<CompanyStaffExamAnswers> listCompanyStaffExamAnswers = await GetByParentIDToListAsync(model.ParentID.Value);
            foreach (CompanyStaffExamAnswers item in listCompanyStaffExamAnswers)
            {
                List<CauHoiATTPQuestions> listCauHoiATTPQuestions = await _CauHoiATTPQuestionsService.GetByParentIDToListAsync(model.CauHoiATTPID.Value);
                foreach (CauHoiATTPQuestions itemCauHoiATTPQuestions in listCauHoiATTPQuestions)
                {
                    if ((item.CauHoiATTPQuestionsID == itemCauHoiATTPQuestions.ID) && (itemCauHoiATTPQuestions.is_ans == true))
                    {
                        CompanyStaffExam.point = CompanyStaffExam.point + 1;
                    }
                }
            }
            await _CompanyStaffExamService.SaveAsync(CompanyStaffExam);
            return model;
        }
        public virtual async Task<List<CompanyStaffExamAnswers>> GetSQLByCompanyExaminationID_ThanhVienIDToListAsync(long companyExaminationID, long thanhVienID)
        {
            List<CompanyStaffExamAnswers> result = new List<CompanyStaffExamAnswers>();
            SqlParameter[] parameters =
            {
                        new SqlParameter("@CompanyExaminationID",companyExaminationID),
                        new SqlParameter("@ThanhVienID",thanhVienID),
            };
            result = await GetByStoredProcedureToListAsync("sp_CompanyStaffExamAnswersSelectItemsByCompanyExaminationID_ThanhVienID", parameters);
            return result;
        }

    }
}

