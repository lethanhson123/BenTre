namespace Data.Model
{
	public partial class KienThucATTP : BaseModel
	{
		public long? group_id { get; set; }
		public string? file_name { get; set; }
		public string? file_id { get; set; }
		public string? file_path { get; set; }
		public string? server_upload { get; set; }
		public string? provider { get; set; }
		public decimal? size_kb { get; set; }
		public string? document_name { get; set; }
		public string? document_type { get; set; }
		public string? mine_type { get; set; }
		public string? ext { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public KienThucATTP()
		{
            NgayGhiNhan = GlobalHelper.InitializationDateTime;

        }
	}
}

