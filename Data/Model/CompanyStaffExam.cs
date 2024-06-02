namespace Data.Model
{
	public partial class CompanyStaffExam : BaseModel
	{
		public string? fullname { get; set; }
		public string? identity_card { get; set; }
		public string? phone { get; set; }
		public decimal? point { get; set; }
		public string? role_name { get; set; }
		public string? exam_id { get; set; }
		public long? CompanyUserID { get; set; }
		public long? ThanhVienID { get; set; }
		public CompanyStaffExam()
		{
		}
	}
}

