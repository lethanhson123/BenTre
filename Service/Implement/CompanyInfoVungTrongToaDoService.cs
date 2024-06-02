using Data.Model;
using Service.Interface;

namespace Service.Implement
{
    public class CompanyInfoVungTrongToaDoService : BaseService<CompanyInfoVungTrongToaDo, ICompanyInfoVungTrongToaDoRepository>
    , ICompanyInfoVungTrongToaDoService
    {
        private readonly ICompanyInfoVungTrongToaDoRepository _CompanyInfoVungTrongToaDoRepository;
        public CompanyInfoVungTrongToaDoService(ICompanyInfoVungTrongToaDoRepository CompanyInfoVungTrongToaDoRepository) : base(CompanyInfoVungTrongToaDoRepository)
        {
            _CompanyInfoVungTrongToaDoRepository = CompanyInfoVungTrongToaDoRepository;
        }

        public override async Task<List<CompanyInfoVungTrongToaDo>> GetBySearchStringToListAsync(string searchString)
        {
            List<CompanyInfoVungTrongToaDo> result = new List<CompanyInfoVungTrongToaDo>();
            try
            {
                result = await _CompanyInfoVungTrongToaDoRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                if (result.Count == 0)
                {
                    for(int i=0;i<5;i++)
                    {
                        CompanyInfoVungTrongToaDo companyInfoVungTrongToaDo = new CompanyInfoVungTrongToaDo();
                        if (i == 0)
                        {
                            companyInfoVungTrongToaDo.IsTrungTam = true;
                            companyInfoVungTrongToaDo.Name = "Vị trí trung tâm";
                        }
                        else
                        {
                            companyInfoVungTrongToaDo.Name = "Vị trí " +i;
                        }
                        companyInfoVungTrongToaDo.Code = searchString;
                        

                        Save(companyInfoVungTrongToaDo);
                    }
                    result = await _CompanyInfoVungTrongToaDoRepository.GetByCondition(item => item.Code == searchString).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
    }
}

