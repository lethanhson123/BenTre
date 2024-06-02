namespace Service.Implement
{
	public class CompanyStaffExamService : BaseService<CompanyStaffExam, ICompanyStaffExamRepository>
	, ICompanyStaffExamService
	{
		private readonly ICompanyStaffExamRepository _CompanyStaffExamRepository;
		public CompanyStaffExamService(ICompanyStaffExamRepository CompanyStaffExamRepository) : base(CompanyStaffExamRepository)
		{
			_CompanyStaffExamRepository = CompanyStaffExamRepository;
		}
		public override async Task<CompanyStaffExam> SaveAsync(CompanyStaffExam model)
		{
			CompanyStaffExam companyStaffExamExist = await GetByCondition(item => item.ParentID == model.ParentID && item.ThanhVienID == model.ThanhVienID).FirstOrDefaultAsync();
			if (companyStaffExamExist == null)
			{
				companyStaffExamExist = new CompanyStaffExam();
			}
			if (companyStaffExamExist.ID > 0)
			{
				model = companyStaffExamExist;
			}
			if (model.ID > 0)
			{
				await UpdateAsync(model);
			}
			else
			{
				await AddAsync(model);
			}
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
			return model;
		}
	}
}

