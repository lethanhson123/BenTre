namespace API.Model
{
	public class cam_ket17
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }		
		public string? name { get; set; }		
		public long? province_id { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public string? hamlet { get; set; }		
		public string? address { get; set; }
		public string? fullname { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public DateTime? create_date { get; set; }
		public int? month_number { get; set; }
		public int? year_number { get; set; }
		public string? notes { get; set; }
		public long? status_id { get; set; }
		public string? agency_id { get; set; }
		public string? agency_user_id { get; set; }
		public document? file_camket { get; set; }

	}
}
