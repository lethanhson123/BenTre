import { Base } from "./Base.model";

export class GiaoTrinhATTP extends Base {

  group_id?: number;
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
  NgayGhiNhan?: Date;
  CauHoiNhomName?: string;
}


