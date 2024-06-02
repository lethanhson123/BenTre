import { Base } from "./Base.model";

export class NguonVon extends Base {

  fromby?: string;
  from_date?: Date;
  to_date?: Date;
  total_money_trieu?: number;
  Nam?: number;
  TongCong?: number;
  DaChi?: number;
  ConLai?: number;
  NgayBatDau?: Date;
  NgayKetThuc?: Date;
  StateAgencyID001?: number;
  StateAgencyName001?: string;
  StateAgencyID002?: number;
  StateAgencyName002?: string;
  AgencyDepartmentID?: number;
  AgencyDepartmentName?: string;
  ThanhVienID?: number;
  ThanhVienName?: string;
}


