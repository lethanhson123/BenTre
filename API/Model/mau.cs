namespace API.Model
{
	public class mau
	{
		public string? uid { get; set; }
		public string? name { get; set; }
		public decimal? quantity { get; set; }
		public decimal? val { get; set; }
		public long? status_id { get; set; }
		public chitieu[]? chitieus { get; set; }
	}
}
