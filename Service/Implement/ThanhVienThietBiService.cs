using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using System.Collections.Generic;

namespace Service.Implement
{
    public class ThanhVienThietBiService : BaseService<ThanhVienThietBi, IThanhVienThietBiRepository>
    , IThanhVienThietBiService
    {
        private readonly IThanhVienThietBiRepository _ThanhVienThietBiRepository;

        private readonly IThanhVienLichSuThongBaoService _ThanhVienLichSuThongBaoService;
        public ThanhVienThietBiService(IThanhVienThietBiRepository ThanhVienThietBiRepository,


            IThanhVienLichSuThongBaoService ThanhVienLichSuThongBaoService

        ) : base(ThanhVienThietBiRepository)
        {
            _ThanhVienThietBiRepository = ThanhVienThietBiRepository;

            _ThanhVienLichSuThongBaoService = ThanhVienLichSuThongBaoService;
        }


        public override async Task<ThanhVienThietBi> SaveAsync(ThanhVienThietBi model)
        {
            try
            {
                ThanhVienThietBi thanhVienThietBiExist = new ThanhVienThietBi();
                thanhVienThietBiExist = await GetByCondition(item => item.ParentID == model.ParentID || item.TokenNotification == model.TokenNotification).FirstOrDefaultAsync();
                if (thanhVienThietBiExist != null)
                {
                    if (thanhVienThietBiExist.ID > 0)
                    {
                        model.ID = thanhVienThietBiExist.ID;

                        if (model.ParentID == null && thanhVienThietBiExist.ParentID > 0)
                        {
                            model.ParentID = thanhVienThietBiExist.ParentID;
                        }
                        await UpdateAsync(model);
                    }
                }
                else
                {
                    await AddAsync(model);
                }
                return model;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public async Task<int> PushNotification(ThanhVienThietBi model)
        {
            int result = GlobalHelper.InitializationNumber;
            try
            {
                if(!string.IsNullOrEmpty(model.Name) && !string.IsNullOrEmpty(model.Description))
                {
                    List<ThanhVienThietBi> listThanhVienThietBi = new List<ThanhVienThietBi>();
                    listThanhVienThietBi = await GetAllToListAsync();
                    if (listThanhVienThietBi.Count > 0)
                    {
                        string typeName = Guid.NewGuid().ToString();
                        foreach (var item in listThanhVienThietBi)
                        {
                            ThanhVienLichSuThongBao thanhVienLichSuThongBao = new ThanhVienLichSuThongBao();
                            thanhVienLichSuThongBao.TypeName = typeName;
                            thanhVienLichSuThongBao.Code = item.TokenNotification;
                            thanhVienLichSuThongBao.Name = model.Name;
                            thanhVienLichSuThongBao.Description = model.Description;
                            thanhVienLichSuThongBao.FileName = model.FileName;
                            thanhVienLichSuThongBao.Active = false;
                            thanhVienLichSuThongBao.DaGuiThongBao = false;
                            thanhVienLichSuThongBao.NgayGuiThongBao = DateTime.Now;
                            int code = await _ThanhVienLichSuThongBaoService.AddAsync(thanhVienLichSuThongBao);
                            result += code;
                        }
                    }
                }
            }
            catch (Exception ex)
            {

                throw;
            }
            return result;
        }

        
    }

}

