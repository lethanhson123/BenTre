namespace Service.Model
{
	public partial class BaseParameter : BaseModel
	{	
		
		public int? Page { get; set; }
		public int? PageSize { get; set; }
        public int? SoThang { get; set; }
        public int? Nam { get; set; }
        public int? Thang { get; set; }
        public int? SoDot { get; set; }
        public string? Password01 { get; set; }
		public string? Password02 { get; set; }
		public string? Password03 { get; set; }
		public string? TaiKhoan { get; set; }
		public string? SearchString { get; set; }
		public string? IDString { get; set; }
		public string? Token { get; set; }
		public DateTime? NgayGhiNhan { get; set; }
		public DateTime? BatDau { get; set; }
		public DateTime? KetThuc { get; set; }		
		public ThanhVien? ThanhVien { get; set; }
		public long? ProvinceDataID { get; set; }
		public long? DistrictDataID { get; set; }
		public long? WardDataID { get; set; }
		public long? ThanhVienID { get; set; }
		public long? DanhMucUngDungID { get; set; }
		public long? DanhMucCompanyTinhTrangID { get; set; }
		public long? CompanyExaminationID { get; set; }
		public long? CompanyUserID { get; set; }
		public long? DanhMucThanhVienID { get; set; }
		public long? CompanyInfoID { get; set; }
		public long? AgencyDepartmentID { get; set; }
		public long? DanhMucChucDanhID { get; set; }
        public long? DanhMucChucNangID { get; set; }
        public long? DanhMucATTPLoaiHoSoID { get; set; }
		public long? DanhMucATTPTinhTrangID { get; set; }
		public long? DanhMucATTPXepLoaiID { get; set; }
		public long? BienBanATTPParentID { get; set; }
		public long? StateAgencyID { get; set; }
        public long? DocumentTemplateID { get; set; }
        public long? PlanThamDinhID { get; set; }
        public long? PlanTypeID { get; set; }
        public long? DanhMucProductGroupID { get; set; }
        public long? RegisterHarvestID { get; set; }
        public long? RegisterHarvestItemsID { get; set; }
        public bool? IsGoiY { get; set; }
        public List<long>? ListID { get; set; }
		public BaseParameter()
		{
		}
	}
}
