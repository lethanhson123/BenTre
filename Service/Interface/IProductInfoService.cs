namespace Service.Interface
{
    public interface IProductInfoService : IBaseService<ProductInfo>
    {
        Task<List<ProductInfo>> GetByBatDau_KetThucToListAsync(DateTime NgayBatDau, DateTime NgayKetThuc);
    }
}

