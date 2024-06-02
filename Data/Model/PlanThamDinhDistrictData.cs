namespace Data.Model
{
    public partial class PlanThamDinhDistrictData : BaseModel
    {
        public long? DistrictDataID { get; set; }
        public string? DistrictDataName { get; set; }
        public DateTime? NgayGhiNhan { get; set; }

        public PlanThamDinhDistrictData()
        {
            NgayGhiNhan = GlobalHelper.InitializationDateTime;
        }
    }
}

