import { Base } from "./Base.model";

export class AgencyUser extends Base {

  type_id?: number;
  username?: string;
  password_salt?: string;
  password_hash?: string;
  phone?: string;
  email?: string;
  role_name?: string;
  department_id?: string;

}


