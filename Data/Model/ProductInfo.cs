namespace Data.Model
{
    public partial class ProductInfo : BaseModel
    {

        public string? gs1_code { get; set; }
        public string? group_id { get; set; }
        public string? species_id { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? send_date { get; set; }
        public string? send_note { get; set; }
        public string? company_id { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public decimal? price_val { get; set; }
        public decimal? price_min { get; set; }
        public decimal? price_max { get; set; }
        public long? is_public { get; set; }
        public string? congbo_note { get; set; }
        public DateTime? congbo_date { get; set; }
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
		public long? ProductGroupID { get; set; }
		public long? CompanyGroupID { get; set; }
		public long? ProductUnitID { get; set; }
		public long? DanhMucQuocGiaID { get; set; }
		public string? GS1 { get; set; }
		public string? HSCode { get; set; }
		public long? HanSuDung { get; set; }
		public long? HanSuDungPAO { get; set; }
		public string? TieuChuan { get; set; }
		public string? KhoiLuongSanPham { get; set; }
		public string? QuyCachDongGoi { get; set; }
		public string? QuyCachBaoQuan { get; set; }
		public string? LoaiHinhSanPham { get; set; }
		public string? ThiTruongPhanPhoi { get; set; }
        public string? ThongTinCanhBaoNguoiDung { get; set; }
        public string? MoTaThanhPhanSanPham { get; set; }
        public string? GioiThieuSanPham { get; set; }

        public string? NguyenLieuGiong { get; set; }
		public string? NguyenLieuTenKhoaHoc { get; set; }
		public string? NguyenLieuSanLuongTrungBinh { get; set; }
		public string? NguyenLieuChuKySanXuat { get; set; }
		public string? NguyenLieuSoLuongNguonCungUng { get; set; }
		public string? NguyenLieuTongDienTichNguonCungUng { get; set; }
		public string? NguyenLieuMaSoNguonCungUng { get; set; }

		public string? NhaSanXuatCheBienTen { get; set; }
        public string? NhaSanXuatCheBienTieuChuan { get; set; }
        public string? NhaSanXuatCheBienDiaChi { get; set; }
        public string? NhaSanXuatCheBienKinhDo { get; set; }
        public string? NhaSanXuatCheBienViDo { get; set; }

		public string? DonViDongGoiID { get; set; }
		public string? DonViDongGoiTen { get; set; }
		public string? DonViDongGoiDiaChi { get; set; }
		public string? DonViDongGoiKinhDo { get; set; }
		public string? DonViDongGoiViDo { get; set; }

		public string? KhoNguyenLieuDieuKienLuuTru { get; set; }
		public string? KhoNguyenLieuNhietDo { get; set; }
		public string? KhoNguyenLieuID { get; set; }
		public string? KhoNguyenLieuTen { get; set; }
		public string? KhoNguyenLieuDiaChi { get; set; }
		public string? KhoNguyenLieuKinhDo { get; set; }
		public string? KhoNguyenLieuViDo { get; set; }

        public string? KhoThuongMaiDieuKienLuuTru { get; set; }
        public string? KhoThuongMaiNhietDo { get; set; }
        public string? KhoThuongMaiID { get; set; }
        public string? KhoThuongMaiTen { get; set; }
        public string? KhoThuongMaiDiaChi { get; set; }
        public string? KhoThuongMaiKinhDo { get; set; }
        public string? KhoThuongMaiViDo { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public long? StateAgencyID { get; set; }
        public string? StateAgencyName { get; set; }
        public ProductInfo()
        {
            NgayGhiNhan = GlobalHelper.InitializationDateTime;            
        }
    }
}

