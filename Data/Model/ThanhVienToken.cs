namespace Data.Model
{
	public partial class ThanhVienToken : BaseModel
	{
		public DateTime? NgayBatDau { get; set; }
		public DateTime? NgayKetThuc { get; set; }
		public string? Token { get; set; }

		public ThanhVienToken()
		{
		}
	}
}

