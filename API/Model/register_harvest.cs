namespace API.Model
{
    public class register_harvest
    {
        public ObjectId _id { get; set; }
        public DateTime? from_date { get; set; }
        public DateTime? to_date { get; set; }
        public string? species_id { get; set; }
        public string? species_name { get; set; }
        public string? company_id { get; set; }
        public int? count_kiemsoat { get; set; }
        public string? uid { get; set; }
        public register_harvest_items[]? items { get; set; }

    }
}
