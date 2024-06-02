namespace Service.Interface
{
    public interface IThanhVienLichSuThongBaoService : IBaseService<ThanhVienLichSuThongBao>
    {
        Task<List<ThanhVienLichSuThongBao>> GetByFileNameToListAsync(string typeName);
    }
}

