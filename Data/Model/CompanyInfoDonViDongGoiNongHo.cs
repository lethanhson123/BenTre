namespace Data.Model
{
    public partial class CompanyInfoDonViDongGoiNongHo : BaseModel
    {
        public long? ThanhVienID { get; set; }
        public string? DienThoai { get; set; }
        public string? Email { get; set; }
        public string? CCCD { get; set; }
        public CompanyInfoDonViDongGoiNongHo()
        {
        }
    }
}

