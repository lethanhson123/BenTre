namespace API.Model
{
	public class giamsat_duluong_plan
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? plan_id { get; set; }
		public string? lake_id { get; set; }
		public string? lake_code { get; set; }
		public string? company_id { get; set; }
		public string? address { get; set; }
		public string? mau_id { get; set; }
		public string? mau_name { get; set; }
		public string? chitieu_id { get; set; }
		public string? chitieu_name { get; set; }
		public decimal? quantity { get; set; }
		public int? year_plan { get; set; }
		public int? month_plan { get; set; }
		public DateTime? from_date { get; set; }
		public long? status_id { get; set; }
		public decimal? chitieu_val { get; set; }
		public DateTime? modify_on { get; set; }
	}
}
