namespace Service.Implement
{
	public class CompanyUserService : BaseService<CompanyUser, ICompanyUserRepository>
	, ICompanyUserService
	{
		private readonly ICompanyUserRepository _CompanyUserRepository;

		private readonly IThanhVienService _ThanhVienService;
		public CompanyUserService(ICompanyUserRepository CompanyUserRepository

			, IThanhVienService thanhVienService
			
			) : base(CompanyUserRepository)
		{
			_CompanyUserRepository = CompanyUserRepository;

			_ThanhVienService = thanhVienService;
		}
		public override async Task<CompanyUser> SaveAsync(CompanyUser model)
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
				ThanhVien thanhVien = new ThanhVien();

				thanhVien.Name = model.fullname;
				thanhVien.Email = model.email;
				thanhVien.DienThoai = model.phone;
				thanhVien.Active = model.Active;

				await _ThanhVienService.SaveAsync(thanhVien);

                CreateNotificationWithThanhVienThongBao(model);
            }
			return model;
		}
	}
}

