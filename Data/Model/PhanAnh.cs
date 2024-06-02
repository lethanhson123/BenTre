namespace Data.Model
{
	public partial class PhanAnh : BaseModel
	{
		
		public long? group_id { get; set; }
		public string? fullname { get; set; }
		public string? phone { get; set; }
        public string? email { get; set; }
		public DateTime? NgayGhiNhan { get; set; }

		public PhanAnh()
		{
		}
	}
}

