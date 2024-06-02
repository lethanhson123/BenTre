namespace API.Model
{
	public class chuoi_cung_ung
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? company_id { get; set; }
		public string? product_des { get; set; }
		public string[]? product_groups { get; set; }
		public string? address { get; set; }
		public string? code { get; set; }
		public long? status_id { get; set; }
		public DateTime? cer_date { get; set; }
		public document? file_attach { get; set; }
	}
}
