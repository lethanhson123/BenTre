namespace Data.Model
{
	public partial class CompanyExamination : BaseModel
	{
		
		public string? company_id { get; set; }
		public long? group_id { get; set; }
		public long? CauHoiNhomID { get; set; }
		public DateTime? NgayGhiNhan { get; set; }
		public CompanyExamination()
		{
		}
	}
}

