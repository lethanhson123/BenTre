namespace Service.Implement
{
	public class DanhMucUngDungService : BaseService<DanhMucUngDung, IDanhMucUngDungRepository>
	, IDanhMucUngDungService
	{
		private readonly IDanhMucUngDungRepository _DanhMucUngDungRepository;
		public DanhMucUngDungService(IDanhMucUngDungRepository DanhMucUngDungRepository) : base(DanhMucUngDungRepository)
		{
			_DanhMucUngDungRepository = DanhMucUngDungRepository;
		}		
	}
}

