namespace Data.Model
{
    public partial class CompanyInfoVungTrongToaDo : BaseModel
    {
        public decimal? KinhDo { get; set; }
        public decimal? ViDo { get; set; }
        public bool? IsTrungTam { get; set; }

        public CompanyInfoVungTrongToaDo()
        {
        }
    }
}

