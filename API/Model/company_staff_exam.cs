namespace API.Model
{
	public class company_staff_exam
	{
		public ObjectId _id { get; set; }
		public string? fullname { get; set; }
		public string? identity_card { get; set; }
		public string? phone { get; set; }
		public decimal? point { get; set; }
		public string? role_name { get; set; }
		public string? exam_id { get; set; }
		public DateTime? create_on { get; set; }
		public company_staff_exam_answers[]? answers { get; set; }
	}
}
