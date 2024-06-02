namespace API.Model
{
	public class species
    {
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? title { get; set; }
        public long? group_id { get; set; }
        public string? family { get; set; }
        public string? scientific_name { get; set; }
        public bool? is_active { get; set; }


    }
}
