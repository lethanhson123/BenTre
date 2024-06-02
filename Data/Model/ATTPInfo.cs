namespace Data.Model
{
    public partial class ATTPInfo : BaseModel
    {
        public string? company_id { get; set; }
        public string? product_des { get; set; }
        public string? reason_notes { get; set; }
        public long? create_from { get; set; }
        public long? form_type_id { get; set; }
        public DateTime? send_date { get; set; }
        public long? cer_level { get; set; }
        public string? thamdinh_uid { get; set; }
        public string? cer_notes { get; set; }
        public DateTime? cer_begin_date { get; set; }
        public string? cer_code { get; set; }
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
        public long? StateAgencyID { get; set; }
        public string? StateAgencyName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }
        public long? DanhMucATTPLoaiHoSoID { get; set; }
        public string? DanhMucATTPLoaiHoSoName { get; set; }
        public long? DanhMucATTPTinhTrangID { get; set; }
        public string? DanhMucATTPTinhTrangName { get; set; }
        public long? DanhMucATTPXepLoaiID { get; set; }
        public string? DanhMucATTPXepLoaiName { get; set; }
        public string? CompanyInfoName { get; set; }
        public ATTPInfo()
        {
            Code = GlobalHelper.InitializationGUICode;
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
        }
    }
}

