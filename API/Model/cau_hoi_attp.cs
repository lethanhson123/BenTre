namespace API.Model
{
	public class cau_hoi_attp
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public long? group_id { get; set; }		

		public cau_hoi_attp_questions[]? questions { get; set; }

	}
}
