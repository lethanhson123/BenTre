import { Base } from "./Base.model";

export class PlanThamDinhThanhVien extends Base {
    ThanhVienID?: number;
    ThanhVienName?: string;
    DanhMucChucDanhID?: number;
    DanhMucChucDanhName?: string;
    NgayGhiNhan?: Date;
    DistrictDataID?: number;
    DistrictDataName?: string;
    SoLuongLayMau?: number;
    NuocRong?: string;
    NuocLon?: string;
}


