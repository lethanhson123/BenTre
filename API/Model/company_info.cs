namespace API.Model
{
	public class company_info
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }		
		public string? name { get; set; }
		public long? type_id { get; set; }
		public long[]? groups { get; set; }
		public long[]? fields { get; set; }
		public string? agency_id { get; set; }
		public long? province_id { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public string? address { get; set; }
		public string? fullname { get; set; }
		public string? identity_card { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? business_number { get; set; }
		public string? business_number_date { get; set; }
		public string? business_number_place { get; set; }
		public string? tax_code { get; set; }
		public long? status_id { get; set; }
		public decimal? latitude { get; set; }
		public decimal? longitude { get; set; }
		public string? agency_approved { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public DateTime? approved_on { get; set; }
		public int? number_lake { get; set; }
		public string? hamlet { get; set; }
		public string? lake_code { get; set; }
		public string? product_des { get; set; }
		public string[]? products { get; set; }
		public int? attp_status { get; set; }
		public int? attp_rank { get; set; }
		public bool? is_tapchat { get; set; }
		public bool? tapchat_vipham { get; set; }
		public company_info_attp_info? attp_info { get; set; }
		public string? scope_id { get; set; }
		public string? role_name { get; set; }
		public string? code { get; set; }
		public company_info_cosonuoi? cosonuoi { get; set; }
		
	}
}
