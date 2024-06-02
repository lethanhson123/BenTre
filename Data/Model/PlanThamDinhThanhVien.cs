namespace Data.Model
{
	public partial class PlanThamDinhThanhVien : BaseModel
	{
		public long? ThanhVienID { get; set; }
		public string? ThanhVienName { get; set; }
		public long? DanhMucChucDanhID { get; set; }
		public string? DanhMucChucDanhName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public long? DistrictDataID { get; set; }
        public string? DistrictDataName { get; set; }        
        public int? SoLuongLayMau { get; set; }
        public string? NuocRong { get; set; }
        public string? NuocLon { get; set; }

        public PlanThamDinhThanhVien()
		{
			NgayGhiNhan = GlobalHelper.InitializationDateTime;
            SoLuongLayMau = 1;
        }
	}
}

