namespace API.Model
{
	public class kiemtratapchat
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? company_id { get; set; }
		public int? year_number { get; set; }
		public long? status_id { get; set; }
		public DateTime? plan_time { get; set; }
		public string? plan_id { get; set; }
		public int? result_status { get; set; }
		public string? violate_name { get; set; }
		public string? violate_id { get; set; }
		public kiemtratapchat_bienban? bienban { get; set; }		
	}
}
