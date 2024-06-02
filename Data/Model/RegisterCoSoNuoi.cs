namespace Data.Model
{
    public partial class RegisterCoSoNuoi : BaseModel
    {

        public string? company_id { get; set; }
        public int? hinhthucnuoi { get; set; }
        public string? hinhthucnuoi_name { get; set; }
        public decimal? acreage_cs { get; set; }
        public decimal? acreage_nuoi { get; set; }
        public string? unit_id { get; set; }
        public string? unit_name { get; set; }
        public string? approve_note { get; set; }
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
        public string? notify_content { get; set; }
        
        public RegisterCoSoNuoi()
        {
        }
    }
}

