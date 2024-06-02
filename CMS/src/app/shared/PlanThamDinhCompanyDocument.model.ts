import { Base } from "./Base.model";

export class PlanThamDinhCompanyDocument extends Base{
    ThanhVienID?: number;
    DocumentTemplateID?: number;
    ThanhVienName?: string;
    DanhMucChucDanhName?: string;
    PlanThamDinhID?: number;
    NgayGhiNhan?: Date;
    IsLamMoi?: boolean;
    ThanhVienID001?: number;
    ThanhVienName001?: string;
    DanhMucChucDanhName001?: string;
    RegisterHarvestID?: number;
    RegisterHarvestItemsID?: number;
    PlanTypeID?: number;
    CompanyInfoDonViDongGoiID?:number;
}


