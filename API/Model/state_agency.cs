namespace API.Model
{
    public class state_agency
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? name { get; set; }
        public long? province_id { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public long? level_id { get; set; }
        public long? type_id { get; set; }
        public string? email { get; set; }
        public string? phone { get; set; }
        public string? address { get; set; }
        public string? descriptions { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public string[]? menus { get; set; }


    }
}
