	namespace API.Model
{
	public class bienban_msvt
	{
		public ObjectId _id { get; set; }
		public string? register_id { get; set; }
		public string? bienban_id { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }

		public bienban_msvt_doankiemtras[]? doankiemtras { get; set; }
		public bienban_msvt_results? results { get; set; }

		

	}
}
