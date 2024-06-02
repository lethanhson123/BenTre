namespace Data.Model
{
    public partial class product_batch_images
    {
        public long? ID { get; set; }
        public long? ParentID { get; set; }
        public DateTime? CreatedDate { get; set; }
        public long? CreatedMembershipID { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public long? LastUpdatedMembershipID { get; set; }
        public int? RowVersion { get; set; }
        public int? SortOrder { get; set; }
        public bool? Active { get; set; }
        public string? TypeName { get; set; }
        public string? Name { get; set; }
        public string? Code { get; set; }
        public string? Note { get; set; }
        public string? Display { get; set; }
        public string? FileName { get; set; }
        public string? Description { get; set; }
        public string? HTMLContent { get; set; }
        public long? DanhMucNgonNguID { get; set; }
        public long? status_id { get; set; }
        public string? uid { get; set; }
        public string? agency_id { get; set; }
        public string? file_name { get; set; }
        public string? file_id { get; set; }
        public string? file_path { get; set; }
        public string? server_upload { get; set; }
        public string? provider { get; set; }
        public decimal? size_kb { get; set; }
        public string? document_name { get; set; }
        public string? document_type { get; set; }
        public string? mine_type { get; set; }
        public string? ext { get; set; }


    }
}

