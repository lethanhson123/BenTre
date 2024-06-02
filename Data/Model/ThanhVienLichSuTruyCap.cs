namespace Data.Model
{
	public partial class ThanhVienLichSuTruyCap : BaseModel
	{
		public string? URL { get; set; }
		public string? Token { get; set; }
		public DateTime? NgayTruyCap { get; set; }

		public ThanhVienLichSuTruyCap()
		{
		}
	}
}

