import { Base } from "./Base.model";

export class RegisterHarvest extends Base {

  from_date?: Date;
  to_date?: Date;
  species_id?: string;
  species_name?: string;
  company_id?: string;
  count_kiemsoat?: number;

  NgayBatDau?: Date
  NgayKetThuc?: Date
  StateAgencyID?: number
  StateAgencyName?: string
  CompanyInfoID?: number
  CompanyInfoName?: string
  SpeciesID?: number
  SpeciesName?: string
  DanhMucLayMauID?: number
  DanhMucLayMauName?: string
  PlanTypeID?: number
  PlanTypeName?: string
}


