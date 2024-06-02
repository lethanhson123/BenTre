import { Base } from "./Base.model";
import { CompanyInfo } from "./CompanyInfo.model";
import { PlanThamDinhCompanyProductGroup } from "./PlanThamDinhCompanyProductGroup.model";

export class PlanThamDinhCompanies extends Base {
    ATTPInfoID?: number;
    ATTPInfoName?: string;
    CompanyInfoID?: number;
    CompanyInfoName?: string;
    DanhMucATTPLoaiHoSoID?: number;
    DanhMucATTPLoaiHoSoName?: string;
    DanhMucATTPXepLoaiID?: number;
    DanhMucATTPXepLoaiName?: string;
    NgayGhiNhan?: Date;   
    NgayHetHan?: Date;   
    NgayHieuLucGiayChungNhan?: Date;  
    MaSo?: string;
    CompanyLakeID?: number;
    CompanyLakeName?: string;
    DanhMucLayMauID?: number;
    DanhMucLayMauName?: string;
    DanhMucLayMauChiTieuID?: number;
    DanhMucLayMauChiTieuName?: string;
    SoLuongLayMau?: number;
    DistrictDataID?: number;
    DistrictDataName?: string;
    DanhMucProductGroupID?: number;
    DanhMucProductGroupName?: string;
    CompanyInfoDonViDongGoiID?: number;
    LuatDieu?: string;
    LuatKhoan?: string;
    LuatDiem?: string;
    ViPham?: string;
    SoTienViPham?: number;

    CompanyInfo!: CompanyInfo;
    ListPlanThamDinhCompanyProductGroup: PlanThamDinhCompanyProductGroup[] | undefined;
}


