using Service.Interface;

namespace Service.Implement
{
	public class CompanyExaminationService : BaseService<CompanyExamination, ICompanyExaminationRepository>
	, ICompanyExaminationService
	{
		private readonly ICompanyExaminationRepository _CompanyExaminationRepository;

		private readonly ICauHoiNhomService _CauHoiNhomService;
		private readonly ICauHoiATTPService _CauHoiATTPService;
		private readonly ICompanyExaminationQuestionsService _CompanyExaminationQuestionsService;
		public CompanyExaminationService(ICompanyExaminationRepository CompanyExaminationRepository

			, ICauHoiNhomService CauHoiNhomService
			, ICauHoiATTPService CauHoiATTPService
			, ICompanyExaminationQuestionsService CompanyExaminationQuestionsService

			) : base(CompanyExaminationRepository)
		{
			_CompanyExaminationRepository = CompanyExaminationRepository;

			_CauHoiNhomService = CauHoiNhomService;
			_CauHoiATTPService = CauHoiATTPService;
			_CompanyExaminationQuestionsService = CompanyExaminationQuestionsService;
		}

		public override void Initialization(CompanyExamination model)
		{
            BaseInitialization(model);
            if (model.CauHoiNhomID > 0)
			{
				model.Description = _CauHoiNhomService.GetByID(model.CauHoiNhomID.Value).Name;
			}
			if (model.NgayGhiNhan == null)
			{
				model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
			}
			if (model.Active == null)
			{
				model.Active = true;
			}
		}
		public override async Task<int> AddAsync(CompanyExamination model)
		{
			Initialization(model);
			int result = GlobalHelper.InitializationNumber;
			result = await _CompanyExaminationRepository.AddAsync(model);
			if (result > 0)
			{
				InitializationCauHoiATTP(model);
			}
			return result;
		}
		private void InitializationCauHoiATTP(CompanyExamination model)
		{
			List<CauHoiATTP> listCauHoiATTP = new List<CauHoiATTP>();
			if (model.CauHoiNhomID > 1)
			{
				listCauHoiATTP.AddRange(_CauHoiATTPService.GetByCondition(item => item.ParentID == 1).OrderBy(item => Guid.NewGuid()).Take(20).ToList());
				listCauHoiATTP.AddRange(_CauHoiATTPService.GetByCondition(item => item.ParentID == model.CauHoiNhomID).OrderBy(item => Guid.NewGuid()).Take(10).ToList());
			}
			else
			{
				listCauHoiATTP = _CauHoiATTPService.GetByCondition(item => item.ParentID == model.CauHoiNhomID).OrderBy(item => Guid.NewGuid()).Take(30).ToList();
			}
			foreach (CauHoiATTP item in listCauHoiATTP)
			{
				CompanyExaminationQuestions companyExaminationQuestions = new CompanyExaminationQuestions();
				companyExaminationQuestions.ParentID = model.ID;
				companyExaminationQuestions.Description = model.Name;
				companyExaminationQuestions.CauHoiATTPID = item.ID;				
				companyExaminationQuestions.Name = item.Name;
				CompanyExaminationQuestions companyExaminationQuestionsExist = _CompanyExaminationQuestionsService.GetByCondition(item => item.ParentID == companyExaminationQuestions.ParentID && item.CauHoiATTPID == companyExaminationQuestions.CauHoiATTPID).FirstOrDefault();
				if (companyExaminationQuestionsExist == null)
				{
					_CompanyExaminationQuestionsService.Save(companyExaminationQuestions);
				}
			}
		}
	}
}

