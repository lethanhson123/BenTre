namespace Data.Model
{
	public partial class CompanyInfo : BaseModel
	{		
		public long? type_id { get; set; }
		public long? province_id { get; set; }
		public long? district_id { get; set; }
		public long? ward_id { get; set; }
		public string? address { get; set; }
		public string? fullname { get; set; }
		public string? identity_card { get; set; }
		public string? email { get; set; }
		public string? phone { get; set; }
		public string? business_number { get; set; }
		public string? business_number_date { get; set; }
		public string? business_number_place { get; set; }
		public string? tax_code { get; set; }
		public decimal? latitude { get; set; }
		public decimal? longitude { get; set; }
		public string? agency_approved { get; set; }
		public int? number_lake { get; set; }
		public string? hamlet { get; set; }
		public string? product_des { get; set; }
		public int? attp_status { get; set; }
		public int? attp_rank { get; set; }
		public bool? is_tapchat { get; set; }
		public bool? tapchat_vipham { get; set; }
		public string? scope_id { get; set; }
		public DateTime? approved_on { get; set; }
		public string? role_name { get; set; }
		public string? hoso_id { get; set; }
		public string? hoso_code { get; set; }
		public string? attp_code { get; set; }
		public DateTime? last_thamdinh { get; set; }
		public string? thamdinh_id { get; set; }
		public DateTime? attp_next { get; set; }
		public DateTime? attp_begin { get; set; }
		public string? file_name { get; set; }
		public string? file_id { get; set; }
		public string? file_path { get; set; }
		public string? server_upload { get; set; }
		public string? provider { get; set; }
		public decimal? size_kb { get; set; }
		public string? document_name { get; set; }
		public string? document_type { get; set; }
		public string? mine_type { get; set; }
		public string? ext { get; set; }
		public int? se { get; set; }
		public int? ma { get; set; }
		public int? mi { get; set; }
		public int? dat { get; set; }
		public long? hinhthucnuoi { get; set; }
		public string? hinhthucnuoi_name { get; set; }
		public decimal? acreage_cs { get; set; }
		public decimal? acreage_nuoi { get; set; }
		public string? unit_id { get; set; }
		public string? unit_name { get; set; }
		public string? lake_code { get; set; }
		public long? ProvinceDataID { get; set; }
		public long? DistrictDataID { get; set; }
		public long? WardDataID { get; set; }
		public string? ProvinceDataName { get; set; }
		public string? DistrictDataName { get; set; }
		public string? WardDataName { get; set; }
		public long? DanhMucChuongTrinhQuanLyChatLuongID { get; set; }
		public string? DanhMucChuongTrinhQuanLyChatLuongName { get; set; }
		public long? CompanyScopeID { get; set; }
		public string? CompanyScopeName { get; set; }
		public long? DanhMucCompanyTinhTrangID { get; set; }
		public string? DanhMucCompanyTinhTrangName { get; set; }
		public DateTime? DKKDNgayCap { get; set; }
		public string? DKKDSoCap { get; set; }
		public string? DKKD { get; set; }
		public decimal? CongSuatThietKe { get; set; }
		public decimal? SanLuong { get; set; }
		public decimal? DienTich { get; set; }
		public int? SoLuongLaoDong { get; set; }
		public int? MS { get; set; }
		public long? DanhMucThiTruongID { get; set; }
		public string? DanhMucThiTruongName { get; set; }
		public string? MauNen { get; set; }
		public DateTime? NgayDangKy { get; set; }
		public DateTime? NgayHetHan { get; set; }
		public long? CompanyGroupID { get; set; }
		public string? CompanyGroupName { get; set; }
		public long? CompanyFieldID { get; set; }
		public string? CompanyFieldName { get; set; }
		
		public long? DanhMucCompanyTrangThaiID { get; set; }
		public string? DanhMucCompanyTrangThaiName { get; set; }
		public long? DuyetTaiKhoanThanhVienID { get; set; }
		public string? DuyetTaiKhoanThanhVienName { get; set; }
		public DateTime? DuyetTaiKhoanNgayGhiNhan { get; set; }
        public long? DanhMucCompanyInfoID { get; set; }
        public string? DanhMucCompanyInfoName { get; set; }
        public string? DanhMucCompanyPhanLoaiName { get; set; }
        public long? ProductGroupID { get; set; }
        public string? ProductGroupName { get; set; }
        public long? DanhMucHinhThucNuoiID { get; set; }
        public string? DanhMucHinhThucNuoiName { get; set; }
        public string? CoSoNuoiMa { get; set; }
        public decimal? CoSoNuoiDienTichNuoiTrong { get; set; }
        public int? CoSoNuoiSoLuongAo { get; set; }
        public long? PlanTypeID { get; set; }
        public string? Website { get; set; }
        public string? Facebook { get; set; }
        public string? Tiktok { get; set; }
        public string? Youtube { get; set; }
        public string? Zalo { get; set; }
        public string? COOP66 { get; set; }
        public string? FBS { get; set; }        
        public CompanyInfo()
		{            
        }
	}
}

