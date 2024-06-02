namespace Data.Model
{
	public partial class CompanyStaffExamAnswers : BaseModel
	{
		public string? question_id { get; set; }
		public long? answer_id { get; set; }
		public long? CompanyExaminationQuestionsID { get; set; }
		public long? CauHoiATTPID { get; set; }
		public long? CauHoiATTPQuestionsID { get; set; }
		public DateTime? NgayGhiNhan { get; set; }
		public CompanyStaffExamAnswers()
		{
		}
	}
}

