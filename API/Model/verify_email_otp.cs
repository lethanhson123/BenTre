namespace API.Model
{
    public class verify_email_otp
    {
        public ObjectId _id { get; set; }
        public string? verify_id { get; set; }
        public string? code { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public bool? is_active { get; set; }
        public string? ipaddress { get; set; }
        public string? device_info { get; set; }
        public string? device_platform { get; set; }
        public long? expire_time { get; set; }
        public string? email { get; set; }


    }
}
