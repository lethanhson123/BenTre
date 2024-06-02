namespace Data.Model
{
	public partial class PlanThamDinhCompanyDocument : BaseModel
	{
		public long? ThanhVienID { get; set; }
		public long? DocumentTemplateID { get; set; }
        public string? ThanhVienName { get; set; }
        public string? DanhMucChucDanhName { get; set; }
        public long? PlanThamDinhID { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public bool? IsLamMoi { get; set; }
        public long? ThanhVienID001 { get; set; }
        public string? ThanhVienName001 { get; set; }
        public string? DanhMucChucDanhName001 { get; set; }
        public long? RegisterHarvestID { get; set; }
        public long? RegisterHarvestItemsID { get; set; }
        public long? PlanTypeID { get; set; }
        public long? CompanyInfoDonViDongGoiID { get; set; }
        public PlanThamDinhCompanyDocument()
		{            
        }
	}
}

