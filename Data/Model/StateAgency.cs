namespace Data.Model
{
    public partial class StateAgency : BaseModel
    {

        public long? province_id { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public long? level_id { get; set; }
        public long? type_id { get; set; }
        public string? email { get; set; }
        public string? phone { get; set; }
        public string? address { get; set; }



        public StateAgency()
        {
        }
    }
}

