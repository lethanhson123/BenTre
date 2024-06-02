namespace API.Model
{
	public class kiemsoat_thuhoach
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? company_id { get; set; }
		public string? species_id { get; set; }
		public string? species_name { get; set; }
		public DateTime? harvest_time { get; set; }
		public decimal? quantity { get; set; }
		public string? unit_id { get; set; }
		public string? unit_name { get; set; }
		public string? vehicle_number { get; set; }
		public long? status_id { get; set; }
		public string? notes { get; set; }
		public string? result_notes { get; set; }
		public int? month_number { get; set; }
		public int? year_number { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public long? province_id { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public string? gcnxx_level { get; set; }
		public string? gcnxx_code { get; set; }
		public string? register_harvest_item { get; set; }
		public string? register_harvest_id { get; set; }
		public document? file_attach { get; set; }
		public document? gcnxx_cer { get; set; }
	}
}
