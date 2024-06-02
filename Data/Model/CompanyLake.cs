namespace Data.Model
{
	public partial class CompanyLake : BaseModel
	{
		public string? company_id { get; set; }		
		public decimal? acreage { get; set; }
		public string? unit_id { get; set; }
		public string? unit_name { get; set; }
		public string? species_name { get; set; }
		public string? species_id { get; set; }
		public decimal? latitude { get; set; }
		public decimal? longitude { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public long? type_id { get; set; }
		public string? hamlet { get; set; }
		public string? address { get; set; }
		public long? SpeciesID { get; set; }
		public long? ProvinceDataID { get; set; }
		public long? DistrictDataID { get; set; }
		public long? WardDataID { get; set; }
		public string? ProvinceDataName { get; set; }
		public string? DistrictDataName { get; set; }
		public string? WardDataName { get; set; }
		public CompanyLake()
		{
		}
	}
}

