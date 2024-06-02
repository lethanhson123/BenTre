namespace API.Model
{
	public class bienban_chicucbvtv_json_data_pages
	{		
		public string? type { get; set; }
		public string? name { get; set; }
		public string? title { get; set; }
		public string? placeholder { get; set; }
		public bool? showCommentArea { get; set; }
		public string? commentText { get; set; }
		public string? commentPlaceholder { get; set; }
		public string? labelTrue { get; set; }
		public string? labelFalse { get; set; }
		public bienban_chicucbvtv_json_data_pages[]? elements { get; set; }
		public bienban_chicucbvtv_json_data_pages_choices[]? choices { get; set; }
	}
}
