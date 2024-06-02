namespace Data.Model
{
	public partial class NguonVon : BaseModel
	{
		public string? fromby { get; set; }
		public DateTime? from_date { get; set; }
		public DateTime? to_date { get; set; }
		public decimal? total_money_trieu { get; set; }
        public int? Nam { get; set; }
        public decimal? TongCong { get; set; }
        public decimal? DaChi { get; set; }
        public decimal? ConLai { get; set; }
        public DateTime? NgayBatDau { get; set; }
        public DateTime? NgayKetThuc { get; set; }
        public long? StateAgencyID001 { get; set; }
        public string? StateAgencyName001 { get; set; }
        public long? StateAgencyID002 { get; set; }
        public string? StateAgencyName002 { get; set; }
        public long? AgencyDepartmentID { get; set; }
        public string? AgencyDepartmentName { get; set; }
        public long? ThanhVienID { get; set; }
        public string? ThanhVienName { get; set; }
        public NguonVon()
		{            
            Code = GlobalHelper.InitializationGUICode;
            TongCong = GlobalHelper.InitializationNumber;
            DaChi = GlobalHelper.InitializationNumber;
            ConLai = GlobalHelper.InitializationNumber;
            Nam = GlobalHelper.InitializationDateTime.Year;            
            NgayBatDau = GlobalHelper.InitializationDateTime;
            NgayKetThuc = GlobalHelper.InitializationDateTime;
        }
	}
}

