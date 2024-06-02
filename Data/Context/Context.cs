
namespace Data.Context
{
	public partial class Context : DbContext
	{
		public Context()
		{
		}
		public Context(DbContextOptions<Context> options)
			: base(options)
		{
		}

		public virtual DbSet<Data.Model.AgencyMenu> AgencyMenu { get; set; }
		public virtual DbSet<Data.Model.AgencyDepartment> AgencyDepartment { get; set; }
		public virtual DbSet<Data.Model.AgencyDepartmentMenus> AgencyDepartmentMenus { get; set; }
		public virtual DbSet<Data.Model.AgencyUser> AgencyUser { get; set; }


		public virtual DbSet<Data.Model.BienBanATTP> BienBanATTP { get; set; }


		public virtual DbSet<Data.Model.ATTPInfo> ATTPInfo { get; set; }
		public virtual DbSet<Data.Model.ATTPInfoDocuments> ATTPInfoDocuments { get; set; }
		public virtual DbSet<Data.Model.ATTPInfoProductBads> ATTPInfoProductBads { get; set; }
		public virtual DbSet<Data.Model.ATTPInfoProductGoods> ATTPInfoProductGoods { get; set; }
		public virtual DbSet<Data.Model.ATTPInfoProductGroups> ATTPInfoProductGroups { get; set; }
		public virtual DbSet<Data.Model.ATTPInfoTimelines> ATTPInfoTimelines { get; set; }

		public virtual DbSet<Data.Model.ATTPTiepNhan> ATTPTiepNhan { get; set; }
		public virtual DbSet<Data.Model.ATTPTiepNhanDocuments> ATTPTiepNhanDocuments { get; set; }
		public virtual DbSet<Data.Model.ATTPTiepNhanProductGroups> ATTPTiepNhanProductGroups { get; set; }

		
		public virtual DbSet<Data.Model.CamKet17> CamKet17 { get; set; }
		public virtual DbSet<Data.Model.CauHoiATTP> CauHoiATTP { get; set; }
		
		public virtual DbSet<Data.Model.CauHoiATTPQuestions> CauHoiATTPQuestions { get; set; }
		public virtual DbSet<Data.Model.CauHoiNhom> CauHoiNhom { get; set; }
		

		public virtual DbSet<Data.Model.CompanyExamination> CompanyExamination { get; set; }
		public virtual DbSet<Data.Model.CompanyExaminationQuestions> CompanyExaminationQuestions { get; set; }

		public virtual DbSet<Data.Model.CompanyFields> CompanyFields { get; set; }

		public virtual DbSet<Data.Model.CompanyGroup> CompanyGroup { get; set; }

