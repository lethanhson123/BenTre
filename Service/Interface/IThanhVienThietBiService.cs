namespace Service.Interface
{
    public interface IThanhVienThietBiService : IBaseService<ThanhVienThietBi>
    {
        Task<int> PushNotification(ThanhVienThietBi model);
    }
}

