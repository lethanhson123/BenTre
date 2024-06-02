namespace API.Model
{
	public class nt2mv_plan
    {
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? plan_id { get; set; }
        public int? kl_mau { get; set; }
        public string? chitieu { get; set; }
		public long? district_id { get; set; }
		public string? district_name { get; set; }
		public string? agency_user_id { get; set; }
        public string? nuoc_rong { get; set; }
        public string? nuoc_lon { get; set; }
        public decimal? sl_dinhky { get; set; }
        public decimal? sl_kehoach { get; set; }
        public decimal? sl_tangcuong { get; set; }
        public DateTime? from_date { get; set; }
        public DateTime? to_date { get; set; }
        public long? status_id { get; set; }
    }
}
