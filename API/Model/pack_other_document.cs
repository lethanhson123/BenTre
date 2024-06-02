namespace API.Model
{
	public class pack_other_document
    { 
		public ObjectId _id { get; set; }
		public string? register_id { get; set; }
        public string? name { get; set; }
        public document? file_attach { get; set; }
        public DateTime? create_on { get; set; }
        public int? version_update { get; set; }
        

    }
}
