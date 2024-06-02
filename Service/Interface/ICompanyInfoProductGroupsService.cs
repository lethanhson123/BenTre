namespace Service.Interface
{
    public interface ICompanyInfoProductGroupsService : IBaseService<CompanyInfoProductGroups>
    {
        Task<CompanyInfoProductGroups> GetByParentID_ProductGroupIDAsync(long ParentID, long ProductGroupID);
    }
}

