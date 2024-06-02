using Service.Interface;

namespace Service.Implement
{
    public class ProductInfoService : BaseService<ProductInfo, IProductInfoRepository>
    , IProductInfoService
    {
        private readonly IProductInfoRepository _ProductInfoRepository;

        private readonly IDanhMucATTPXepLoaiService _DanhMucATTPXepLoaiService;
        private readonly ICompanyInfoService _CompanyInfoService;

        public ProductInfoService(IProductInfoRepository ProductInfoRepository

            , IDanhMucATTPXepLoaiService DanhMucATTPXepLoaiService

            , ICompanyInfoService CompanyInfoService

        ) : base(ProductInfoRepository)
        {
            _ProductInfoRepository = ProductInfoRepository;

            _DanhMucATTPXepLoaiService = DanhMucATTPXepLoaiService;

            _CompanyInfoService = CompanyInfoService;
        }
        public override void Initialization(ProductInfo model)
        {
            BaseInitialization(model);
            if (model.DanhMucATTPXepLoaiID == null)
            {
                model.DanhMucATTPXepLoaiID = GlobalHelper.DanhMucATTPXepLoaiID;
            }
            if (model.DanhMucATTPXepLoaiID > 0)
            {
                model.DanhMucATTPXepLoaiName = _DanhMucATTPXepLoaiService.GetByID(model.DanhMucATTPXepLoaiID.Value).Name;
            }
            if (model.NgayGhiNhan == null)
            {
                model.NgayGhiNhan = GlobalHelper.InitializationDateTime;
            }
            if (model.Active == null)
            {
                model.Active = true;
            }
            if (model.CompanyInfoID == null)
            {
                model.CompanyInfoID = model.ParentID;
            }
            if (model.CompanyInfoID > 0)
            {
                CompanyInfo companyInfo = _CompanyInfoService.GetByID(model.CompanyInfoID.Value);
                companyInfo.address = companyInfo.address + ", " + companyInfo.hamlet + ", " + companyInfo.WardDataName + ", " + companyInfo.DistrictDataName + ", " + companyInfo.ProvinceDataName;
                model.CompanyInfoName = companyInfo.Name;
                model.HTMLContent = companyInfo.address;
                model.Description = companyInfo.phone;
            }
        }
        public override async Task<ProductInfo> SaveAsync(ProductInfo model)
        {
            int result = GlobalHelper.InitializationNumber;
            if (model.ID > 0)
            {
                result = await UpdateAsync(model);
            }
            else
            {
                result = await AddAsync(model);
            }

            if (result > 0)
            {
                //await Sync(model);
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public virtual async Task<List<ProductInfo>> GetByBatDau_KetThucToListAsync(DateTime BatDau, DateTime KetThuc)
        {
            List<ProductInfo> result = new List<ProductInfo>();
            BatDau = new DateTime(BatDau.Year, BatDau.Month, BatDau.Day, 0, 0, 0);
            KetThuc = new DateTime(KetThuc.Year, KetThuc.Month, KetThuc.Day, 23, 59, 59);
            result = await GetByCondition(item => item.NgayGhiNhan >= BatDau && item.NgayGhiNhan <= KetThuc).ToListAsync();

            return result;
        }
    }
}

