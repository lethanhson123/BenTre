namespace API.Model
{
	public class company_examination
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public string? company_id { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public long? group_id { get; set; }
		public string[]? questions { get; set; }
	}
}
