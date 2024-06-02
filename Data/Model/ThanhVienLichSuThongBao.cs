namespace Data.Model
{
    public partial class ThanhVienLichSuThongBao : BaseModel
    {
        public string? URL { get; set; }
        public bool? DaGuiThongBao { get; set; }
        public long? SoLanGuiThongBao { get; set; }
        public DateTime? NgayGuiThongBao { get; set; }
        public DateTime? NgayNhanThongBao { get; set; }

        public ThanhVienLichSuThongBao()
        {
        }
    }
}

