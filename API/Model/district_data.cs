namespace API.Model
{
	public class district_data
	{
		public ObjectId _id { get; set; }
		public long? district_id { get; set; }
		public string? code { get; set; }
		public string? name { get; set; }
		public string? division_type { get; set; }
		public string? short_code { get; set; }
		public long? province_id { get; set; }
		public bool? is_nt2mv { get; set; }
		
	}
}
