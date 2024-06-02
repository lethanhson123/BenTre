namespace API.Model
{
    public class sampling_plan_companies
    {
        public string? uid { get; set; }
        public string? name { get; set; }
        public long? status_id { get; set; }
        public long? district_id { get; set; }
        public DateTime? plan_time { get; set; }
        public DateTime? check_date { get; set; }
    }
}
