namespace API.Model
{
    public class tham_dinh_company
    {
        public ObjectId _id { get; set; }
        public string? thamdinh_id { get; set; }
        public string? company_id { get; set; }
        public string? company_name { get; set; }
        public DateTime? thamdinh_date { get; set; }
        public string? business_number { get; set; }
        public string? address { get; set; }
        public long? district_id { get; set; }
        public string? phone { get; set; }
        public string? email { get; set; }
        public string? register_code { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public long? status_id { get; set; }
        public string? notes { get; set; }
        public int? rank_number { get; set; }
        public long? thamdinh_type { get; set; }
        public string? product_des { get; set; }
        public string[]? product_groups { get; set; }
        public long? bienban_type { get; set; }
        public int? month { get; set; }
        public int? year { get; set; }
        public DateTime? register_date { get; set; }
        public company_info_attp_info_mucloi? mucloi { get; set; }
        public string? agency_user_id { get; set; }
        public document[]? documents { get; set; }

    }
}
