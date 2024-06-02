namespace API.Model
{
	public class company_user
	{
		public ObjectId _id { get; set; }
		public string? username { get; set; }
		public string? fullname { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? password_salt { get; set; }
		public string? password_hash { get; set; }
		public string? company_id { get; set; }
		public bool? is_active { get; set; }
		public long? role_id { get; set; }
	}
}
