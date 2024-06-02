namespace Service.Interface
{
	public interface ICompanyStaffExamAnswersService : IBaseService<CompanyStaffExamAnswers>
	{
		Task<List<CompanyStaffExamAnswers>> GetSQLByCompanyExaminationID_ThanhVienIDToListAsync(long companyExaminationID, long thanhVienID);

	}
}

