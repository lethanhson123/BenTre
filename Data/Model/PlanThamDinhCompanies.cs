namespace Data.Model
{
    public partial class PlanThamDinhCompanies : BaseModel
    {
        public long? ATTPInfoID { get; set; }
        public string? ATTPInfoName { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public long? DanhMucATTPLoaiHoSoID { get; set; }
        public string? DanhMucATTPLoaiHoSoName { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public int? Dat_Ac_Count { get; set; }
        public int? Nhe_Mi_Count { get; set; }
        public int? Nang_Ma_Count { get; set; }
        public int? NghiemTrong_Se_Count { get; set; }
        public int? ChiTieuDanhGiaCount { get; set; }
        public DateTime? NgayHetHan { get; set; }
        public string? MaSo { get; set; }
        public long? CompanyLakeID { get; set; }
        public string? CompanyLakeName { get; set; }
        public long? DanhMucLayMauID { get; set; }
        public string? DanhMucLayMauName { get; set; }
        public long? DanhMucLayMauChiTieuID { get; set; }
        public string? DanhMucLayMauChiTieuName { get; set; }
        public decimal? SoLuongLayMau { get; set; }
        public long? DistrictDataID { get; set; }
        public string? DistrictDataName { get; set; }
        public DateTime? NgayHieuLucGiayChungNhan { get; set; }
        public long? DanhMucProductGroupID { get; set; }
        public string? DanhMucProductGroupName { get; set; }
        public long? CompanyInfoDonViDongGoiID { get; set; }
        public string? LuatDieu { get; set; }
        public string? LuatKhoan { get; set; }
        public string? LuatDiem { get; set; }
        public decimal? SoTienViPham { get; set; }
        public string? ViPham { get; set; }       
        public PlanThamDinhCompanies()
        {
            Code = GlobalHelper.InitializationGUICode;
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
            SoLuongLayMau = 1;
        }
    }
}