		public virtual DbSet<Data.Model.CompanyInfo> CompanyInfo { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoFields> CompanyInfoFields { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoGroups> CompanyInfoGroups { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoProducts> CompanyInfoProducts { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoProductGroups> CompanyInfoProductGroups { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoSpecies> CompanyInfoSpecies { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoLichSuKiemTra> CompanyInfoLichSuKiemTra { get; set; }
		public virtual DbSet<Data.Model.CompanyInfoStateAgency> CompanyInfoStateAgency { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoDonViDongGoi> CompanyInfoDonViDongGoi { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoDonViDongGoiNongHo> CompanyInfoDonViDongGoiNongHo { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoDonViDongGoiSanPham> CompanyInfoDonViDongGoiSanPham { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoDonViDongGoiThiTruong> CompanyInfoDonViDongGoiThiTruong { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoDonViDongGoiDocuments> CompanyInfoDonViDongGoiDocuments { get; set; }

        public virtual DbSet<Data.Model.CompanyInfoVungTrong> CompanyInfoVungTrong { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoVungTrongDocuments> CompanyInfoVungTrongDocuments { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoVungTrongNongHo> CompanyInfoVungTrongNongHo { get; set; }
        public virtual DbSet<Data.Model.CompanyInfoVungTrongToaDo> CompanyInfoVungTrongToaDo { get; set; }

        public virtual DbSet<Data.Model.CompanyLake> CompanyLake { get; set; }
		public virtual DbSet<Data.Model.CompanyScope> CompanyScope { get; set; }

		public virtual DbSet<Data.Model.CompanyStaffExam> CompanyStaffExam { get; set; }
		public virtual DbSet<Data.Model.CompanyStaffExamAnswers> CompanyStaffExamAnswers { get; set; }

		public virtual DbSet<Data.Model.CompanyUser> CompanyUser { get; set; }

		public virtual DbSet<Data.Model.CoSoNuoiDocument> CoSoNuoiDocument { get; set; }

		
		public virtual DbSet<Data.Model.DistrictData> DistrictData { get; set; }

		public virtual DbSet<Data.Model.DocumentTemplate> DocumentTemplate { get; set; }

		
		public virtual DbSet<Data.Model.GiaoTrinhATTP> GiaoTrinhATTP { get; set; }

		

		public virtual DbSet<Data.Model.KienThucATTP> KienThucATTP { get; set; }

		

		public virtual DbSet<Data.Model.NguonVon> NguonVon { get; set; }
        public virtual DbSet<Data.Model.NguonVonChiTiet> NguonVonChiTiet { get; set; }

        public virtual DbSet<Data.Model.DanhMucHinhThucNuoi> DanhMucHinhThucNuoi { get; set; }
        public virtual DbSet<Data.Model.DanhMucChucDanh> DanhMucChucDanh { get; set; }
		public virtual DbSet<Data.Model.DanhMucChucNang> DanhMucChucNang { get; set; }
		public virtual DbSet<Data.Model.DanhMucThanhVien> DanhMucThanhVien { get; set; }
		public virtual DbSet<Data.Model.DanhMucUngDung> DanhMucUngDung { get; set; }
		public virtual DbSet<Data.Model.DanhMucSanPhamPhanLoai> DanhMucSanPhamPhanLoai { get; set; }
		public virtual DbSet<Data.Model.DanhMucChuongTrinhQuanLyChatLuong> DanhMucChuongTrinhQuanLyChatLuong { get; set; }
        public virtual DbSet<Data.Model.DanhMucCompanyInfo> DanhMucCompanyInfo { get; set; }
        public virtual DbSet<Data.Model.DanhMucCompanyTinhTrang> DanhMucCompanyTinhTrang { get; set; }
		public virtual DbSet<Data.Model.DanhMucXepLoai> DanhMucXepLoai { get; set; }
		public virtual DbSet<Data.Model.DanhMucDangKyCapGiay> DanhMucDangKyCapGiay { get; set; }
		public virtual DbSet<Data.Model.DanhMucThiTruong> DanhMucThiTruong { get; set; }
		public virtual DbSet<Data.Model.DanhMucCompanyPhanLoai> DanhMucCompanyPhanLoai { get; set; }
		public virtual DbSet<Data.Model.DanhMucCompanyTrangThai> DanhMucCompanyTrangThai { get; set; }
		public virtual DbSet<Data.Model.DanhMucATTPLoaiHoSo> DanhMucATTPLoaiHoSo { get; set; }
		public virtual DbSet<Data.Model.DanhMucATTPTinhTrang> DanhMucATTPTinhTrang { get; set; }
		public virtual DbSet<Data.Model.DanhMucATTPXepLoai> DanhMucATTPXepLoai { get; set; }
		public virtual DbSet<Data.Model.DanhMucBienBanATTP> DanhMucBienBanATTP { get; set; }
		public virtual DbSet<Data.Model.DanhMucThamDinhKetQuaDanhGia> DanhMucThamDinhKetQuaDanhGia { get; set; }
        public virtual DbSet<Data.Model.DanhMucLayMau> DanhMucLayMau { get; set; }
        public virtual DbSet<Data.Model.DanhMucLayMauChiTieu> DanhMucLayMauChiTieu { get; set; }
        public virtual DbSet<Data.Model.DanhMucLayMauPhanLoai> DanhMucLayMauPhanLoai { get; set; }
        public virtual DbSet<Data.Model.DanhMucThoiGianLayMau> DanhMucThoiGianLayMau { get; set; }
        public virtual DbSet<Data.Model.DanhMucProductGroup> DanhMucProductGroup { get; set; }
        public virtual DbSet<Data.Model.DanhMucQuocGia> DanhMucQuocGia { get; set; }
        public virtual DbSet<Data.Model.ThanhVien> ThanhVien { get; set; }
		public virtual DbSet<Data.Model.ThanhVienToken> ThanhVienToken { get; set; }
		public virtual DbSet<Data.Model.ThanhVienLichSuTruyCap> ThanhVienLichSuTruyCap { get; set; }		
		public virtual DbSet<Data.Model.ThanhVienPhanQuyenChucNang> ThanhVienPhanQuyenChucNang { get; set; }
		public virtual DbSet<Data.Model.ThanhVienPhanQuyenKhuVuc> ThanhVienPhanQuyenKhuVuc { get; set; }
		public virtual DbSet<Data.Model.ThanhVienThietBi> ThanhVienThietBi { get; set; }
		public virtual DbSet<Data.Model.ThanhVienLichSuThongBao> ThanhVienLichSuThongBao { get; set; }

        public virtual DbSet<Data.Model.ThanhVienThongBao> ThanhVienThongBao { get; set; }


        public virtual DbSet<Data.Model.PhanAnh> PhanAnh { get; set; }

       

        public virtual DbSet<Data.Model.PlanType> PlanType { get; set; }

       
        public virtual DbSet<Data.Model.ProductGroup> ProductGroup { get; set; }

        public virtual DbSet<Data.Model.ProductUnit> ProductUnit { get; set; }

        public virtual DbSet<Data.Model.ProvinceData> ProvinceData { get; set; }

        

        public virtual DbSet<Data.Model.Species> Species { get; set; }

       

        public virtual DbSet<Data.Model.WardData> WardData { get; set; }

      

        public virtual DbSet<Data.Model.RegisterCoSoNuoi> RegisterCoSoNuoi { get; set; }

        public virtual DbSet<Data.Model.RegisterCoSoNuoiDocuments> RegisterCoSoNuoiDocuments { get; set; }
        public virtual DbSet<Data.Model.RegisterCoSoNuoiLakes> RegisterCoSoNuoiLakes { get; set; }

      
      
		public virtual DbSet<Data.Model.StateAgency> StateAgency { get; set; }
        public virtual DbSet<Data.Model.StateAgencyMenus> StateAgencyMenus { get; set; }

        public virtual DbSet<Data.Model.RegisterHarvest> RegisterHarvest { get; set; }
        public virtual DbSet<Data.Model.RegisterHarvestItems> RegisterHarvestItems { get; set; }

      
        public virtual DbSet<Data.Model.ProductInfo> ProductInfo { get; set; }
        public virtual DbSet<Data.Model.ProductInfoDocuments> ProductInfoDocuments { get; set; }

        public virtual DbSet<Data.Model.PlanThamDinh> PlanThamDinh { get; set; }        
        public virtual DbSet<Data.Model.PlanThamDinhCompanies> PlanThamDinhCompanies { get; set; }                        
		public virtual DbSet<Data.Model.PlanThamDinhThanhVien> PlanThamDinhThanhVien { get; set; }
		public virtual DbSet<Data.Model.PlanThamDinhCompanyDocument> PlanThamDinhCompanyDocument { get; set; }
		public virtual DbSet<Data.Model.PlanThamDinhCompanyProductGroup> PlanThamDinhCompanyProductGroup { get; set; }
		public virtual DbSet<Data.Model.PlanThamDinhCompanyBienBan> PlanThamDinhCompanyBienBan { get; set; }
        public virtual DbSet<Data.Model.PlanThamDinhDanhMucLayMau> PlanThamDinhDanhMucLayMau { get; set; }
        public virtual DbSet<Data.Model.PlanThamDinhDanhMucLayMauChiTieu> PlanThamDinhDanhMucLayMauChiTieu { get; set; }
        public virtual DbSet<Data.Model.PlanThamDinhDistrictData> PlanThamDinhDistrictData { get; set; }

        public virtual DbSet<Data.Model.TapTinDinhKem> HinhAnh { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			if (!optionsBuilder.IsConfigured)
			{
				optionsBuilder.UseSqlServer(GlobalHelper.SQLServerConectionString);
			}
		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			OnModelCreatingPartial(modelBuilder);
		}
		partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
	}
}
