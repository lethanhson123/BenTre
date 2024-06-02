namespace API.Model
{
	public class diary_info
	{
		public ObjectId _id { get; set; }
		public string? company_id { get; set; }
		public string? username { get; set; }
		public string? uid { get; set; }
		public string? puc_id { get; set; }
		public string? puc_name { get; set; }
		public string? puc_code { get; set; }
		public DateTime? from_date { get; set; }
		public string? giaidoan { get; set; }
		public string? ndthuchien { get; set; }
		public string? svgh { get; set; }
		public long? bienphapxuly { get; set; }
		public string? tenbienphap { get; set; }
		public string? tenhoatchat { get; set; }
		public string? khoiluongsd { get; set; }
		public string? tgiancachly { get; set; }
		public int? year_crop { get; set; }
		public DateTime? create_on { get; set; }
	}
}
