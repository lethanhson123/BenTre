namespace Data.Model
{
    public partial class plan_tham_dinh
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? plan_type_id { get; set; }
        public string? title { get; set; }
        public DateTime? from_date { get; set; }
        public int? year_plan { get; set; }
        public DateTime? due_data { get; set; }
        public long? time_type { get; set; }
        public DateTime? modify_on { get; set; }
        public DateTime? create_on { get; set; }
        public long? status_id { get; set; }
        public string? notes { get; set; }
        public string? agency_id { get; set; }
        public plan_tham_dinh_agency_users[]? agency_users { get; set; }
        public plan_tham_dinh_companies[]? companies { get; set; }
        public document[]? documents { get; set; }
        public plan_tham_dinh_districts[]? districts { get; set; }
        public plan_tham_dinh_money_record[]? money_record { get; set; }


    }
}

