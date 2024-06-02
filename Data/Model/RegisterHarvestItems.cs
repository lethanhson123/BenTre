namespace Data.Model
{
    public partial class RegisterHarvestItems : BaseModel
    {

        public DateTime? from_date { get; set; }
        public decimal? quantity { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public string? address { get; set; }
        public string? place_buy { get; set; }
        public string? kiemsoat_id { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public decimal? SoLuong { get; set; }
        public long? ProductUnitID { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public string? FileName001 { get; set; }
        public decimal? SoLuong001 { get; set; }
        public string? Note001 { get; set; }
        public string? Code001 { get; set; }
        public string? GiayChungNhanXuatXu { get; set; }
        public RegisterHarvestItems()
        {
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
            SoLuong = 1;
            SoLuong001 = 1;
        }
    }
}

