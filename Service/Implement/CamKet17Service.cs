namespace Service.Implement
{
    public class CamKet17Service : BaseService<CamKet17, ICamKet17Repository>
    , ICamKet17Service
    {
    private readonly ICamKet17Repository _CamKet17Repository;
    public CamKet17Service(ICamKet17Repository CamKet17Repository) : base(CamKet17Repository)
    {
    _CamKet17Repository = CamKet17Repository;
    }
    }
    }

