import { Base } from "./Base.model";

export class CompanyUser extends Base {
    username?: string;
    fullname?: string;
    email?: string;
    phone?: string;
    password_salt?: string;
    password_hash?: string;
    company_id?: string;
    role_id?: number;

}


