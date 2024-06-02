namespace Data.Model
{
	public partial class AgencyMenu : BaseModel
	{
		public string? path_url { get; set; }
		public string? image_path { get; set; }
		public string? color_str { get; set; }
		public bool? is_mobile { get; set; }

		public AgencyMenu()
		{
		}
	}
}

