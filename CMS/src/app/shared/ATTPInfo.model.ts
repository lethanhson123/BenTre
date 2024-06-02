import { Base } from "./Base.model";

export class ATTPInfo extends Base {

  company_id?: string;
  product_des?: string;
  reason_notes?: string;
  create_from?: number;
  form_type_id?: number;
  send_date?: Date;
  cer_level?: number;
  thamdinh_uid?: string;
  cer_notes?: string;
  cer_begin_date?: Date;
  cer_code?: string;
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
  StateAgencyID?: number;
  NgayGhiNhan?: Date;
  DanhMucATTPLoaiHoSoID?: number;
  DanhMucATTPLoaiHoSoName?: string;
  DanhMucATTPTinhTrangID?: number;
  DanhMucATTPTinhTrangName?: string;
  DanhMucATTPXepLoaiID?: number;
  DanhMucATTPXepLoaiName?: string;
  CompanyInfoName?: string;
}


