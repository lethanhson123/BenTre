namespace API.Controllers.v1
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class BaseController<T, TBaseService> : Controller
        where T : BaseModel
        where TBaseService : IBaseService<T>
    {
        private readonly TBaseService _BaseService;
        private readonly IWebHostEnvironment _WebHostEnvironment;
        public BaseController(TBaseService baseService
            , IWebHostEnvironment WebHostEnvironment)
        {
            _BaseService = baseService;
            _WebHostEnvironment = WebHostEnvironment;
        }

        [HttpPost]
        [Route("Save")]
        public virtual T Save()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                result = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                _BaseService.Save(result);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("SaveAsync")]
        public virtual async Task<T> SaveAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                result = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                result = await _BaseService.SaveAsync(result);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("Remove")]
        public virtual string Remove()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.Remove(baseParameter.ID).ToString();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("RemoveAsync")]
        public virtual async Task<string> RemoveAsync()
        {
            string result = GlobalHelper.InitializationString;
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                await _BaseService.RemoveAsync(baseParameter.ID);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByID")]
        public virtual T GetByID()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByID(baseParameter.ID);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDAsync")]
        public virtual async Task<T> GetByIDAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByIDAsync(baseParameter.ID);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByName")]
        public virtual T GetByName()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByName(baseParameter.Name);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByNameAsync")]
        public virtual async Task<T> GetByNameAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByNameAsync(baseParameter.Name);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCode")]
        public virtual T GetByCode()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByCode(baseParameter.Name);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByCodeAsync")]
        public virtual async Task<T> GetByCodeAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByCodeAsync(baseParameter.Code);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByuid")]
        public virtual T GetByuid()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByuid(baseParameter.uid);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByuidAsync")]
        public virtual async Task<T> GetByuidAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByuidAsync(baseParameter.uid);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                result.Note = message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllToList")]
        public virtual List<T> GetAllToList()
        {
            List<T> result = new List<T>();
            try
            {
                result = _BaseService.GetAllToList();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllToListAsync")]
        public virtual async Task<List<T>> GetAllToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                result = await _BaseService.GetAllToListAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDToList")]
        public virtual List<T> GetByIDToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByIDToList(baseParameter.ID);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDToListAsync")]
        public virtual async Task<List<T>> GetByIDToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByIDToListAsync(baseParameter.ID);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActiveToList")]
        public virtual List<T> GetByActiveToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByActiveToList(baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByActiveToListAsync")]
        public virtual async Task<List<T>> GetByActiveToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByActiveToListAsync(baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDToList")]
        public virtual List<T> GetByParentIDToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDToList(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDToListAsync")]
        public virtual async Task<List<T>> GetByParentIDToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndActiveToList")]
        public virtual List<T> GetByParentIDAndActiveToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndActiveToList(baseParameter.ParentID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndActiveToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndActiveToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndActiveToListAsync(baseParameter.ParentID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndCodeToList")]
        public virtual List<T> GetByParentIDAndCodeToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndCodeToList(baseParameter.ParentID.Value, baseParameter.Code);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndCodeToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndCodeToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndCodeToListAsync(baseParameter.ParentID.Value, baseParameter.Code);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndCodeAndActiveToList")]
        public virtual List<T> GetByParentIDAndCodeAndActiveToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndCodeAndActiveToList(baseParameter.ParentID.Value, baseParameter.Code, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndCodeAndActiveToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndCodeAndActiveToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndCodeAndActiveToListAsync(baseParameter.ParentID.Value, baseParameter.Code, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDToList")]
        public virtual List<T> GetByLastUpdatedMembershipIDToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByLastUpdatedMembershipIDToList(baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDToListAsync")]
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByLastUpdatedMembershipIDToListAsync(baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDAndActiveToList")]
        public virtual List<T> GetByLastUpdatedMembershipIDAndActiveToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByLastUpdatedMembershipIDAndActiveToList(baseParameter.LastUpdatedMembershipID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDAndActiveToListAsync")]
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDAndActiveToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByLastUpdatedMembershipIDAndActiveToListAsync(baseParameter.LastUpdatedMembershipID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndLastUpdatedMembershipIDToList")]
        public virtual List<T> GetByParentIDAndLastUpdatedMembershipIDToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndLastUpdatedMembershipIDToList(baseParameter.ParentID.Value, baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndLastUpdatedMembershipIDToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndLastUpdatedMembershipIDToListAsync(baseParameter.ParentID.Value, baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndLastUpdatedMembershipIDAndActiveToList")]
        public virtual List<T> GetByParentIDAndLastUpdatedMembershipIDAndActiveToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndLastUpdatedMembershipIDAndActiveToList(baseParameter.ParentID.Value, baseParameter.LastUpdatedMembershipID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync(baseParameter.ParentID.Value, baseParameter.LastUpdatedMembershipID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringToList")]
        public virtual List<T> GetBySearchStringToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetBySearchStringToList(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringToListAsync")]
        public virtual async Task<List<T>> GetBySearchStringToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetBySearchStringToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPageAndPageSizeToList")]
        public virtual List<T> GetByPageAndPageSizeToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (baseParameter.ID > 0)
                {
                    result = _BaseService.GetByPageAndPageSizeToList(baseParameter.Page.Value, baseParameter.PageSize.Value, baseParameter.ID);
                }
                else
                {
                    result = _BaseService.GetByPageAndPageSizeToList(baseParameter.Page.Value, baseParameter.PageSize.Value);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByPageAndPageSizeToListAsync")]
        public virtual async Task<List<T>> GetByPageAndPageSizeToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (baseParameter.ID > 0)
                {
                    result = await _BaseService.GetByPageAndPageSizeToListAsync(baseParameter.Page.Value, baseParameter.PageSize.Value, baseParameter.ID);
                }
                else
                {
                    result = await _BaseService.GetByPageAndPageSizeToListAsync(baseParameter.Page.Value, baseParameter.PageSize.Value);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDString")]
        public virtual T GetByIDString()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (!string.IsNullOrEmpty(baseParameter.IDString))
                {
                    baseParameter.IDString = GlobalHelper.InitializationURLCode(baseParameter.IDString);
                    result = _BaseService.GetByID(int.Parse(baseParameter.IDString));
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByIDStringAsync")]
        public virtual async Task<T> GetByIDStringAsync()
        {
            T result = (T)Activator.CreateInstance(typeof(T));
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                if (!string.IsNullOrEmpty(baseParameter.IDString))
                {
                    baseParameter.IDString = GlobalHelper.InitializationURLCode(baseParameter.IDString);
                    result = await _BaseService.GetByIDAsync(int.Parse(baseParameter.IDString));
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("SaveList")]
        public virtual List<T> SaveList()
        {
            List<T> result = new List<T>();
            try
            {
                result = JsonConvert.DeserializeObject<List<T>>(Request.Form["data"]);
                foreach (T item in result)
                {
                    _BaseService.Save(item);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("SaveListAsync")]
        public virtual async Task<List<T>> SaveListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                result = JsonConvert.DeserializeObject<List<T>>(Request.Form["data"]);
                foreach (T item in result)
                {
                    await _BaseService.SaveAsync(item);
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllAndEmptyToList")]
        public virtual List<T> GetAllAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                result = _BaseService.GetAllAndEmptyToList();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetAllAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetAllAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                result = await _BaseService.GetAllAndEmptyToListAsync();
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndEmptyToList")]
        public virtual List<T> GetByParentIDAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndEmptyToList(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndEmptyToListAsync(baseParameter.ParentID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndActiveAndEmptyToList")]
        public virtual List<T> GetByParentIDAndActiveAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByParentIDAndActiveAndEmptyToList(baseParameter.ParentID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByParentIDAndActiveAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetByParentIDAndActiveAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByParentIDAndActiveAndEmptyToListAsync(baseParameter.ParentID.Value, baseParameter.Active.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDAndEmptyToList")]
        public virtual List<T> GetByLastUpdatedMembershipIDAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetByLastUpdatedMembershipIDAndEmptyToList(baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetByLastUpdatedMembershipIDAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetByLastUpdatedMembershipIDAndEmptyToListAsync(baseParameter.LastUpdatedMembershipID.Value);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringAndEmptyToList")]
        public virtual List<T> GetBySearchStringAndEmptyToList()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = _BaseService.GetBySearchStringAndEmptyToList(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }
        [HttpPost]
        [Route("GetBySearchStringAndEmptyToListAsync")]
        public virtual async Task<List<T>> GetBySearchStringAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                BaseParameter baseParameter = JsonConvert.DeserializeObject<BaseParameter>(Request.Form["data"]);
                result = await _BaseService.GetBySearchStringAndEmptyToListAsync(baseParameter.SearchString);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }       
        [HttpPost]
        [Route("SaveAndUploadFile")]
        public virtual T SaveAndUploadFile()
        {
            T model = (T)Activator.CreateInstance(typeof(T));
            try
            {
                model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        model.FileName = model.GetType().Name + "_" + model.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                        bool isFolderExists = System.IO.Directory.Exists(folderPath);
                        if (!isFolderExists)
                        {
                            System.IO.Directory.CreateDirectory(folderPath);
                        }
                        var physicalPath = Path.Combine(folderPath, model.FileName);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                            model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;
                        }
                    }
                }
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            _BaseService.Save(model);
            return model;
        }
        [HttpPost]
        [Route("SaveAndUploadFileAsync")]
        public virtual async Task<T> SaveAndUploadFileAsync()
        {
            T model = (T)Activator.CreateInstance(typeof(T));
            try
            {
                model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    if (file == null || file.Length == 0)
                    {
                    }
                    if (file != null)
                    {
                        string fileExtension = Path.GetExtension(file.FileName);
                        model.FileName = model.GetType().Name + "_" + model.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                        string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                        bool isFolderExists = System.IO.Directory.Exists(folderPath);
                        if (!isFolderExists)
                        {
                            System.IO.Directory.CreateDirectory(folderPath);
                        }
                        var physicalPath = Path.Combine(folderPath, model.FileName);
                        using (var stream = new FileStream(physicalPath, FileMode.Create))
                        {
                            file.CopyTo(stream);
                            model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;
                        }
                    }
                }
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            await _BaseService.SaveAsync(model);
            return model;
        }
        [HttpPost]
        [Route("SaveAndUploadFiles")]
        public virtual T SaveAndUploadFiles()
        {
            T model = (T)Activator.CreateInstance(typeof(T));
            try
            {
                model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Form.Files.Count; i++)
                    {
                        var file = Request.Form.Files[i];
                        if (file == null || file.Length == 0)
                        {
                        }
                        if (file != null)
                        {
                            string fileExtension = Path.GetExtension(file.FileName);
                            model.FileName = model.GetType().Name + "_" + model.ID + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                            string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                            bool isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            var physicalPath = Path.Combine(folderPath, model.FileName);
                            using (var stream = new FileStream(physicalPath, FileMode.Create))
                            {
                                file.CopyTo(stream);
                                model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;
                                model.ID = GlobalHelper.InitializationNumber;
                                _BaseService.Save(model);
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            return model;
        }
        [HttpPost]
        [Route("SaveAndUploadFilesAsync")]
        public virtual async Task<T> SaveAndUploadFilesAsync()
        {
            T model = (T)Activator.CreateInstance(typeof(T));
            try
            {
                model = JsonConvert.DeserializeObject<T>(Request.Form["data"]);
                if (Request.Form.Files.Count > 0)
                {
                    for (int i = 0; i < Request.Form.Files.Count; i++)
                    {
                        var file = Request.Form.Files[i];
                        if (file == null || file.Length == 0)
                        {
                        }
                        if (file != null)
                        {
                            string fileExtension = Path.GetExtension(file.FileName);
                            model.FileName = model.GetType().Name + "_" + model.ID + "_" + "_" + GlobalHelper.InitializationDateTimeCode0001 + fileExtension;
                            string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, model.GetType().Name);
                            bool isFolderExists = System.IO.Directory.Exists(folderPath);
                            if (!isFolderExists)
                            {
                                System.IO.Directory.CreateDirectory(folderPath);
                            }
                            var physicalPath = Path.Combine(folderPath, model.FileName);
                            using (var stream = new FileStream(physicalPath, FileMode.Create))
                            {
                                file.CopyTo(stream);
                                model.FileName = GlobalHelper.APISite + "/" + model.GetType().Name + "/" + model.FileName;
                                model.ID = GlobalHelper.InitializationNumber;
                                await _BaseService.SaveAsync(model);
                            }
                        }
                    }
                }
            }
            catch (Exception e)
            {
                string mes = e.Message;
            }
            return model;
        }
        [HttpPost]
        [Route("CreateNotification")]
        public virtual bool CreateNotification(T model)
        {
            bool result = GlobalHelper.InitializationBool;
            try
            {
                if (model != null)
                {
                    Notification notification = new Notification();
                    string folderPath = Path.Combine(_WebHostEnvironment.WebRootPath, notification.GetType().Name);
                    bool isFolderExists = System.IO.Directory.Exists(folderPath);
                    if (!isFolderExists)
                    {
                        System.IO.Directory.CreateDirectory(folderPath);
                    }
                    string fileName = notification.GetType().Name + ".json";
                    string filePath = Path.Combine(_WebHostEnvironment.WebRootPath, notification.GetType().Name, fileName);
                    bool isFileExists = System.IO.File.Exists(filePath);
                    if (!isFileExists)
                    {
                        List<Notification> listNotificationNew = new List<Notification>();
                        string contentNew = JsonConvert.SerializeObject(listNotificationNew);
                        using (FileStream fs = new FileStream(filePath, FileMode.Create))
                        {
                            using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                            {
                                w.WriteLine(contentNew);
                            }
                        }
                    }
                    string content = GlobalHelper.InitializationString;
                    using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                    {
                        using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                        {
                            content = r.ReadToEnd();
                        }
                    }
                    List<Notification> listNotification = new List<Notification>();
                    listNotification = JsonConvert.DeserializeObject<List<Notification>>(content);
                    if (listNotification.Count > 0)
                    {
                        foreach (Notification item in listNotification)
                        {
                            if (item.ID > 0)
                            {
                                fileName = item.ID + ".json";
                                filePath = Path.Combine(_WebHostEnvironment.WebRootPath, notification.GetType().Name, fileName);
                                isFileExists = System.IO.File.Exists(filePath);
                                if (!isFileExists)
                                {
                                    List<Notification> listNotificationSubNew = new List<Notification>();
                                    string contentNew = JsonConvert.SerializeObject(listNotificationSubNew);
                                    using (FileStream fs = new FileStream(filePath, FileMode.Create))
                                    {
                                        using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                        {
                                            w.WriteLine(contentNew);
                                        }
                                    }
                                }
                                content = GlobalHelper.InitializationString;
                                using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                                {
                                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                                    {
                                        content = r.ReadToEnd();
                                    }
                                }
                                List<Notification> listNotificationSub = new List<Notification>();
                                listNotificationSub = JsonConvert.DeserializeObject<List<Notification>>(content);

                                notification = new Notification();
                                notification = model as Notification;
                                notification.TypeName = model.GetType().Name;
                                listNotificationSub.Insert(0, notification);
                                if (listNotificationSub.Count > GlobalHelper.NotificationCount)
                                {
                                    listNotificationSub.RemoveAt(GlobalHelper.NotificationCount);
                                }
                                content = JsonConvert.SerializeObject(listNotificationSub);
                                using (FileStream fs = new FileStream(filePath, FileMode.Create))
                                {
                                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                                    {
                                        w.WriteLine(content);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            return result;
        }

    }
}
