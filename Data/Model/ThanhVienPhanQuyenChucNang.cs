namespace Data.Model
{
	public partial class ThanhVienPhanQuyenChucNang : BaseModel
	{
		public long? DanhMucChucNangID { get; set; }
		public long? DanhMucThanhVienID { get; set; }
		public long? StateAgencyID { get; set; }
		public long? AgencyDepartmentID { get; set; }
		public long? DanhMucChucDanhID { get; set; }

		public ThanhVienPhanQuyenChucNang()
		{
		}
	}
}

