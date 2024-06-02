import { Base } from "./Base.model";
import { PlanThamDinhCompanies } from "./PlanThamDinhCompanies.model";
import { PlanThamDinhDanhMucLayMau } from "./PlanThamDinhDanhMucLayMau.model";
import { PlanThamDinhDistrictData } from "./PlanThamDinhDistrictData.model";
import { PlanThamDinhThanhVien } from "./PlanThamDinhThanhVien.model";

export class PlanThamDinh extends Base {

  plan_type_id?: string;
  from_date?: Date;
  due_data?: Date;
  time_type?: number;
  year_plan?: number;
  StateAgencyID?: number;
  StateAgencyName?: string;
  NgayBatDau?: Date;   
  NgayKetThuc?: Date;   
  NgayGuiMau?: Date;   
  Nam?: number;   
  Thang?: number;   
  SoDot?: number;   
  DanhMucThoiGianLayMauID?: number;
  DanhMucThoiGianLayMauName?: string;
  DanhMucATTPXepLoaiID?: number;
  DanhMucATTPXepLoaiName?: string;
  DanhMucATTPTinhTrangID?: number;
  DanhMucATTPTinhTrangName?: string;
  CompanyInfoID?: number;
  CompanyInfoName?: string;
  CompanyInfoDonViDongGoiID?: number;

  ListPlanThamDinhCompanies: PlanThamDinhCompanies[] | undefined;
  ListPlanThamDinhThanhVien: PlanThamDinhThanhVien[] | undefined;
  ListPlanThamDinhDistrictData: PlanThamDinhDistrictData[] | undefined;
  ListPlanThamDinhDanhMucLayMau: PlanThamDinhDanhMucLayMau[] | undefined;

}


