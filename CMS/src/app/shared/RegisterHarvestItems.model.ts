import { Base } from "./Base.model";

export class RegisterHarvestItems extends Base {

  from_date?: Date;
  quantity?: number;
  unit_id?: string;
  unit_name?: string;
  address?: string;
  place_buy?: string;
  kiemsoat_id?: string;

  NgayGhiNhan?: Date;
  SoLuong?:number;
  ProductUnitID?:number;
  DanhMucATTPXepLoaiID?: string;
  DanhMucATTPXepLoaiName?:number;
  FileName001?:string;
  SoLuong001?:number;
  Note001?:string;
  Code001?:string;
  GiayChungNhanXuatXu?:string;
}


