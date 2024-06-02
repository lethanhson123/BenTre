namespace Service.Implement
{
    public class StateAgencyService : BaseService<StateAgency, IStateAgencyRepository>
    , IStateAgencyService
    {
        private readonly IStateAgencyRepository _StateAgencyRepository;
        public StateAgencyService(IStateAgencyRepository StateAgencyRepository) : base(StateAgencyRepository)
        {
            _StateAgencyRepository = StateAgencyRepository;
        }
    }
}

