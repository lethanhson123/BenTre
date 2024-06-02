namespace Service.Interface
{
    public interface ICompanyInfoVungTrongService : IBaseService<CompanyInfoVungTrong>
    {
        Task<List<CompanyInfoVungTrong>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID);
        Task<List<CompanyInfoVungTrong>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active);
    }
}

