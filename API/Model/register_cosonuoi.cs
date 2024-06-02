namespace API.Model
{
	public class register_cosonuoi
    { 
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? company_id { get; set; }
        public register_cosonuoi_lakes[]? lakes { get; set; }
        public string? code { get; set; }
        public long? status_id { get; set; }
        public int? hinhthucnuoi { get; set; }
        public string? hinhthucnuoi_name { get; set; }
        public decimal? acreage_cs { get; set; }
        public decimal? acreage_nuoi { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public document[]? documents { get; set; }
        public DateTime?create_on { get; set; }
        public DateTime?modify_on{ get; set; }
        public string? approve_note { get; set; }
        public string? notify_content { get; set; }
        public document? file_xacnhan { get; set; }
        


    }
}
