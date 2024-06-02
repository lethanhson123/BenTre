namespace API.Model
{
	public class phananh
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public long? group_id { get; set; }
		public string? fullname { get; set; }
		public string? phone { get; set; }
		public string? email { get; set; }
		public string? contents { get; set; }
		public long? status_id { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }		
	}
}
