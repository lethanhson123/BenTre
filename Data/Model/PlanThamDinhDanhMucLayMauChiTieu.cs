namespace Data.Model
{
    public partial class PlanThamDinhDanhMucLayMauChiTieu : BaseModel
    {
        public long? DanhMucLayMauChiTieuID { get; set; }
        public string? DanhMucLayMauChiTieuName { get; set; }
        public int? SoLuongLayMau { get; set; }
        public long? ProductUnitID { get; set; }
        public string? ProductUnitName { get; set; }
        public PlanThamDinhDanhMucLayMauChiTieu()
        {
            SoLuongLayMau = 1;
        }
    }
}

