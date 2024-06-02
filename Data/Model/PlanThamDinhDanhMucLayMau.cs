namespace Data.Model
{
    public partial class PlanThamDinhDanhMucLayMau : BaseModel
    {
        public long? DanhMucLayMauID { get; set; }
        public string? DanhMucLayMauName { get; set; }
        public int? SoLuongLayMau { get; set; }
        public long? ProductUnitID { get; set; }
        public string? ProductUnitName { get; set; }
        public long? DistrictDataID { get; set; }
        public string? DistrictDataName { get; set; }
        public long? DanhMucLayMauChiTieuID { get; set; }
        public string? DanhMucLayMauChiTieuName { get; set; }
        public long? ThanhVienID { get; set; }
        public string? ThanhVienName { get; set; }
        public long? CompanyLakeID { get; set; }
        public string? CompanyLakeName { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public string? ChatDocHai { get; set; }
        public decimal? KetQuaPhanTich { get; set; }
        public string? GioiHanToiDa { get; set; }
        public long? DanhMucLayMauPhanLoaiID { get; set; }
        public string? DanhMucLayMauPhanLoaiName { get; set; }
        public bool? IsGoiY { get; set; }
        public PlanThamDinhDanhMucLayMau()
        {
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
            SoLuongLayMau = 1;
            KetQuaPhanTich = GlobalHelper.InitializationNumber;
            ProductUnitID = 9;
        }
    }
}

