namespace API.Model
{
    public class puc_register_log
    {
        public ObjectId _id { get; set; }
        public string? register_id { get; set; }
        public long? status_id { get; set; }
        public string? notes { get; set; }
        public DateTime? create_on { get; set; }

    }
}
