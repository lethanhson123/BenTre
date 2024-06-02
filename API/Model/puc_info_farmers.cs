namespace API.Model
{
    public class puc_info_farmers
    {

        public string? farm_id { get; set; }
        public long? status_id { get; set; }
        public string? fullname { get; set; }
        public string? phone { get; set; }
        public string? address { get; set; }
        public int? yearold { get; set; }
        public string? identity_card { get; set; }
        public int? tree_old { get; set; }
        public string? email { get; set; }
        public decimal? acreage_m2 { get; set; }
        public decimal? acreage_ha { get; set; }
        public puc_info_maps? location { get; set; }


    }
}
