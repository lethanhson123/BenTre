namespace Data.Model
{
    public partial class WardData : BaseModel
    {
        public long? ward_id { get; set; }
        public string? division_type { get; set; }
        public string? short_code { get; set; }
        public long? district_id { get; set; }
        public WardData()
        {
        }
    }
}

