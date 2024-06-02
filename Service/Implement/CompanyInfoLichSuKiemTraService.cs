using Service.Interface;

namespace Service.Implement
{
	public class CompanyInfoLichSuKiemTraService : BaseService<CompanyInfoLichSuKiemTra, ICompanyInfoLichSuKiemTraRepository>
	, ICompanyInfoLichSuKiemTraService
	{
		private readonly ICompanyInfoLichSuKiemTraRepository _CompanyInfoLichSuKiemTraRepository;
		public CompanyInfoLichSuKiemTraService(ICompanyInfoLichSuKiemTraRepository CompanyInfoLichSuKiemTraRepository) : base(CompanyInfoLichSuKiemTraRepository)
		{
			_CompanyInfoLichSuKiemTraRepository = CompanyInfoLichSuKiemTraRepository;
		}
		public override void Initialization(CompanyInfoLichSuKiemTra model)
		{
            BaseInitialization(model);
            if (string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Code;
			}
			try
			{
				model.NgayGhiNhan = new DateTime(model.Nam.Value, model.Thang.Value, model.Ngay.Value);
			}
			catch (Exception ex)
			{
				string message = ex.Message;
			}
		}
		public async Task<CompanyInfoLichSuKiemTra> GetByParentID_Nam_Thang_NgayAsync(long parentID, int nam, int thang, int ngay)
		{
			CompanyInfoLichSuKiemTra result = new CompanyInfoLichSuKiemTra();
			if (parentID > 0)
			{
				result = await GetByCondition(item => item.ParentID == parentID && item.Nam == nam && item.Thang == thang && item.Ngay == ngay).FirstOrDefaultAsync();
				if (result == null)
				{
					result = new CompanyInfoLichSuKiemTra();
				}
			}
			return result;
		}
		public async Task<List<CompanyInfoLichSuKiemTra>> GetByParentID_NamToListAsync(long parentID, int nam)
		{
			List<CompanyInfoLichSuKiemTra> result = new List<CompanyInfoLichSuKiemTra>();
			if (parentID > 0)
			{
				if (nam>0)
				{
					result = await GetByCondition(item => item.ParentID == parentID && item.Nam == nam).ToListAsync();
				}
				else
				{
					result = await GetByCondition(item => item.ParentID == parentID).ToListAsync();
				}
			}
			return result;
		}
	}
}

