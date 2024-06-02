namespace API.Model
{
	public class attp_tiepnhan
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }		
		public long? type_id { get; set; }		
		public string? company_id { get; set; }
		public string? company_name { get; set; }
		public string? company_code { get; set; }
		public string? business_number { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? fax { get; set; }
		public string? notes { get; set; }
		public string? product_des { get; set; }
		public string[]? product_groups { get; set; }
		public document[]? documents { get; set; }	
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public long? status_id { get; set; }

	}
}
