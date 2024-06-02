namespace Data.Model
{
    public partial class RegisterHarvest : BaseModel
    {

        public DateTime? from_date { get; set; }
        public DateTime? to_date { get; set; }
        public string? species_id { get; set; }
        public string? species_name { get; set; }
        public string? company_id { get; set; }
        public int? count_kiemsoat { get; set; }
        public DateTime? NgayBatDau { get; set; }
        public DateTime? NgayKetThuc { get; set; }
        public long? StateAgencyID { get; set; }
        public string? StateAgencyName { get; set; }
        public long? CompanyInfoID { get; set; }
        public string? CompanyInfoName { get; set; }
        public long? SpeciesID { get; set; }
        public string? SpeciesName { get; set; }
        public long? DanhMucLayMauID { get; set; }
        public string? DanhMucLayMauName { get; set; }
        public long? PlanTypeID { get; set; }
        public string? PlanTypeName { get; set; }

        public RegisterHarvest()
        {
            Code = GlobalHelper.InitializationGUICode;
            NgayBatDau = GlobalHelper.InitializationDateTime;
            NgayKetThuc = GlobalHelper.InitializationDateTime;
        }
    }
}

