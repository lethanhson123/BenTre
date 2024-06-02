namespace Data.Model
{
    public partial class puc_document
    {
        public string? register_id { get; set; }
        public string? document_name { get; set; }
        public string? document_id { get; set; }
        public DateTime? create_on { get; set; }
        public DateTime? modify_on { get; set; }
        public long? status_id { get; set; }
        public string? file_mau { get; set; }
        public string? notes { get; set; }
        public int? version_update { get; set; }
        public string? agency_id { get; set; }
        public document? file_attach { get; set; }
    }
}

