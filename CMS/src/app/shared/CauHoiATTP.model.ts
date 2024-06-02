import { Base } from "./Base.model";
import { CauHoiATTPQuestions } from "./CauHoiATTPQuestions.model";

export class CauHoiATTP extends Base {
  group_id?: number;
  ListCauHoiATTPQuestions: CauHoiATTPQuestions[];
}
