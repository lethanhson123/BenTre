using Data.Model;
using Repository.Implement;
using Repository.Interface;
using Service.Implement;
using Service.Interface;

namespace Service
{
    public static class ConfigureService
    {
        public static IServiceCollection AddJWT(this IServiceCollection services)
        {         

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidAudience = GlobalHelper.Audience,
                    ValidIssuer = GlobalHelper.Issuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(GlobalHelper.Key))
                };
            });
            return services;
        }
        public static IServiceCollection AddContext(this IServiceCollection services)
        {
            services.AddDbContext<Context>(opts =>
            {
            });
            return services;
        }
        public static IServiceCollection AddService(this IServiceCollection services)
        {

            services.AddTransient<IAgencyDepartmentMenusService, AgencyDepartmentMenusService>();
            services.AddTransient<IAgencyDepartmentService, AgencyDepartmentService>();
            services.AddTransient<IAgencyMenuService, AgencyMenuService>();
            services.AddTransient<IAgencyUserService, AgencyUserService>();
            services.AddTransient<IBienBanATTPService, BienBanATTPService>();

            

            services.AddTransient<IATTPInfoDocumentsService, ATTPInfoDocumentsService>();
            services.AddTransient<IATTPInfoProductBadsService, ATTPInfoProductBadsService>();
            services.AddTransient<IATTPInfoProductGoodsService, ATTPInfoProductGoodsService>();
            services.AddTransient<IATTPInfoProductGroupsService, ATTPInfoProductGroupsService>();
            services.AddTransient<IATTPInfoService, ATTPInfoService>();
            services.AddTransient<IATTPInfoTimelinesService, ATTPInfoTimelinesService>();
            services.AddTransient<IATTPInfoDocumentsService, ATTPInfoDocumentsService>();
            services.AddTransient<IATTPInfoProductBadsService, ATTPInfoProductBadsService>();
            services.AddTransient<IATTPInfoProductGoodsService, ATTPInfoProductGoodsService>();
            services.AddTransient<IATTPInfoProductGroupsService, ATTPInfoProductGroupsService>();
            services.AddTransient<IATTPInfoService, ATTPInfoService>();
            services.AddTransient<IATTPInfoTimelinesService, ATTPInfoTimelinesService>();

            services.AddTransient<IATTPTiepNhanDocumentsService, ATTPTiepNhanDocumentsService>();
            services.AddTransient<IATTPTiepNhanProductGroupsService, ATTPTiepNhanProductGroupsService>();
            services.AddTransient<IATTPTiepNhanService, ATTPTiepNhanService>();

            services.AddTransient<ICamKet17Service, CamKet17Service>();

            services.AddTransient<ICauHoiATTPQuestionsService, CauHoiATTPQuestionsService>();
            services.AddTransient<ICauHoiATTPService, CauHoiATTPService>();
            services.AddTransient<ICauHoiNhomService, CauHoiNhomService>();

          
            services.AddTransient<ICompanyExaminationQuestionsService, CompanyExaminationQuestionsService>();
            services.AddTransient<ICompanyExaminationService, CompanyExaminationService>();

            services.AddTransient<ICompanyFieldsService, CompanyFieldsService>();

            services.AddTransient<ICompanyGroupService, CompanyGroupService>();

            services.AddTransient<ICompanyInfoFieldsService, CompanyInfoFieldsService>();
            services.AddTransient<ICompanyInfoGroupsService, CompanyInfoGroupsService>();
            services.AddTransient<ICompanyInfoProductsService, CompanyInfoProductsService>();
            services.AddTransient<ICompanyInfoService, CompanyInfoService>();
            services.AddTransient<ICompanyInfoProductGroupsService, CompanyInfoProductGroupsService>();
            services.AddTransient<ICompanyInfoSpeciesService, CompanyInfoSpeciesService>();
            services.AddTransient<ICompanyInfoLichSuKiemTraService, CompanyInfoLichSuKiemTraService>();
            services.AddTransient<ICompanyInfoStateAgencyService, CompanyInfoStateAgencyService>();

            services.AddTransient<ICompanyInfoDonViDongGoiService, CompanyInfoDonViDongGoiService>();
            services.AddTransient<ICompanyInfoDonViDongGoiNongHoService, CompanyInfoDonViDongGoiNongHoService>();
            services.AddTransient<ICompanyInfoDonViDongGoiSanPhamService, CompanyInfoDonViDongGoiSanPhamService>();
            services.AddTransient<ICompanyInfoDonViDongGoiThiTruongService, CompanyInfoDonViDongGoiThiTruongService>();
            services.AddTransient<ICompanyInfoDonViDongGoiDocumentsService, CompanyInfoDonViDongGoiDocumentsService>();

            services.AddTransient<ICompanyInfoVungTrongService, CompanyInfoVungTrongService>();
            services.AddTransient<ICompanyInfoVungTrongDocumentsService, CompanyInfoVungTrongDocumentsService>();
            services.AddTransient<ICompanyInfoVungTrongNongHoService, CompanyInfoVungTrongNongHoService>();
            services.AddTransient<ICompanyInfoVungTrongToaDoService, CompanyInfoVungTrongToaDoService>();


            services.AddTransient<ICompanyLakeService, CompanyLakeService>();
            services.AddTransient<ICompanyScopeService, CompanyScopeService>();

            services.AddTransient<ICompanyStaffExamAnswersService, CompanyStaffExamAnswersService>();
            services.AddTransient<ICompanyStaffExamService, CompanyStaffExamService>();

            services.AddTransient<ICompanyUserService, CompanyUserService>();

            services.AddTransient<ICoSoNuoiDocumentService, CoSoNuoiDocumentService>();

            

            services.AddTransient<IDistrictDataService, DistrictDataService>();

            services.AddTransient<IDocumentTemplateService, DocumentTemplateService>();
            services.AddTransient<IDocumentTemplateService, DocumentTemplateService>();

            
            services.AddTransient<IGiaoTrinhATTPService, GiaoTrinhATTPService>();

            
            services.AddTransient<IKienThucATTPService, KienThucATTPService>();

            
            services.AddTransient<INguonVonService, NguonVonService>();
            services.AddTransient<INguonVonChiTietService, NguonVonChiTietService>();

            services.AddTransient<IDanhMucHinhThucNuoiService, DanhMucHinhThucNuoiService>();
            services.AddTransient<IDanhMucChucDanhService, DanhMucChucDanhService>();
            services.AddTransient<IDanhMucChucNangService, DanhMucChucNangService>();
            services.AddTransient<IDanhMucThanhVienService, DanhMucThanhVienService>();
            services.AddTransient<IDanhMucUngDungService, DanhMucUngDungService>();
            services.AddTransient<IDanhMucSanPhamPhanLoaiService, DanhMucSanPhamPhanLoaiService>();
            services.AddTransient<IDanhMucChuongTrinhQuanLyChatLuongService, DanhMucChuongTrinhQuanLyChatLuongService>();
            services.AddTransient<IDanhMucCompanyInfoService, DanhMucCompanyInfoService>();
            services.AddTransient<IDanhMucCompanyTinhTrangService, DanhMucCompanyTinhTrangService>();
            services.AddTransient<IDanhMucXepLoaiService, DanhMucXepLoaiService>();
            services.AddTransient<IDanhMucDangKyCapGiayService, DanhMucDangKyCapGiayService>();
            services.AddTransient<IDanhMucThiTruongService, DanhMucThiTruongService>();
            services.AddTransient<IDanhMucCompanyPhanLoaiService, DanhMucCompanyPhanLoaiService>();
            services.AddTransient<IDanhMucCompanyTrangThaiService, DanhMucCompanyTrangThaiService>();
			services.AddTransient<IDanhMucATTPLoaiHoSoService, DanhMucATTPLoaiHoSoService>();
			services.AddTransient<IDanhMucATTPTinhTrangService, DanhMucATTPTinhTrangService>();
			services.AddTransient<IDanhMucATTPXepLoaiService, DanhMucATTPXepLoaiService>();
			services.AddTransient<IDanhMucBienBanATTPService, DanhMucBienBanATTPService>();
			services.AddTransient<IDanhMucThamDinhKetQuaDanhGiaService, DanhMucThamDinhKetQuaDanhGiaService>();
            services.AddTransient<IDanhMucLayMauChiTieuService, DanhMucLayMauChiTieuService>();
            services.AddTransient<IDanhMucLayMauService, DanhMucLayMauService>();
            services.AddTransient<IDanhMucLayMauPhanLoaiService, DanhMucLayMauPhanLoaiService>();
            services.AddTransient<IDanhMucThoiGianLayMauService, DanhMucThoiGianLayMauService>();
			services.AddTransient<IDanhMucQuocGiaService, DanhMucQuocGiaService>();
            services.AddTransient<IDanhMucProductGroupService, DanhMucProductGroupService>();

            services.AddTransient<IThanhVienService, ThanhVienService>();
            services.AddTransient<IThanhVienTokenService, ThanhVienTokenService>();
            services.AddTransient<IThanhVienLichSuTruyCapService, ThanhVienLichSuTruyCapService>();
            services.AddTransient<IThanhVienPhanQuyenChucNangService, ThanhVienPhanQuyenChucNangService>();
            services.AddTransient<IThanhVienPhanQuyenKhuVucService, ThanhVienPhanQuyenKhuVucService>();
            services.AddTransient<IThanhVienThietBiService, ThanhVienThietBiService>();
            services.AddTransient<IThanhVienLichSuThongBaoService, ThanhVienLichSuThongBaoService>();
            services.AddTransient<IThanhVienThongBaoService, ThanhVienThongBaoService>();




            services.AddTransient<IPhanAnhService, PhanAnhService>();

            

            services.AddTransient<IPlanTypeService, PlanTypeService>();


           

            services.AddTransient<IProductGroupService, ProductGroupService>();

            services.AddTransient<IProductUnitService, ProductUnitService>();


            services.AddTransient<IProvinceDataService, ProvinceDataService>();

                      


            services.AddTransient<ISpeciesService, SpeciesService>();


            

            services.AddTransient<IWardDataService, WardDataService>();


            

            services.AddTransient<IRegisterCoSoNuoiService, RegisterCoSoNuoiService>();
            services.AddTransient<IRegisterCoSoNuoiDocumentsService, RegisterCoSoNuoiDocumentsService>();
            services.AddTransient<IRegisterCoSoNuoiLakesService, RegisterCoSoNuoiLakesService>();

         

            services.AddTransient<IStateAgencyMenusService, StateAgencyMenusService>();
            services.AddTransient<IStateAgencyService, StateAgencyService>();

            services.AddTransient<IRegisterHarvestItemsService, RegisterHarvestItemsService>();
            services.AddTransient<IRegisterHarvestService, RegisterHarvestService>();

            services.AddTransient<IProductInfoService, ProductInfoService>();
            services.AddTransient<IProductInfoDocumentsService, ProductInfoDocumentsService>();

           
            services.AddTransient<IPlanThamDinhCompaniesService, PlanThamDinhCompaniesService>();           
            services.AddTransient<IPlanThamDinhService, PlanThamDinhService>();
			services.AddTransient<IPlanThamDinhThanhVienService, PlanThamDinhThanhVienService>();
			services.AddTransient<IPlanThamDinhCompanyDocumentService, PlanThamDinhCompanyDocumentService>();
			services.AddTransient<IPlanThamDinhCompanyProductGroupService, PlanThamDinhCompanyProductGroupService>();
			services.AddTransient<IPlanThamDinhCompanyBienBanService, PlanThamDinhCompanyBienBanService>();
            services.AddTransient<IPlanThamDinhDanhMucLayMauChiTieuService, PlanThamDinhDanhMucLayMauChiTieuService>();
            services.AddTransient<IPlanThamDinhDanhMucLayMauService, PlanThamDinhDanhMucLayMauService>();
            services.AddTransient<IPlanThamDinhDistrictDataService, PlanThamDinhDistrictDataService>();

			services.AddTransient<ITapTinDinhKemService, TapTinDinhKemService>();

            services.AddTransient<IReportService, ReportService>();

            services.AddSingleton(HtmlEncoder.Create(allowedRanges: new[] { UnicodeRanges.All }));

            return services;
        }

        public static IServiceCollection AddRepository(this IServiceCollection services)
        {
            services.AddTransient<IAgencyDepartmentMenusRepository, AgencyDepartmentMenusRepository>();
            services.AddTransient<IAgencyDepartmentRepository, AgencyDepartmentRepository>();
            services.AddTransient<IAgencyMenuRepository, AgencyMenuRepository>();
            services.AddTransient<IAgencyUserRepository, AgencyUserRepository>();
            services.AddTransient<IBienBanATTPRepository, BienBanATTPRepository>();

          

            services.AddTransient<IATTPInfoDocumentsRepository, ATTPInfoDocumentsRepository>();
            services.AddTransient<IATTPInfoProductBadsRepository, ATTPInfoProductBadsRepository>();
            services.AddTransient<IATTPInfoProductGoodsRepository, ATTPInfoProductGoodsRepository>();
            services.AddTransient<IATTPInfoProductGroupsRepository, ATTPInfoProductGroupsRepository>();
            services.AddTransient<IATTPInfoRepository, ATTPInfoRepository>();
            services.AddTransient<IATTPInfoTimelinesRepository, ATTPInfoTimelinesRepository>();
            services.AddTransient<IATTPInfoDocumentsRepository, ATTPInfoDocumentsRepository>();
            services.AddTransient<IATTPInfoProductBadsRepository, ATTPInfoProductBadsRepository>();
            services.AddTransient<IATTPInfoProductGoodsRepository, ATTPInfoProductGoodsRepository>();
            services.AddTransient<IATTPInfoProductGroupsRepository, ATTPInfoProductGroupsRepository>();
            services.AddTransient<IATTPInfoRepository, ATTPInfoRepository>();
            services.AddTransient<IATTPInfoTimelinesRepository, ATTPInfoTimelinesRepository>();

            services.AddTransient<IATTPTiepNhanDocumentsRepository, ATTPTiepNhanDocumentsRepository>();
            services.AddTransient<IATTPTiepNhanProductGroupsRepository, ATTPTiepNhanProductGroupsRepository>();
            services.AddTransient<IATTPTiepNhanRepository, ATTPTiepNhanRepository>();

           
            services.AddTransient<ICamKet17Repository, CamKet17Repository>();

            services.AddTransient<ICauHoiATTPQuestionsRepository, CauHoiATTPQuestionsRepository>();
            services.AddTransient<ICauHoiATTPRepository, CauHoiATTPRepository>();
            services.AddTransient<ICauHoiNhomRepository, CauHoiNhomRepository>();

           

            services.AddTransient<ICompanyExaminationQuestionsRepository, CompanyExaminationQuestionsRepository>();
            services.AddTransient<ICompanyExaminationRepository, CompanyExaminationRepository>();

            services.AddTransient<ICompanyFieldsRepository, CompanyFieldsRepository>();

            services.AddTransient<ICompanyGroupRepository, CompanyGroupRepository>();

            services.AddTransient<ICompanyInfoFieldsRepository, CompanyInfoFieldsRepository>();
            services.AddTransient<ICompanyInfoGroupsRepository, CompanyInfoGroupsRepository>();
            services.AddTransient<ICompanyInfoProductsRepository, CompanyInfoProductsRepository>();
            services.AddTransient<ICompanyInfoRepository, CompanyInfoRepository>();
            services.AddTransient<ICompanyInfoProductGroupsRepository, CompanyInfoProductGroupsRepository>();
            services.AddTransient<ICompanyInfoSpeciesRepository, CompanyInfoSpeciesRepository>();
            services.AddTransient<ICompanyInfoLichSuKiemTraRepository, CompanyInfoLichSuKiemTraRepository>();
            services.AddTransient<ICompanyInfoStateAgencyRepository, CompanyInfoStateAgencyRepository>();

            services.AddTransient<ICompanyInfoDonViDongGoiRepository, CompanyInfoDonViDongGoiRepository>();
            services.AddTransient<ICompanyInfoDonViDongGoiNongHoRepository, CompanyInfoDonViDongGoiNongHoRepository>();
            services.AddTransient<ICompanyInfoDonViDongGoiSanPhamRepository, CompanyInfoDonViDongGoiSanPhamRepository>();
            services.AddTransient<ICompanyInfoDonViDongGoiThiTruongRepository, CompanyInfoDonViDongGoiThiTruongRepository>();
            services.AddTransient<ICompanyInfoDonViDongGoiDocumentsRepository, CompanyInfoDonViDongGoiDocumentsRepository>();

            services.AddTransient<ICompanyInfoVungTrongRepository, CompanyInfoVungTrongRepository>();
            services.AddTransient<ICompanyInfoVungTrongDocumentsRepository, CompanyInfoVungTrongDocumentsRepository>();
            services.AddTransient<ICompanyInfoVungTrongNongHoRepository, CompanyInfoVungTrongNongHoRepository>();
            services.AddTransient<ICompanyInfoVungTrongToaDoRepository, CompanyInfoVungTrongToaDoRepository>();

            services.AddTransient<ICompanyLakeRepository, CompanyLakeRepository>();
            services.AddTransient<ICompanyScopeRepository, CompanyScopeRepository>();

            services.AddTransient<ICompanyStaffExamAnswersRepository, CompanyStaffExamAnswersRepository>();
            services.AddTransient<ICompanyStaffExamRepository, CompanyStaffExamRepository>();

            services.AddTransient<ICompanyUserRepository, CompanyUserRepository>();

            services.AddTransient<ICoSoNuoiDocumentRepository, CoSoNuoiDocumentRepository>();

            

            services.AddTransient<IDistrictDataRepository, DistrictDataRepository>();

            services.AddTransient<IDocumentTemplateRepository, DocumentTemplateRepository>();
            services.AddTransient<IDocumentTemplateRepository, DocumentTemplateRepository>();

            
            services.AddTransient<IGiaoTrinhATTPRepository, GiaoTrinhATTPRepository>();

            
            services.AddTransient<IKienThucATTPRepository, KienThucATTPRepository>();

            

            services.AddTransient<INguonVonRepository, NguonVonRepository>();
            services.AddTransient<INguonVonChiTietRepository, NguonVonChiTietRepository>();




            services.AddTransient<IPhanAnhRepository, PhanAnhRepository>();

            

            services.AddTransient<IPlanTypeRepository, PlanTypeRepository>();


            
            services.AddTransient<IProductGroupRepository, ProductGroupRepository>();


            services.AddTransient<IProductUnitRepository, ProductUnitRepository>();

            services.AddTransient<IProvinceDataRepository, ProvinceDataRepository>();

            
         

            services.AddTransient<ISpeciesRepository, SpeciesRepository>();

            

            services.AddTransient<IWardDataRepository, WardDataRepository>();

            

            services.AddTransient<IRegisterCoSoNuoiRepository, RegisterCoSoNuoiRepository>();
            services.AddTransient<IRegisterCoSoNuoiLakesRepository, RegisterCoSoNuoiLakesRepository>();
            services.AddTransient<IRegisterCoSoNuoiDocumentsRepository, RegisterCoSoNuoiDocumentsRepository>();

           

            services.AddTransient<IStateAgencyMenusRepository, StateAgencyMenusRepository>();
            services.AddTransient<IStateAgencyRepository, StateAgencyRepository>();

            services.AddTransient<IRegisterHarvestItemsRepository, RegisterHarvestItemsRepository>();
            services.AddTransient<IRegisterHarvestRepository, RegisterHarvestRepository>();

            services.AddTransient<IDanhMucHinhThucNuoiRepository, DanhMucHinhThucNuoiRepository>();
            services.AddTransient<IDanhMucChucDanhRepository, DanhMucChucDanhRepository>();
            services.AddTransient<IDanhMucChucNangRepository, DanhMucChucNangRepository>();
            services.AddTransient<IDanhMucThanhVienRepository, DanhMucThanhVienRepository>();
            services.AddTransient<IDanhMucUngDungRepository, DanhMucUngDungRepository>();
            services.AddTransient<IDanhMucSanPhamPhanLoaiRepository, DanhMucSanPhamPhanLoaiRepository>();
            services.AddTransient<IDanhMucChuongTrinhQuanLyChatLuongRepository, DanhMucChuongTrinhQuanLyChatLuongRepository>();
            services.AddTransient<IDanhMucCompanyInfoRepository, DanhMucCompanyInfoRepository>();
            services.AddTransient<IDanhMucCompanyTinhTrangRepository, DanhMucCompanyTinhTrangRepository>();
            services.AddTransient<IDanhMucXepLoaiRepository, DanhMucXepLoaiRepository>();
            services.AddTransient<IDanhMucDangKyCapGiayRepository, DanhMucDangKyCapGiayRepository>();
            services.AddTransient<IDanhMucThiTruongRepository, DanhMucThiTruongRepository>();
            services.AddTransient<IDanhMucCompanyPhanLoaiRepository, DanhMucCompanyPhanLoaiRepository>();
            services.AddTransient<IDanhMucCompanyTrangThaiRepository, DanhMucCompanyTrangThaiRepository>();
			services.AddTransient<IDanhMucATTPLoaiHoSoRepository, DanhMucATTPLoaiHoSoRepository>();
			services.AddTransient<IDanhMucATTPTinhTrangRepository, DanhMucATTPTinhTrangRepository>();
			services.AddTransient<IDanhMucATTPXepLoaiRepository, DanhMucATTPXepLoaiRepository>();
			services.AddTransient<IDanhMucBienBanATTPRepository, DanhMucBienBanATTPRepository>();
			services.AddTransient<IDanhMucThamDinhKetQuaDanhGiaRepository, DanhMucThamDinhKetQuaDanhGiaRepository>();
            services.AddTransient<IDanhMucLayMauChiTieuRepository, DanhMucLayMauChiTieuRepository>();
            services.AddTransient<IDanhMucLayMauRepository, DanhMucLayMauRepository>();
            services.AddTransient<IDanhMucLayMauPhanLoaiRepository, DanhMucLayMauPhanLoaiRepository>();
            services.AddTransient<IDanhMucThoiGianLayMauRepository, DanhMucThoiGianLayMauRepository>();
            services.AddTransient<IDanhMucQuocGiaRepository, DanhMucQuocGiaRepository>();
            services.AddTransient<IDanhMucProductGroupRepository, DanhMucProductGroupRepository>();

            services.AddTransient<IThanhVienRepository, ThanhVienRepository>();
            services.AddTransient<IThanhVienTokenRepository, ThanhVienTokenRepository>();
            services.AddTransient<IThanhVienLichSuTruyCapRepository, ThanhVienLichSuTruyCapRepository>();
            services.AddTransient<IThanhVienPhanQuyenChucNangRepository, ThanhVienPhanQuyenChucNangRepository>();
            services.AddTransient<IThanhVienPhanQuyenKhuVucRepository, ThanhVienPhanQuyenKhuVucRepository>();
            services.AddTransient<IThanhVienThietBiRepository, ThanhVienThietBiRepository>();
            services.AddTransient<IThanhVienLichSuThongBaoRepository, ThanhVienLichSuThongBaoRepository>();
            services.AddTransient<IThanhVienThongBaoRepository, ThanhVienThongBaoRepository>();


            services.AddTransient<IPlanThamDinhCompaniesRepository, PlanThamDinhCompaniesRepository>();           
            services.AddTransient<IPlanThamDinhRepository, PlanThamDinhRepository>();
			services.AddTransient<IPlanThamDinhThanhVienRepository, PlanThamDinhThanhVienRepository>();
			services.AddTransient<IPlanThamDinhCompanyDocumentRepository, PlanThamDinhCompanyDocumentRepository>();
			services.AddTransient<IPlanThamDinhCompanyProductGroupRepository, PlanThamDinhCompanyProductGroupRepository>();
			services.AddTransient<IPlanThamDinhCompanyBienBanRepository, PlanThamDinhCompanyBienBanRepository>();
            services.AddTransient<IPlanThamDinhDanhMucLayMauChiTieuRepository, PlanThamDinhDanhMucLayMauChiTieuRepository>();
            services.AddTransient<IPlanThamDinhDanhMucLayMauRepository, PlanThamDinhDanhMucLayMauRepository>();
            services.AddTransient<IPlanThamDinhDistrictDataRepository, PlanThamDinhDistrictDataRepository>();

			services.AddTransient<ITapTinDinhKemRepository, TapTinDinhKemRepository>();

			services.AddTransient<IProductInfoRepository, ProductInfoRepository>();
			services.AddTransient<IProductInfoDocumentsRepository, ProductInfoDocumentsRepository>();

            services.AddTransient<IReportRepository, ReportRepository>();


            return services;
        }
    }
}
