namespace API.Model
{
    public class register_harvest_items
    {
        public DateTime? from_date { get; set; }
        public decimal? quantity { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public string? address { get; set; }
        public string? place_buy { get; set; }
        public string? notes { get; set; }
        public string? uid { get; set; }
        public long? status_id { get; set; }
        public string? kiemsoat_id { get; set; }

    }
}
