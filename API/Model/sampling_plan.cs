namespace API.Model
{
    public class sampling_plan
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? name { get; set; }
        public string? company_id { get; set; }
        public int? time_type { get; set; }
        public int? year_plan { get; set; }
        public int? month_plan { get; set; }
        public DateTime? from_date { get; set; }
        public DateTime? to_date { get; set; }
        public string? plan_type_id { get; set; }
        public long? status_id { get; set; }
        public sampling_plan_agency_users[]? agency_users { get; set; }
        public long? district_id { get; set; }
        public sampling_plan_districts[]? districts { get; set; }
        public string? district_name { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public string[]? money_record { get; set; }
        public sampling_plan_maus[]? maus { get; set; }
        public sampling_plan_companies[]? companies { get; set; }
        public string? notes { get; set; }
        public string? detail { get; set; }
        public int? sodot { get; set; }

    }
}
