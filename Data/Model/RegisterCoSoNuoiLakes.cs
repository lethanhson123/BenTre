namespace Data.Model
{
    public partial class RegisterCoSoNuoiLakes : BaseModel
    {

        public decimal? acreage { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public decimal? latitude { get; set; }
        public decimal? longitude { get; set; }
        public long? type_id { get; set; }
        public long? district_id { get; set; }
        public long? ward_id { get; set; }
        public string? hamlet { get; set; }
        public string? address { get; set; }
        public string? species_id { get; set; }
        public string? species_name { get; set; }

        public RegisterCoSoNuoiLakes()
        {
        }
    }
}

