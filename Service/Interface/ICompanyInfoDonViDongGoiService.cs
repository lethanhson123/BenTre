namespace Service.Interface
{
    public interface ICompanyInfoDonViDongGoiService : IBaseService<CompanyInfoDonViDongGoi>
    {
        Task<List<CompanyInfoDonViDongGoi>> GetBySearchString_DanhMucATTPTinhTrangIDToListAsync(string searchString, long danhMucATTPTinhTrangID);
        Task<List<CompanyInfoDonViDongGoi>> GetByDanhMucATTPTinhTrangID_ActiveToListAsync(long danhMucATTPTinhTrangID, bool active);
    }
}

