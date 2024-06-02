namespace API.Model
{
	public class nt2mv_ketquatrienkhai
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public long? district_id { get; set; }
		public string? district_name { get; set; }
		public string? species_name { get; set; }
		public decimal? acreage_ha { get; set; }
		public decimal? slkehoach { get; set; }
		public decimal? slthucte { get; set; }
		public decimal? slcapgc { get; set; }
		public int? year { get; set; }		
	}
}
