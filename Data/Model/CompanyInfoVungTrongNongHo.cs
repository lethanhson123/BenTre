namespace Data.Model
{
    public partial class CompanyInfoVungTrongNongHo : BaseModel
    {
        public long? ThanhVienID { get; set; }
        public string? DienThoai { get; set; }
        public string? Email { get; set; }
        public string? CCCD { get; set; }
        public long? NamSinh { get; set; }
        public string? DiaChi { get; set; }
        public decimal? KinhDo { get; set; }
        public decimal? ViDo { get; set; }
        public string? Giong { get; set; }
        public decimal? NamTrong { get; set; }
        public string? ChungNhanVietGap { get; set; }

        public CompanyInfoVungTrongNongHo()
        {
        }
    }
}

