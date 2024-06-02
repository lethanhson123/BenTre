namespace Data.Model
{
    public partial class CompanyInfoProductGroups : BaseModel
    {
        public long? ProductGroupID { get; set; }
        public string? ProductGroupName { get; set; }
        public CompanyInfoProductGroups()
        {
        }
    }
}

