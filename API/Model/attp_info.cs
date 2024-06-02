namespace API.Model
{
	public class attp_info
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }		
		public string? code { get; set; }		
		public string? company_id { get; set; }
		public string? product_des { get; set; }
		public string[]? product_groups { get; set; }
		public string? reason_notes { get; set; }
		public document[]? documents { get; set; }
		public long? status_id { get; set; }
		public long? create_from { get; set; }
		public long? form_type_id { get; set; }
		public DateTime? send_date { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public attp_info_timelines[]? timelines { get; set; }
		public string[]? product_goods { get; set; }
		public string[]? product_bads { get; set; }
		public long? cer_level { get; set; }
		public string? agency_id { get; set; }
		public string? thamdinh_uid { get; set; }
		public string? cer_notes { get; set; }
		public DateTime? cer_begin_date { get; set; }
		public string? cer_code { get; set; }
		public document? cer_file { get; set; }		

	}
}
