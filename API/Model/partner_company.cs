namespace API.Model
{
    public class partner_company
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? name { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public string? address { get; set; }
        public string? company_id { get; set; }
        public string? phone { get; set; }
        public string? email { get; set; }
        public partner_company_location? location { get; set; }
    
    }
}
