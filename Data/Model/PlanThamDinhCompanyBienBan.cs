namespace Data.Model
{
	public partial class PlanThamDinhCompanyBienBan : BaseModel
	{
		public long? BienBanATTPID { get; set; }
		public long? DanhMucThamDinhKetQuaDanhGiaID { get; set; }
        public long? DanhMucProductGroupID { get; set; }
        public string? DanhMucProductGroupName { get; set; }
        public long? PlanThamDinhID { get; set; }
        public PlanThamDinhCompanyBienBan()
		{
		}
	}
}

