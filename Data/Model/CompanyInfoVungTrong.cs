namespace Data.Model
{
    public partial class CompanyInfoVungTrong : BaseModel
    {
        public DateTime? NgayGhiNhan { get; set; }
        public string? DaiDienCoSo { get; set; }
        public string? DaiDienCoSoChucVu { get; set; }
        public string? DaiDienCoSoDienThoai { get; set; }
        public string? DaiDienCoSoEmail { get; set; }
        public string? DKKD { get; set; }
        public string? DKKDSoCap { get; set; }
        public string? DKKDNgayCap { get; set; }
        public string? DiaChi { get; set; }
        public long? ProvinceDataID { get; set; }
        public string? ProvinceDataName { get; set; }
        public long? DistrictDataID { get; set; }
        public string? DistrictDataName { get; set; }
        public long? WardDataID { get; set; }
        public string? WardDataName { get; set; }
        public string? ThonAp { get; set; }
        public decimal? KinhDo { get; set; }
        public decimal? ViDo { get; set; }
        public long? StateAgencyID { get; set; }
        public string? StateAgencyName { get; set; }
        public long? DanhMucATTPLoaiHoSoID { get; set; }
        public string? DanhMucATTPLoaiHoSoName { get; set; }
        public long? DanhMucATTPTinhTrangID { get; set; }
        public string? DanhMucATTPTinhTrangName { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public string? MaHoSo { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public long? PlanTypeID { get; set; }
        public string? PlanTypeName { get; set; }
        public decimal? DienTich { get; set; }
        public decimal? CongSuatToiDa { get; set; }
        public string? SanPham { get; set; }
        public string? ThiTruong { get; set; }
        public string? MaSoVungTrong { get; set; }

        public CompanyInfoVungTrong()
        {
            Code = GlobalHelper.InitializationGUICode;
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
        }
    }
}

