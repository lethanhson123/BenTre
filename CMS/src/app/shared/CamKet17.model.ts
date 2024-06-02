import { Base } from "./Base.model";

export class CamKet17 extends Base {

  province_id?: number;
  district_id?: number;
  ward_id?: number;
  hamlet?: string;
  address?: string;
  fullname?: string;
  email?: string;
  phone?: string;
  month_number?: number;
  year_number?: number;
  agency_user_id?: string;
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

  Nam?: number;
  Thang?: number;
  DonViToChucCount?: number;
  DonViToChucCountThangLuyKe?: number;
  DonViToChucCountThangLuyKeKiemTra?: number;
  DonViToChucCountThangLuyKeKiemTraChuaDat?: number;
}


