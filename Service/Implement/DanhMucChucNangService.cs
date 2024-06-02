using Service.Interface;
using System.Collections.Generic;

namespace Service.Implement
{
	public class DanhMucChucNangService : BaseService<DanhMucChucNang, IDanhMucChucNangRepository>
	, IDanhMucChucNangService
	{
		private readonly IDanhMucChucNangRepository _DanhMucChucNangRepository;
		public DanhMucChucNangService(IDanhMucChucNangRepository DanhMucChucNangRepository) : base(DanhMucChucNangRepository)
		{
			_DanhMucChucNangRepository = DanhMucChucNangRepository;
		}
        public override void Initialization(DanhMucChucNang model)
        {
            BaseInitialization(model);
            if (string.IsNullOrEmpty(model.Code))
            {
				model.Code = "#";
            }            
        }
        public virtual async Task<List<DanhMucChucNang>> GetSQLByThanhVienIDToListAsync(long thanhVienID)
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			SqlParameter[] parameters =
			{
					new SqlParameter("@ThanhVienID",thanhVienID),
			};
			result = await GetByStoredProcedureToListAsync("sp_DanhMucChucNangSelectItemsByThanhVienID", parameters);
			return result;
		}
		public virtual async Task<List<DanhMucChucNang>> GetSQLByThanhVienID_ActiveToListAsync(long thanhVienID, bool active)
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			SqlParameter[] parameters =
			{
					new SqlParameter("@ThanhVienID",thanhVienID),
					new SqlParameter("@Active",active),
			};
			result = await GetByStoredProcedureToListAsync("sp_DanhMucChucNangSelectItemsByThanhVienID_Active", parameters);
			return result;
		}
		public virtual async Task<List<DanhMucChucNang>> GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync(long thanhVienID, bool active, long danhMucUngDungID)
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			SqlParameter[] parameters =
			{
					new SqlParameter("@ThanhVienID",thanhVienID),
					new SqlParameter("@Active",active),
					new SqlParameter("@DanhMucUngDungID",danhMucUngDungID),
			};
			result = await GetByStoredProcedureToListAsync("sp_DanhMucChucNangSelectItemsByThanhVienID_Active_DanhMucUngDungID", parameters);
			return result;
		}
		public virtual async Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDToListAsync(long danhMucUngDungID)
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			if (danhMucUngDungID > 0)
			{
				result = await GetByCondition(item => item.DanhMucUngDungID == danhMucUngDungID).ToListAsync();
			}
			return result;
		}
		public virtual async Task<List<DanhMucChucNang>> GetByDanhMucUngDungIDAndEmptyToListAsync(long danhMucUngDungID)
		{
			List<DanhMucChucNang> result = new List<DanhMucChucNang>();
			DanhMucChucNang empty = new DanhMucChucNang();
			result.Add(empty);
			if (danhMucUngDungID > 0)
			{
				result.AddRange(await GetByCondition(item => item.DanhMucUngDungID == danhMucUngDungID).ToListAsync());
			}
			return result;
		}
       
    }
}

