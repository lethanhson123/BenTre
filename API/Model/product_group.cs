namespace API.Model
{
	public class product_group
    {
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? name { get; set; }
        public long? type_id { get; set; }

    }
}
