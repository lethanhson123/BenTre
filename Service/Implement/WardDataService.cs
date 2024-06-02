namespace Service.Implement
{
    public class WardDataService : BaseService<WardData, IWardDataRepository>
    , IWardDataService
    {
        private readonly IWardDataRepository _WardDataRepository;
        public WardDataService(IWardDataRepository WardDataRepository) : base(WardDataRepository)
        {
            _WardDataRepository = WardDataRepository;
        }
    }
}

