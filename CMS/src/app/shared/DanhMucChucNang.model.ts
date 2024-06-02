import { Base } from "./Base.model";

export class DanhMucChucNang extends Base{

    DanhMucUngDungID?: number;
    ListChild: DanhMucChucNang[] | undefined;
}


