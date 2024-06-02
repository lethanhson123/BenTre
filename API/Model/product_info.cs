namespace Data.Model
{
    public partial class product_info
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? name { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? send_date { get; set; }
        
        public string? code { get; set; }
        public bool? Active { get; set; }
        public string? Note { get; set; }
        public string? gs1_code { get; set; }
        public string? group_id { get; set; }
        public string? species_id { get; set; }
        public string? company_id { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public product_info_price? price { get; set; }
        public long? status_id { get; set; }
        public bool? is_delete { get; set; }
        public long? is_public { get; set; }
        public string? congbo_note { get; set; }
        public DateTime? modify_on { get; set; }
        public DateTime? congbo_date { get; set; }
        public string? send_note { get; set; }
        public product_info_file_congbo? file_congbo { get; set; }

    }
}

