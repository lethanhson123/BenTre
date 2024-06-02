namespace API.Model
{
	public class agency_user
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? name { get; set; }
		public string? agency_id { get; set; }
		public long? type_id { get; set; }		
		public string? username { get; set; }
		public string? password_salt { get; set; }
		public string? password_hash { get; set; }
		public string? phone { get; set; }
		public string? email { get; set; }		
		public long? status_id { get; set; }
		public string? role_name { get; set; }
		public string? descriptions { get; set; }
		public DateTime? create_on { get; set; }
		public DateTime? modify_on { get; set; }
		public string? department_id { get; set; }
	}
}
