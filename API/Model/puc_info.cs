namespace API.Model
{
    public class puc_info
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? puc { get; set; }
        public string? name { get; set; }
        public decimal? acreage_ha { get; set; }
        public string? company_id { get; set; }
        public string? address { get; set; }
        public long? province_id { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public string? hamlet { get; set; }
        public puc_info_maps? puc_location { get; set; }
        public puc_info_maps[]? maps { get; set; }
        public puc_info_farmers[]? farmers { get; set; }
        public int? number_farmer { get; set; }
        public string? species_id { get; set; }
        public string? species_name { get; set; }
        public int? harvest_year { get; set; }
        public string? harvest_unit { get; set; }
        public string? harvest_unit_name { get; set; }
        public long? status_id { get; set; }
        public string? notes { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public long? register_type { get; set; }
        public string[]? markets { get; set; }
        public puc_info_pucs[]? pucs { get; set; }
        public int? version_update { get; set; }
        
    }

}
