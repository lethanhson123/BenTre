namespace API.Model
{
    public class thanhtrachuyennghanh_planyear_maus
    {
        public string? uid { get; set; }
        public string? name { get; set; }
        public decimal? quantity { get; set; }
        public decimal? val { get; set; }
        public long? status_id { get; set; }
        public chitieu[]? chitieus { get; set; }

    }
}
