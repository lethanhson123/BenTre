namespace Data.Model
{
    public partial class Report : BaseModel
    {
        public string? CompanyInfoName { get; set; }
        public string? SpeciesName { get; set; }        
        public string? DistrictDataName { get; set; }
        public string? WardDataName { get; set; }
        public string? address { get; set; }
        public string? phone { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public DateTime? NgayBatDau { get; set; }
        public DateTime? NgayKetThuc { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public DateTime? NgayHetHan { get; set; }
        public int? Nam { get; set; }
        public int? Thang { get; set; }
        public decimal? ThongKe001 { get; set; }
        public decimal? ThongKe002 { get; set; }
        public decimal? ThongKe003 { get; set; }
        public decimal? ThongKe004 { get; set; }
        public decimal? ThongKe005 { get; set; }
        public decimal? ThongKe006 { get; set; }
        public decimal? ThongKe007 { get; set; }
        public decimal? ThongKe008 { get; set; }
        public decimal? ThongKe009 { get; set; }
        public decimal? ThongKe010 { get; set; }
        public decimal? ThongKe011 { get; set; }
        public decimal? ThongKe012 { get; set; }
        public decimal? ThongKe101 { get; set; }
        public decimal? ThongKe102 { get; set; }
        public decimal? ThongKe103 { get; set; }
        public decimal? ThongKe104 { get; set; }
        public decimal? ThongKe105 { get; set; }
        public decimal? ThongKe106 { get; set; }
        public decimal? ThongKe107 { get; set; }
        public decimal? ThongKe108 { get; set; }
        public decimal? ThongKe109 { get; set; }
        public decimal? ThongKe110 { get; set; }
        public decimal? ThongKe111 { get; set; }
        public decimal? ThongKe112 { get; set; }
        public decimal? ThongKe201 { get; set; }
        public decimal? ThongKe202 { get; set; }
        public decimal? ThongKe203 { get; set; }
        public decimal? ThongKe204 { get; set; }
        public decimal? ThongKe205 { get; set; }
        public decimal? ThongKe206 { get; set; }
        public decimal? ThongKe207 { get; set; }
        public decimal? ThongKe208 { get; set; }
        public decimal? ThongKe209 { get; set; }
        public decimal? ThongKe210 { get; set; }
        public decimal? ThongKe211 { get; set; }
        public decimal? ThongKe212 { get; set; }
        public decimal? TyLe001 { get; set; }
        public decimal? TyLe002 { get; set; }
        public decimal? TyLe003 { get; set; }
        public decimal? TyLe004 { get; set; }
        public decimal? TyLe005 { get; set; }
        public decimal? TyLe006 { get; set; }
        public decimal? TyLe007 { get; set; }
        public decimal? TyLe008 { get; set; }
        public decimal? TyLe009 { get; set; }
        public decimal? TyLe010 { get; set; }
        public decimal? TyLe011 { get; set; }
        public decimal? TyLe012 { get; set; }

        public long? PushNotificationTongTinDaGui { get; set; }
        public long? PushNotificationTongTinDaNhan { get; set; }
        public string? PushNotificationTypeName { get; set; }
        public string? PushNotificationTieuDe { get; set; }
        public string? PushNotificationNoiDung { get; set; }

        public Report()
        {
        }
    }
}

