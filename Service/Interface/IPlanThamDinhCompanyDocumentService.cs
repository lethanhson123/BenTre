namespace Service.Interface
{
    public interface IPlanThamDinhCompanyDocumentService : IBaseService<PlanThamDinhCompanyDocument>
    {
        Task<PlanThamDinhCompanyDocument> GetByParentID_DocumentTemplateIDAsync(long parentID, long documentTemplateID);
        Task<PlanThamDinhCompanyDocument> GetByParentID_ThanhVienID_DocumentTemplateIDAsync(long parentID, long thanhVienID, long documentTemplateID);
        Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDToListAsync(long planThamDinhID);
        Task<List<PlanThamDinhCompanyDocument>> GetByPlanThamDinhIDAndEmptyToListAsync(long planThamDinhID);
        Task<PlanThamDinhCompanyDocument> GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync(long parentID, long planTypeID, long danhMucProductGroupID);

        Task<PlanThamDinhCompanyDocument> GetByPlanThamDinhID_DocumentTemplateIDAsync(long planThamDinhID, long documentTemplateID);
        Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDToListAsync(long RegisterHarvestID);
        Task<List<PlanThamDinhCompanyDocument>> GetByRegisterHarvestIDAndEmptyToListAsync(long RegisterHarvestID);
        Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestID_DocumentTemplateIDAsync(long RegisterHarvestID, long documentTemplateID);
        Task<PlanThamDinhCompanyDocument> GetByRegisterHarvestItemsID_DocumentTemplateIDAsync(long RegisterHarvestItemsID, long documentTemplateID);
        Task<PlanThamDinhCompanyDocument> GetByPlanTypeID_DocumentTemplateIDAsync(long PlanTypeID, long documentTemplateID);
    }
}

