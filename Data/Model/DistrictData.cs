namespace Data.Model
{
	public partial class DistrictData : BaseModel
	{
		public long? district_id { get; set; }
		public string? division_type { get; set; }
		public string? short_code { get; set; }
		public long? province_id { get; set; }
		public bool? is_nt2mv { get; set; }

		public DistrictData()
		{
		}
	}
}

