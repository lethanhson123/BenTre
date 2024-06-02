namespace Service.Implement
{
    public class CompanyInfoProductGroupsService : BaseService<CompanyInfoProductGroups, ICompanyInfoProductGroupsRepository>
    , ICompanyInfoProductGroupsService
    {
        private readonly ICompanyInfoProductGroupsRepository _CompanyInfoProductGroupsRepository;
        public CompanyInfoProductGroupsService(ICompanyInfoProductGroupsRepository CompanyInfoProductGroupsRepository) : base(CompanyInfoProductGroupsRepository)
        {
            _CompanyInfoProductGroupsRepository = CompanyInfoProductGroupsRepository;
        }
        public virtual async Task<CompanyInfoProductGroups> GetByParentID_ProductGroupIDAsync(long ParentID, long ProductGroupID)
        {
            CompanyInfoProductGroups result = new CompanyInfoProductGroups();
            if (ParentID > 0)
            {
                result = await GetByCondition(item => item.ParentID == ParentID && item.ProductGroupID == ProductGroupID).FirstOrDefaultAsync();
            }
            return result;
        }
    }
}

