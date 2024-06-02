namespace Service.Interface
{
    public interface IPlanThamDinhCompanyProductGroupService : IBaseService<PlanThamDinhCompanyProductGroup>
    {
        Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDToListAsync(long planThamDinhID);
        Task<List<PlanThamDinhCompanyProductGroup>> GetByPlanThamDinhIDAndEmptyToListAsync(long planThamDinhID);
    }
}

