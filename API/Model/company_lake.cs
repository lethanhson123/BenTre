namespace API.Model
{
	public class company_lake
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? company_id { get; set; }
		public decimal? acreage { get; set; }
		public string? unit_id { get; set; }
		public string? unit_name { get; set; }
		public string? title { get; set; }
		public string? code { get; set; }
		public string? species_name { get; set; }
		public string? species_id { get; set; }
		public decimal? latitude { get; set; }
		public decimal? longitude { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public string? hamlet { get; set; }
		public string? address { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public long? type_id { get; set; }
	}
}
