namespace API.Model
{
	public class chuoicungung_plan_detail
	{
		public ObjectId _id { get; set; }
		public string? uid { get; set; }
		public string? plan_id { get; set; }
		public string? company_id { get; set; }		
		public long? status_id { get; set; }
		public mau[]? maus { get; set; }
		
	}
}
