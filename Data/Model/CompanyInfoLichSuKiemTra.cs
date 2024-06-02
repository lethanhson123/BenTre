namespace Data.Model
{
	public partial class CompanyInfoLichSuKiemTra : BaseModel
	{
		public int? SoLan { get; set; }
		public int? Nam { get; set; }
		public int? Thang { get; set; }
		public int? Ngay { get; set; }
		public DateTime? NgayGhiNhan { get; set; }
		public long? DanhMucXepLoaiID { get; set; }
		public string? DanhMucXepLoaiName { get; set; }
		public long? DanhMucDangKyCapGiayID { get; set; }
		public string? DanhMucDangKyCapGiayName { get; set; }
		public DateTime? NgayDangKy { get; set; }
		public DateTime? NgayHetHan { get; set; }

		public CompanyInfoLichSuKiemTra()
		{
			NgayGhiNhan = GlobalHelper.InitializationDateTime;			
		}
	}
}

