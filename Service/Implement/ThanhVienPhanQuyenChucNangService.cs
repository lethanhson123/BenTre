using Data.Model;
using Service.Interface;

namespace Service.Implement
{
    public class ThanhVienPhanQuyenChucNangService : BaseService<ThanhVienPhanQuyenChucNang, IThanhVienPhanQuyenChucNangRepository>
    , IThanhVienPhanQuyenChucNangService
    {
        private readonly IThanhVienPhanQuyenChucNangRepository _ThanhVienPhanQuyenChucNangRepository;

        private readonly IDanhMucChucNangService _DanhMucChucNangService;
        public ThanhVienPhanQuyenChucNangService(IThanhVienPhanQuyenChucNangRepository ThanhVienPhanQuyenChucNangRepository

            , IDanhMucChucNangService DanhMucChucNangService

            ) : base(ThanhVienPhanQuyenChucNangRepository)
        {
            _ThanhVienPhanQuyenChucNangRepository = ThanhVienPhanQuyenChucNangRepository;

            _DanhMucChucNangService = DanhMucChucNangService;
        }
        public override void Initialization(ThanhVienPhanQuyenChucNang model)
        {
            if (model.DanhMucChucNangID > 0)
            {
                model.Name = _DanhMucChucNangService.GetByID(model.DanhMucChucNangID.Value).Name;
            }
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByParentIDToListAsync(long parentID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@ParentID",parentID),
            };
            result = await GetByStoredProcedureToListAsync("sp_ThanhVienPhanQuyenChucNangSelectItemsByParentID", parameters);
            return result;
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucThanhVienIDToListAsync(long danhMucThanhVienID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@DanhMucThanhVienID",danhMucThanhVienID),
            };
            result = await GetByStoredProcedureToListAsync("sp_ThanhVienPhanQuyenChucNangSelectItemsByDanhMucThanhVienID", parameters);
            return result;
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByAgencyDepartmentIDToListAsync(long agencyDepartmentID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@AgencyDepartmentID",agencyDepartmentID),
            };
            result = await GetByStoredProcedureToListAsync("sp_ThanhVienPhanQuyenChucNangSelectItemsByAgencyDepartmentID", parameters);
            return result;
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucChucDanhIDToListAsync(long danhMucChucDanhID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            SqlParameter[] parameters =
            {
                    new SqlParameter("@DanhMucChucDanhID",danhMucChucDanhID),
            };
            result = await GetByStoredProcedureToListAsync("sp_ThanhVienPhanQuyenChucNangSelectItemsByDanhMucChucDanhID", parameters);
            return result;
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_001AndEmptyToListAsync(long DanhMucChucNangID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            if (DanhMucChucNangID > 0)
            {
                ThanhVienPhanQuyenChucNang empty = new ThanhVienPhanQuyenChucNang();
                empty.DanhMucChucNangID = DanhMucChucNangID;
                if (DanhMucChucNangID > 0)
                {
                    empty.Name = _DanhMucChucNangService.GetByID(DanhMucChucNangID).Name;
                }
                result.Add(empty);
                result.AddRange(await GetByCondition(item => item.DanhMucChucNangID == DanhMucChucNangID && item.StateAgencyID > 0).ToListAsync());
            }
            return result;
        }
        public virtual async Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_002AndEmptyToListAsync(long DanhMucChucNangID)
        {
            List<ThanhVienPhanQuyenChucNang> result = new List<ThanhVienPhanQuyenChucNang>();
            if (DanhMucChucNangID > 0)
            {
                ThanhVienPhanQuyenChucNang empty = new ThanhVienPhanQuyenChucNang();
                empty.DanhMucChucNangID = DanhMucChucNangID;
                if (DanhMucChucNangID > 0)
                {
                    empty.Name = _DanhMucChucNangService.GetByID(DanhMucChucNangID).Name;
                }
                result.Add(empty);
                result.AddRange(await GetByCondition(item => item.DanhMucChucNangID == DanhMucChucNangID && item.DanhMucThanhVienID > 0).ToListAsync());
            }
            return result;
        }
    }
}

