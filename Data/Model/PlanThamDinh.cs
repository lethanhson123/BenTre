namespace Data.Model
{
    public partial class PlanThamDinh : BaseModel
    {

        public string? plan_type_id { get; set; }
        public DateTime? from_date { get; set; }
        public int? year_plan { get; set; }
        public DateTime? due_data { get; set; }
        public long? time_type { get; set; }
		public long? StateAgencyID { get; set; }
		public string? StateAgencyName { get; set; }
		public DateTime? NgayBatDau { get; set; }
		public DateTime? NgayKetThuc { get; set; }
        public int? Nam { get; set; }
        public int? Thang { get; set; }
        public int? SoDot { get; set; }
        public long? DanhMucThoiGianLayMauID { get; set; }
        public string? DanhMucThoiGianLayMauName { get; set; }
        public DateTime? NgayGuiMau { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public long? DanhMucATTPTinhTrangID { get; set; }
        public string? DanhMucATTPTinhTrangName { get; set; }
        public int? Dat_Ac_Count { get; set; }
        public int? Nhe_Mi_Count { get; set; }
        public int? Nang_Ma_Count { get; set; }
        public int? NghiemTrong_Se_Count { get; set; }
        public int? ChiTieuDanhGiaCount { get; set; }
        public long? DanhMucProductGroupID { get; set; }
        public string? DanhMucProductGroupName { get; set; }
        public PlanThamDinh()
        {
            DanhMucThoiGianLayMauID = 1;
            Code = GlobalHelper.InitializationGUICode;
            Nam = GlobalHelper.InitializationDateTime.Year;
            Thang = GlobalHelper.InitializationDateTime.Month;
            NgayBatDau = GlobalHelper.InitializationDateTime;
            NgayKetThuc = GlobalHelper.InitializationDateTime;
            NgayGuiMau = GlobalHelper.InitializationDateTime;
            SoDot = 1;
        }
    }
}

