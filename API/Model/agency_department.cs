namespace API.Model
{
	public class agency_department
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? agency_id { get; set; }
		public string? name { get; set; }

		public string[]? menus { get; set; }
	}
}
