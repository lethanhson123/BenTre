namespace Data.Model
{
	public partial class ThanhVienPhanQuyenKhuVuc : BaseModel
	{
		public long? DanhMucTinhThanhID { get; set; }
		public long? DanhMucQuanHuyenID { get; set; }
		public long? DanhMucXaPhuongID { get; set; }

		public ThanhVienPhanQuyenKhuVuc()
		{
		}
	}
}

