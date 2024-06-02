namespace Data.Model
{
    public partial class product_batch
    {
        public ObjectId _id { get; set; }
        public string? uid { get; set; }
        public string? title { get; set; }
        public string? code { get; set; }
        public DateTime? expire_date { get; set; }
        public DateTime? pack_date { get; set; }
        public string? product_id { get; set; }
        public string? puc_id { get; set; }
        public string? packing_id { get; set; }
        public string? qrkhay { get; set; }
        public decimal? quantity { get; set; }
        public string? buyer_name { get; set; }
        public string? buyer_address { get; set; }
        public long? buyer_province { get; set; }
        public long? buyer_district { get; set; }
        public string? buyer_phone { get; set; }
        public string? buyer_email { get; set; }
        public string? location_info { get; set; }
        public string? latitude { get; set; }
        public string? longitude { get; set; }
        public string? geo_address { get; set; }
        public int? count_view { get; set; }
        public string? overview_polyline { get; set; }
        public long? status_id { get; set; }
        public string? contents { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }

        public bool? is_txng { get; set; }

    
       


    }
}

