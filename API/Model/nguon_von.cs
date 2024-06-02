namespace API.Model
{
	public class nguon_von
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
		public string? fromby { get; set; }
		public DateTime? from_date { get; set; }
		public DateTime? to_date { get; set; }
		public long? status_id { get; set; }
		public decimal? total_money_trieu { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public string? notes { get; set; }		
	}
}
