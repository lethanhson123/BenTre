namespace Service.Interface
{
    public interface INguonVonService : IBaseService<NguonVon>
    {
        Task<List<NguonVon>> GetByNam_ActiveToListAsync(int nam, bool active);
    }
}

