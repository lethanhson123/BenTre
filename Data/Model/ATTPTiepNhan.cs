namespace Data.Model
{
	public partial class ATTPTiepNhan : BaseModel
	{
		public long? type_id { get; set; }
		public string? company_id { get; set; }
		public string? company_name { get; set; }
		public string? company_code { get; set; }
		public string? business_number { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? fax { get; set; }
		public string? notes { get; set; }
		public string? product_des { get; set; }

		public ATTPTiepNhan()
		{
		}
	}
}

