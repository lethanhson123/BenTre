namespace Data.Model
{
	public partial class ThanhVien : BaseModel
	{
		public string? TaiKhoan { get; set; }
		public string? MatKhau { get; set; }
		public string? GUIDCode { get; set; }
		public string? CCCD { get; set; }
		public string? DienThoai { get; set; }
		public string? Email { get; set; }
		public string? DiaChi { get; set; }
		public string? ApThon { get; set; }
		public long? ProvinceDataID { get; set; }
		public long? DistrictDataID { get; set; }
		public long? WardDataID { get; set; }
		public string? GioiTinh { get; set; }
		public DateTime? NgaySinh { get; set; }
		public long? DanhMucChucDanhID { get; set; }
		public string? ProvinceDataName { get; set; }
		public string? DistrictDataName { get; set; }
		public string? WardDataName { get; set; }
		public long? AgencyDepartmentID { get; set; }
		public long? StateAgencyID { get; set; }
		public long? CompanyInfoID { get; set; }
		public string? CompanyInfoName { get; set; }
		public string? DanhMucChucDanhName { get; set; }
		public string? AgencyDepartmentName { get; set; }
		public string? StateAgencyName { get; set; }        
        public ThanhVien()
		{
		}
	}
}

