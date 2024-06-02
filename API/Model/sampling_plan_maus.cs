namespace API.Model
{
    public class sampling_plan_maus
    {
        public long? status_id { get; set; }
        public string? uid { get; set; }
        public string? name { get; set; }
        public string? detail { get; set; }
        public decimal? quantity { get; set; }
        public decimal? val { get; set; }
        public chitieu[]? chitieus { get; set; }
    }
}
