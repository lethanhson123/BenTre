namespace Data.Model
{
	public partial class AgencyUser : BaseModel
	{
		public long? type_id { get; set; }
		public string? username { get; set; }
		public string? password_salt { get; set; }
		public string? password_hash { get; set; }
		public string? phone { get; set; }
		public string? email { get; set; }
		public string? role_name { get; set; }
		public string? department_id { get; set; }

		public AgencyUser()
		{
		}
	}
}

