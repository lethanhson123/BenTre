namespace Service.Interface
{
    public interface IThanhVienPhanQuyenChucNangService : IBaseService<ThanhVienPhanQuyenChucNang>
    {
        Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByParentIDToListAsync(long parentID);
        Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucThanhVienIDToListAsync(long danhMucThanhVienID);
        Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByAgencyDepartmentIDToListAsync(long agencyDepartmentID);
        Task<List<ThanhVienPhanQuyenChucNang>> GetSQLByDanhMucChucDanhIDToListAsync(long danhMucChucDanhID);
        Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_001AndEmptyToListAsync(long DanhMucChucNangID);
        Task<List<ThanhVienPhanQuyenChucNang>> GetByDanhMucChucNangID_002AndEmptyToListAsync(long DanhMucChucNangID);
    }
}

