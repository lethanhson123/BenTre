

namespace Service.Implement
{
    public class ThanhVienService : BaseService<ThanhVien, IThanhVienRepository>
    , IThanhVienService
    {
        private readonly IThanhVienRepository _ThanhVienRepository;

        private readonly IThanhVienTokenService _ThanhVienTokenService;

        private readonly IThanhVienThietBiService _ThanhVienThietBiService;

        private readonly IDanhMucChucDanhService _DanhMucChucDanhService;
        private readonly IAgencyDepartmentService _AgencyDepartmentService;
        private readonly IStateAgencyService _StateAgencyService;


        private readonly ICompanyInfoRepository _CompanyInfoRepository;

        private readonly IThanhVienThongBaoService _ThanhVienThongBaoService;

        private readonly IThanhVienPhanQuyenChucNangService _ThanhVienPhanQuyenChucNangService;

        public ThanhVienService(IThanhVienRepository ThanhVienRepository

            , IThanhVienTokenService ThanhVienTokenService

            , IThanhVienThietBiService ThanhVienThietBiService

            , IDanhMucChucDanhService DanhMucChucDanhService
            , IAgencyDepartmentService AgencyDepartmentService
            , IStateAgencyService StateAgencyService


            , ICompanyInfoRepository CompanyInfoRepository

            , IThanhVienThongBaoService ThanhVienThongBaoService

            , IThanhVienPhanQuyenChucNangService ThanhVienPhanQuyenChucNangService

            ) : base(ThanhVienRepository)
        {
            _ThanhVienRepository = ThanhVienRepository;

            _ThanhVienTokenService = ThanhVienTokenService;

            _ThanhVienThietBiService = ThanhVienThietBiService;

            _DanhMucChucDanhService = DanhMucChucDanhService;
            _AgencyDepartmentService = AgencyDepartmentService;
            _StateAgencyService = StateAgencyService;


            _CompanyInfoRepository = CompanyInfoRepository;

            _ThanhVienThongBaoService = ThanhVienThongBaoService;

            _ThanhVienPhanQuyenChucNangService = ThanhVienPhanQuyenChucNangService;

        }
        public override void Initialization(ThanhVien model)
        {
            if (string.IsNullOrEmpty(model.Code))
            {
                model.Code = model.TaiKhoan;
            }
            if (string.IsNullOrEmpty(model.DienThoai))
            {
                model.DienThoai = model.TaiKhoan;
            }
            if (string.IsNullOrEmpty(model.Email))
            {
                model.Email = model.TaiKhoan;
            }
            if (string.IsNullOrEmpty(model.GUIDCode))
            {
                model.GUIDCode = GlobalHelper.InitializationGUICode;
            }
            if (string.IsNullOrEmpty(model.MatKhau))
            {
                model.MatKhau = GlobalHelper.MatKhauMacDinh;
            }
            if (string.IsNullOrEmpty(model.TaiKhoan))
            {
                model.TaiKhoan = model.Email;
            }
            if (string.IsNullOrEmpty(model.TaiKhoan))
            {
                model.TaiKhoan = model.DienThoai;
            }
            if (string.IsNullOrEmpty(model.TypeName))
            {
                model.TypeName = GlobalHelper.CMSSite;
            }
            if (model.ParentID == null)
            {
                model.ParentID = GlobalHelper.DanhMucThanhVienIDNhanVien;
            }
            if (model.CompanyInfoID > 0)
            {
                model.CompanyInfoName = _CompanyInfoRepository.GetByID(model.CompanyInfoID.Value).Name;
            }
            if (model.DanhMucChucDanhID > 0)
            {
                model.DanhMucChucDanhName = _DanhMucChucDanhService.GetByID(model.DanhMucChucDanhID.Value).Name;
            }
            if (model.AgencyDepartmentID > 0)
            {
                model.AgencyDepartmentName = _AgencyDepartmentService.GetByID(model.AgencyDepartmentID.Value).Name;
            }           
            if (model.StateAgencyID > 0)
            {
                model.StateAgencyName = _StateAgencyService.GetByID(model.StateAgencyID.Value).Name;
            }
        }
        public override async Task<ThanhVien> SaveAsync(ThanhVien model)
        {
            bool isSave = true;
            Initialization(model);
            if (string.IsNullOrEmpty(model.TaiKhoan))
            {
                isSave = false;
            }
            ThanhVien modelExist = await GetByCondition(item => item.TaiKhoan == model.TaiKhoan).FirstOrDefaultAsync();
            if (modelExist != null)
            {
                if (modelExist.ID != model.ID)
                {
                    isSave = false;
                }
            }
            if (isSave == true)
            {
                if (model.ID > 0)
                {
                    if (model.MatKhau != modelExist.MatKhau)
                    {
                        model.MatKhau = SecurityHelper.Encrypt(model.GUIDCode, model.MatKhau);
                    }
                    if (model.Active == null)
                    {
                        model.Active = modelExist.Active;
                    }
                    await UpdateAsync(model);
                }
                else
                {
                    model.MatKhau = SecurityHelper.Encrypt(model.GUIDCode, model.MatKhau);
                    await AddAsync(model);
                }
            }
            if (model.ID > 0)
            {
                await _ThanhVienPhanQuyenChucNangService.GetSQLByParentIDToListAsync(model.ID);
                if (model.Active == true)
                {
                    ThanhVienThongBao ThanhVienThongBao = new ThanhVienThongBao();
                    ThanhVienThongBao.ParentID = model.ID;
                    _ThanhVienThongBaoService.Save(ThanhVienThongBao);
                }
                else
                {
                    List<ThanhVienThongBao> listThanhVienThongBao = _ThanhVienThongBaoService.GetByParentIDToList(model.ID);
                    _ThanhVienThongBaoService.RemoveRange(listThanhVienThongBao);
                }
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public virtual async Task<ThanhVien> ChangePasswordAsync(ThanhVien model, string password01, string password02, string password03)
        {
            bool isSave = true;
            ThanhVien modelExist = await GetByCondition(item => item.TaiKhoan == model.TaiKhoan).FirstOrDefaultAsync();
            if (modelExist != null)
            {
                if (modelExist.ID != model.ID)
                {
                    isSave = false;
                }
            }
            if (isSave == true)
            {
                if (model.ID > 0)
                {
                    string passwordEncrypt = SecurityHelper.Encrypt(modelExist.GUIDCode, password01);
                    if (passwordEncrypt == modelExist.MatKhau)
                    {
                        if (password02 == password03)
                        {
                            modelExist.MatKhau = SecurityHelper.Encrypt(modelExist.GUIDCode, password02);
                            await UpdateAsync(modelExist);
                        }
                    }
                }
            }
            return model;
        }
        public virtual async Task<ThanhVien> AuthenticationAsync(ThanhVien model)
        {
            ThanhVien result = new ThanhVien();
            if (string.IsNullOrEmpty(model.TypeName))
            {
                model.TypeName = GlobalHelper.CMSSite;
            }
            try
            {
                if (!string.IsNullOrEmpty(model.TaiKhoan) && !string.IsNullOrEmpty(model.MatKhau))
                {
                    result = await GetByCondition(item => item.Active == true && item.TaiKhoan == model.TaiKhoan).FirstOrDefaultAsync();
                    bool check = false;
                    if (result != null)
                    {
                        string passwordDecrypt = SecurityHelper.Decrypt(result.GUIDCode, result.MatKhau);
                        if (passwordDecrypt.Equals(model.MatKhau))
                        {
                            check = true;
                        }
                    }
                    if (check == true)
                    {
                        var claims = new[] {
                            new Claim(JwtRegisteredClaimNames.Sub, GlobalHelper.Subject),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                            new Claim("UserId", result.ID.ToString()),
                            new Claim("DisplayName", result.Name),
                            new Claim("UserName", result.TaiKhoan),
                            new Claim("Email", result.Email)
                        };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(GlobalHelper.Key));
                        var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(
                            GlobalHelper.Issuer,
                            GlobalHelper.Audience,
                            claims,
                            expires: DateTime.UtcNow.AddDays(GlobalHelper.TokenThoiGianHieuLuc),
                            signingCredentials: signIn
                        );

                        ThanhVienToken thanhVienToken = new ThanhVienToken();
                        thanhVienToken.Note = model.Note;
                        thanhVienToken.ParentID = result.ID;
                        thanhVienToken.Token = new JwtSecurityTokenHandler().WriteToken(token);
                        thanhVienToken.NgayBatDau = GlobalHelper.InitializationDateTime;
                        thanhVienToken.NgayKetThuc = thanhVienToken.NgayBatDau.Value.AddDays(GlobalHelper.TokenThoiGianHieuLuc);
                        thanhVienToken.Active = true;
                        await _ThanhVienTokenService.SaveAsync(thanhVienToken);
                        if (thanhVienToken.ID > 0)
                        {
                            result.Note = result.TypeName + "Homepage?" + GlobalHelper.AuthenticationToken + "=" + thanhVienToken.Token;
                            result.HTMLContent = thanhVienToken.Token;
                        }
                        if (model.uid != null)
                        {
                            ThanhVienThietBi thanhVienThietBi = new ThanhVienThietBi();
                            thanhVienThietBi.ParentID = result.ID;
                            thanhVienThietBi.TokenNotification = model.uid;
                            await _ThanhVienThietBiService.SaveAsync(thanhVienThietBi);

                            /*
							 ThanhVienThietBi thanhVienThietBiExist = new ThanhVienThietBi();
                            thanhVienThietBiExist = await _ThanhVienThietBiService.GetByCondition(item => item.ParentID == result.ID || item.TokenNotification == model.uid).FirstOrDefaultAsync();

							if (thanhVienThietBiExist == null)
							{
								thanhVienThietBiExist = new ThanhVienThietBi();
								thanhVienThietBiExist.ID = 0;
                            }
                            if (thanhVienThietBiExist.ParentID ==null)
                            {
                                thanhVienThietBiExist.ParentID = result.ID;
                            }
                            thanhVienThietBiExist.TokenNotification = model.uid;
                            await _ThanhVienThietBiService.SaveAsync(thanhVienThietBiExist);
							 */
                        }
                    }
                    else
                    {
                        result = new ThanhVien();
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        public virtual async Task<string> AuthenticationToStringAsync(ThanhVien model)
        {
            string resultString = GlobalHelper.InitializationString;
            ThanhVien result = new ThanhVien();
            try
            {
                if (!string.IsNullOrEmpty(model.TaiKhoan) && !string.IsNullOrEmpty(model.MatKhau))
                {
                    result = await GetByCondition(item => item.Active == true && item.TaiKhoan == model.TaiKhoan).FirstOrDefaultAsync();
                    bool check = false;
                    if (result != null)
                    {
                        string passwordDecrypt = SecurityHelper.Decrypt(result.GUIDCode, result.MatKhau);
                        if (passwordDecrypt.Equals(model.MatKhau))
                        {
                            check = true;
                        }
                    }
                    if (check == true)
                    {
                        ThanhVienToken thanhVienToken = new ThanhVienToken();
                        thanhVienToken.Note = model.Note;
                        thanhVienToken.ParentID = result.ID;
                        thanhVienToken.Token = GlobalHelper.InitializationGUICode;
                        thanhVienToken.NgayBatDau = GlobalHelper.InitializationDateTime;
                        thanhVienToken.NgayKetThuc = thanhVienToken.NgayBatDau.Value.AddDays(GlobalHelper.TokenThoiGianHieuLuc);
                        thanhVienToken.Active = true;
                        await _ThanhVienTokenService.SaveAsync(thanhVienToken);
                        if (thanhVienToken.ID > 0)
                        {
                            resultString = thanhVienToken.Token;
                        }
                    }
                    else
                    {
                        result = new ThanhVien();
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return resultString;
        }
        public virtual async Task<ThanhVien> AuthenticationFastAsync(ThanhVien model)
        {
            ThanhVien result = new ThanhVien();
            try
            {
                if (!string.IsNullOrEmpty(model.TaiKhoan))
                {
                    result = await GetByCondition(item => item.Active == true && item.TaiKhoan == model.TaiKhoan).FirstOrDefaultAsync();
                    bool check = true;
                    if (check == true)
                    {
                        ThanhVienToken thanhVienToken = new ThanhVienToken();
                        thanhVienToken.Note = model.Note;
                        thanhVienToken.ParentID = result.ID;
                        thanhVienToken.Token = GlobalHelper.InitializationGUICode;
                        thanhVienToken.NgayBatDau = GlobalHelper.InitializationDateTime;
                        thanhVienToken.NgayKetThuc = thanhVienToken.NgayBatDau.Value.AddDays(GlobalHelper.TokenThoiGianHieuLuc);
                        thanhVienToken.Active = true;
                        await _ThanhVienTokenService.SaveAsync(thanhVienToken);
                        if (thanhVienToken.ID > 0)
                        {
                            result.Note = thanhVienToken.Token;
                        }
                    }
                    else
                    {
                        result = new ThanhVien();
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        public virtual async Task<ThanhVien> GetByTaiKhoanAsync(string taiKhoan)
        {
            ThanhVien result = new ThanhVien();
            if (!string.IsNullOrEmpty(taiKhoan))
            {
                result = await GetByCondition(item => item.TaiKhoan == taiKhoan).FirstOrDefaultAsync();
                if (result == null)
                {
                    result = new ThanhVien();
                }
            }
            return result;
        }
        public override async Task<List<ThanhVien>> GetBySearchStringToListAsync(string searchString)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetByCondition(item => item.ID.ToString().Contains(searchString) || item.Name.Contains(searchString) || item.Code.Contains(searchString) || item.TaiKhoan.Contains(searchString) || item.Email.Contains(searchString)).ToListAsync();
            }
            return result;
        }

        public virtual async Task<List<ThanhVien>> GetByParentID_SearchStringToListAsync(long parentID, string searchString)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetByCondition(item => item.ParentID == parentID && (item.ID.ToString().Contains(searchString) || item.Name.Contains(searchString) || item.Code.Contains(searchString) || item.TaiKhoan.Contains(searchString) || item.Email.Contains(searchString))).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByParentIDOrSearchStringToListAsync(long parentID, string searchString)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                result = await GetByParentIDToListAsync(parentID);
            }
            return result;
        }
        public override async Task<List<ThanhVien>> GetByParentIDToListAsync(long parentID)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (parentID == 0)
            {
                result = await GetAllToListAsync();
            }
            else
            {
                result = await _ThanhVienRepository.GetByParentIDToListAsync(parentID);
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByCompanyInfoIDToListAsync(long companyInfoID)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (companyInfoID > 0)
            {
                result = await GetByCondition(item => item.CompanyInfoID == companyInfoID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByCompanyInfoIDAndEmptyToListAsync(long companyInfoID)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            ThanhVien empty = new ThanhVien();
            result.Add(empty);
            if (companyInfoID > 0)
            {
                result.AddRange(await GetByCondition(item => item.CompanyInfoID == companyInfoID).ToListAsync());
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByStateAgencyIDToListAsync(long stateAgencyID)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (stateAgencyID > 0)
            {
                result = await GetByCondition(item => item.StateAgencyID == stateAgencyID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByStateAgencyID_SearchStringToListAsync(long stateAgencyID, string searchString)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (!string.IsNullOrEmpty(searchString))
            {
                result = await GetBySearchStringToListAsync(searchString);
            }
            else
            {
                result = await GetByStateAgencyIDToListAsync(stateAgencyID);
            }

            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByStateAgencyID_ActiveToListAsync(long stateAgencyID, bool active)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            result.AddRange(await GetByCondition(item => item.ParentID == 6 && item.Active == active).ToListAsync());
            if (stateAgencyID > 0)
            {
                result.AddRange(await GetByCondition(item => item.StateAgencyID == stateAgencyID && item.Active == active).ToListAsync());
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByAgencyDepartmentIDToListAsync(long agencyDepartmentID)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (agencyDepartmentID > 0)
            {
                result = await GetByCondition(item => item.AgencyDepartmentID == agencyDepartmentID).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByAgencyDepartmentID_ActiveToListAsync(long agencyDepartmentID, bool active)
        {
            List<ThanhVien> result = new List<ThanhVien>();
            if (agencyDepartmentID > 0)
            {
                result = await GetByCondition(item => item.AgencyDepartmentID == agencyDepartmentID && item.Active == active).ToListAsync();
            }
            return result;
        }
        public virtual async Task<List<ThanhVien>> GetByListParentID_ActiveToListAsync()
        {
            List<ThanhVien> result = new List<ThanhVien>();
            List<long> listParentID = new List<long>();
            listParentID.Add(2);
            listParentID.Add(3);
            result = await GetByCondition(item => listParentID.Contains(item.ParentID.Value) && item.Active == true).ToListAsync();

            return result;
        }
    }
}

