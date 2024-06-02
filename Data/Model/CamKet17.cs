namespace Data.Model
{
    public partial class CamKet17 : BaseModel
    {
        public long? province_id { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public string? hamlet { get; set; }
        public string? address { get; set; }
        public string? fullname { get; set; }
        public string? email { get; set; }
        public string? phone { get; set; }
        public int? month_number { get; set; }
        public int? year_number { get; set; }
        public string? agency_user_id { get; set; }
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
        public int? Nam { get; set; }
        public int? Thang { get; set; }
        public int? DonViToChucCount { get; set; }
        public int? DonViToChucCountThangLuyKe { get; set; }
        public int? DonViToChucCountThangLuyKeKiemTra { get; set; }
        public int? DonViToChucCountThangLuyKeKiemTraChuaDat { get; set; }
        public CamKet17()
        {
            Nam = GlobalHelper.InitializationDateTime.Year;
            Thang = GlobalHelper.InitializationDateTime.Month;
            DonViToChucCount = GlobalHelper.InitializationNumber;
            DonViToChucCountThangLuyKe = GlobalHelper.InitializationNumber;
            DonViToChucCountThangLuyKeKiemTra = GlobalHelper.InitializationNumber;
            DonViToChucCountThangLuyKeKiemTraChuaDat = GlobalHelper.InitializationNumber;
        }
    }
}

