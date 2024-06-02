import { Base } from "./Base.model";
import { PlanThamDinhDanhMucLayMauChiTieu } from "./PlanThamDinhDanhMucLayMauChiTieu.model";

export class PlanThamDinhDanhMucLayMau extends Base {

    DanhMucLayMauID?: number;
    DanhMucLayMauName?: string;
    DanhMucLayMauChiTieuID?: number;
    DanhMucLayMauChiTieuName?: string;
    SoLuongLayMau?: number;
    ProductUnitID?: number;
    ProductUnitName?: string;
    DistrictDataID?: number;
    DistrictDataName?: string;
    ThanhVienID?: number;
    ThanhVienName?: string;
    CompanyInfoID?: number;
    CompanyInfoName?: string;
    CompanyLakeID?: number;
    CompanyLakeName?: string;
    NgayGhiNhan?: Date;
    ChatDocHai?: string;
    KetQuaPhanTich?: number;
    GioiHanToiDa?: string;
    DanhMucLayMauPhanLoaiID?: number;
    DanhMucLayMauPhanLoaiName?: string;
    IsGoiY?: boolean;

    ListPlanThamDinhDanhMucLayMauChiTieu: PlanThamDinhDanhMucLayMauChiTieu[] | undefined;
}


