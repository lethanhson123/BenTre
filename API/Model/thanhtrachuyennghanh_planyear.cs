namespace API.Model
{
    public class thanhtrachuyennghanh_planyear
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? company_id { get; set; }
        public int? year_number { get; set; }
        public long? status_id { get; set; }
        public int? result_status { get; set; }
        public thanhtrachuyennghanh_planyear_maus[]? maus { get; set; }
        public bool? is_violate { get; set; }
        public int? violate_money { get; set; }
        public string? violate_note { get; set; }
        public DateTime? plan_time { get; set; }
        public string? thanhtra_id { get; set; }
        public DateTime? modify_on { get; set; }

    }
}
