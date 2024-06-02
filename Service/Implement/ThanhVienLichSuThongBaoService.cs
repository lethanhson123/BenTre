using System;

namespace Service.Implement
{
    public class ThanhVienLichSuThongBaoService : BaseService<ThanhVienLichSuThongBao, IThanhVienLichSuThongBaoRepository>
    , IThanhVienLichSuThongBaoService
    {
        private readonly IThanhVienLichSuThongBaoRepository _ThanhVienLichSuThongBaoRepository;
        public ThanhVienLichSuThongBaoService(IThanhVienLichSuThongBaoRepository ThanhVienLichSuThongBaoRepository) : base(ThanhVienLichSuThongBaoRepository)
        {
            _ThanhVienLichSuThongBaoRepository = ThanhVienLichSuThongBaoRepository;
        }

        public async Task<List<ThanhVienLichSuThongBao>> GetByFileNameToListAsync(string typeName)
        {
            List<ThanhVienLichSuThongBao> result = await GetByCondition(x => x.TypeName == typeName).ToListAsync();
            return result;  
        }
    }
}

