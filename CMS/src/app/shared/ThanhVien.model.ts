import { Base } from "./Base.model";

export class ThanhVien extends Base {

    TaiKhoan?: string;
    MatKhau?: string;
    GUIDCode?: string;
    CCCD?: string;
    DienThoai?: string;
    Email?: string;
    DiaChi?: string;
    ApThon?: string;
    ProvinceDataID?: number;
    DistrictDataID?: number;
    WardDataID?: number;
    GioiTinh?: string;
    NgaySinh?: Date;
    DanhMucChucDanhID?: number;
    ProvinceDataName?: number;
    DistrictDataName?: number;
    WardDataName?: number;
    AgencyDepartmentID?: number;
    StateAgencyID?: number;   
    CompanyInfoID?: number;   
    PlanThamDinhID?: number;
    PlanThamDinhCode?: string;
    CompanyInfoName?: string;
    DanhMucChucDanhName?: string;
    AgencyDepartmentName?: string;
    StateAgencyName?: string;
}


