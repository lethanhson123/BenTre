import { Base } from "./Base.model";

export class CompanyLake extends Base {
    company_id?: string;
    acreage?: number;
    unit_id?: string;
    unit_name?: string;
    species_name?: string;
    species_id?: string;
    latitude?: number;
    longitude?: number;
    district_id?: number;
    ward_id?: number;
    type_id?: number;
    hamlet?: string;
    address?: string;
    SpeciesID?: number;
    ProvinceDataID?: number;
    DistrictDataID?: number;
    WardDataID?: number;
    ProvinceDataName?: string;
    DistrictDataName?: string;
    WardDataName?: string;
}


