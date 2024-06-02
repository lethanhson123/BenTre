namespace API.Model
{
	public class document_template
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public string? plan_type_id { get; set; }
		public string? file_path { get; set; }
		public string? descriptions { get; set; }
		public document? file_upload { get; set; }
	}
}
