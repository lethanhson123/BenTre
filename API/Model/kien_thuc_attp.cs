namespace API.Model
{
	public class kien_thuc_attp
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public long? group_id { get; set; }
		public string? short_des { get; set; }
		public string? content { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public document? file_attach { get; set; }
	}
}
