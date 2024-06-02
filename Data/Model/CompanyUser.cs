namespace Data.Model
{
	public partial class CompanyUser : BaseModel
	{
		public string? username { get; set; }
		public string? fullname { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? password_salt { get; set; }
		public string? password_hash { get; set; }
		public string? company_id { get; set; }
		public long? role_id { get; set; }

		public CompanyUser()
		{
		}
	}
}

