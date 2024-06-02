namespace Data.Model
{
    public partial class NguonVonChiTiet : BaseModel
    {
        public decimal? TongCong { get; set; }
        public decimal? DaChi { get; set; }
        public decimal? ConLai { get; set; }
        public DateTime? NgayBatDau { get; set; }
        public DateTime? NgayKetThuc { get; set; }

        public NguonVonChiTiet()
        {
            TongCong = GlobalHelper.InitializationNumber;
            DaChi = GlobalHelper.InitializationNumber;
            ConLai = GlobalHelper.InitializationNumber;            
            NgayBatDau = GlobalHelper.InitializationDateTime;
            NgayKetThuc = GlobalHelper.InitializationDateTime;
        }
    }
}

