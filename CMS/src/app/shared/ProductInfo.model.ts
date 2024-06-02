import { Base } from "./Base.model";

export class ProductInfo extends Base {

  gs1_code?: string;
  group_id?: string;
  species_id?: string;
  company_id?: string;
  unit_id?: string;
  unit_name?: string;
  price_val?: number;
  price_min?: number;
  price_max?: number;
  is_public?: number;
  congbo_note?: string;
  congbo_date?: Date;
  file_name?: string;
  file_id?: string;
  file_path?: string;
  server_upload?: string;
  provider?: string;
  size_kb?: number;
  document_name?: string;
  document_type?: string;
  mine_type?: string;
  ext?: string;
  send_note?: string;
  create_on?: Date;
  send_date?: Date;
  ProductGroupID?: number;
  CompanyGroupID?: number;
  ProductUnitID?: number;
  DanhMucQuocGiaID?: number;
  GS1?: string;
  HSCode?: string;
  HanSuDung?: number;
  HanSuDungPAO?: number;
  TieuChuan?: string;
  KhoiLuongSanPham?: string;
  QuyCachDongGoi?: string;
  QuyCachBaoQuan?: string;
  LoaiHinhSanPham?: string;
  ThiTruongPhanPhoi?: string;
  ThongTinCanhBaoNguoiDung?: string;
  MoTaThanhPhanSanPham?: string;
  GioiThieuSanPham?: string;

  
  NguyenLieuGiong?: string;
  NguyenLieuTenKhoaHoc?: string;
  NguyenLieuSanLuongTrungBinh?: string;
  NguyenLieuChuKySanXuat?: string;
  NguyenLieuSoLuongNguonCungUng?: string;
  NguyenLieuTongDienTichNguonCungUng?: string;
  NguyenLieuMaSoNguonCungUng?: string;
  
  NhaSanXuatCheBienTen?: string;
  NhaSanXuatCheBienTieuChuan?: string;
  NhaSanXuatCheBienDiaChi?: string;
  NhaSanXuatCheBienKinhDo?: string;
  NhaSanXuatCheBienViDo?: string;
  
  DonViDongGoiID?: string;
  DonViDongGoiTen?: string;
  DonViDongGoiDiaChi?: string;
  DonViDongGoiKinhDo?: string;
  DonViDongGoiViDo?: string;

  KhoNguyenLieuDieuKienLuuTru?: string;
  KhoNguyenLieuNhietDo?: string;
  KhoNguyenLieuID?: string;
  KhoNguyenLieuTen?: string;
  KhoNguyenLieuDiaChi?: string;
  KhoNguyenLieuKinhDo?: string;
  KhoNguyenLieuViDo?: string;

  KhoThuongMaiDieuKienLuuTru?: string;
  KhoThuongMaiNhietDo?: string;
  KhoThuongMaiID?: string;
  KhoThuongMaiTen?: string;
  KhoThuongMaiDiaChi?: string;
  KhoThuongMaiKinhDo?: string;
  KhoThuongMaiViDo?: string;

  DanhMucATTPXepLoaiID?: number;
  DanhMucATTPXepLoaiName?: string;
  NgayGhiNhan?: Date;

  CompanyInfoID?: number;
  CompanyInfoName?: string;
}


