namespace API.Model
{
	public class company_info_attp_info
	{
		public string? hoso_id { get; set; }
		public string? hoso_code { get; set; }
		public string? attp_code { get; set; }
		public int? attp_rank { get; set; }
		public string[]? product_groups { get; set; }
		public string? product_des { get; set; }
		public DateTime? last_thamdinh { get; set; }
		public string? thamdinh_id { get; set; }
		public company_info_attp_info_mucloi? mucloi { get; set; }
		public DateTime? attp_next { get; set; }
		public DateTime? attp_begin { get; set; }
		public document? attp_cer { get; set; }		
	}
}
