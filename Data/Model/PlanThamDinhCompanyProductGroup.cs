namespace Data.Model
{
	public partial class PlanThamDinhCompanyProductGroup : BaseModel
	{
		public long? ProductGroupID { get; set; }
        public string? ProductGroupName { get; set; }
        public long? PlanThamDinhID { get; set; }
        public long? DanhMucProductGroupID { get; set; }
        public string? DanhMucProductGroupName { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public PlanThamDinhCompanyProductGroup()
		{
		}
	}
}

