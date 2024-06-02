namespace API.Model
{
    public class product_batch_tem
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? code { get; set; }
        public string? batch_id { get; set; }
        public string? product_id { get; set; }
        public string? company_id { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public decimal? count_view { get; set; }
    }
}
