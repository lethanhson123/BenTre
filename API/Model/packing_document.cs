namespace API.Model
{
	public class packing_document
    { 
		public ObjectId _id { get; set; }
		public string? register_id { get; set; }
		public string? document_name { get; set; }
        public string? document_id { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public long? status_id { get; set; }
        public string? file_mau { get; set; }
        public string? notes { get; set; }
        public long? version_update { get; set; }
        public document? file_attach { get; set; }



    }
}
