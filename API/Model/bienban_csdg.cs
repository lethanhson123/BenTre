namespace API.Model
{
	public class bienban_csdg
	{
		public ObjectId _id { get; set; }
		public string? register_id { get; set; }
		public string? bienban_id { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }

		public bienban_csdg_doankiemtras[]? doankiemtras { get; set; }
		public bienban_csdg_results? results { get; set; }

		

	}
}
