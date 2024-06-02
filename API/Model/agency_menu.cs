namespace API.Model
{
	public class agency_menu
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public string? path_url { get; set; }
		public string? image_path { get; set; }
		public string? color_str { get; set; }
		public bool? is_mobile { get; set; }
	}
}
