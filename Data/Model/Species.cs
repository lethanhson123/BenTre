namespace Data.Model
{
    public partial class Species : BaseModel
    {

        public long? group_id { get; set; }
        public string? family { get; set; }
        public string? scientific_name { get; set; }

        public Species()
        {
        }
    }
}

