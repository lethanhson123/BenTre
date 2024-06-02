namespace Service.Implement
{
    public class BaseService<T, TRepository> : IBaseService<T>
        where T : BaseModel
        where TRepository : IBaseRepository<T>
    {
        private readonly TRepository _repository;
        public BaseService(TRepository repository)
        {
            _repository = repository;
        }
        public virtual void Initialization(T model)
        {
            BaseInitialization(model);
        }
        public virtual void BaseInitialization(T model)
        {
        }

        public virtual T Save(T model)
        {
            if (model.ID > 0)
            {
                Update(model);
            }
            else
            {
                Add(model);
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public virtual async Task<T> SaveAsync(T model)
        {
            if (model.ID > 0)
            {
                await UpdateAsync(model);
            }
            else
            {
                await AddAsync(model);
            }
            if (model.ID > 0)
            {
                CreateNotificationWithThanhVienThongBao(model);
            }
            return model;
        }
        public virtual int Add(T model)
        {
            Initialization(model);
            int result = GlobalHelper.InitializationNumber;
            result = _repository.Add(model);
            return result;
        }
        public virtual async Task<int> AddAsync(T model)
        {
            Initialization(model);
            int result = GlobalHelper.InitializationNumber;
            result = await _repository.AddAsync(model);
            return result;
        }
        public virtual int Update(T model)
        {
            Initialization(model);
            return _repository.Update(model);
        }
        public virtual async Task<int> UpdateAsync(T model)
        {
            Initialization(model);
            return await _repository.UpdateAsync(model);
        }
        public virtual int Remove(long ID)
        {
            return _repository.Remove(ID);
        }
        public virtual async Task<int> RemoveAsync(long ID)
        {
            return await _repository.RemoveAsync(ID);
        }
        public virtual int AddRange(List<T> list)
        {
            return _repository.AddRange(list);
        }
        public virtual async Task<int> AddRangeAsync(List<T> list)
        {
            return await _repository.AddRangeAsync(list);
        }
        public virtual int UpdateRange(List<T> list)
        {
            return _repository.UpdateRange(list);
        }
        public virtual async Task<int> UpdateRangeAsync(List<T> list)
        {
            return await _repository.UpdateRangeAsync(list);
        }
        public virtual int RemoveRange(List<T> list)
        {
            return _repository.RemoveRange(list);
        }
        public virtual async Task<int> RemoveRangeAsync(List<T> list)
        {
            return await _repository.RemoveRangeAsync(list);
        }
        public virtual IQueryable<T> GetByCondition(Expression<Func<T, bool>> whereCondition)
        {
            return _repository.GetByCondition(whereCondition);
        }
        public virtual T GetByID(long ID)
        {
            var result = _repository.GetByID(ID);
            return result;
        }
        public virtual async Task<T> GetByIDAsync(long ID)
        {
            var result = await _repository.GetByIDAsync(ID);
            return result;
        }
        public virtual T GetByName(string name)
        {
            var result = _repository.GetByName(name);
            return result;
        }
        public virtual async Task<T> GetByNameAsync(string name)
        {
            var result = await _repository.GetByNameAsync(name);
            return result;
        }
        public virtual T GetByCode(string code)
        {
            var result = _repository.GetByCode(code);
            return result;
        }
        public virtual async Task<T> GetByCodeAsync(string code)
        {
            var result = await _repository.GetByCodeAsync(code);
            return result;
        }
        public virtual T GetByuid(string uid)
        {
            var result = _repository.GetByuid(uid);
            return result;
        }
        public virtual async Task<T> GetByuidAsync(string uid)
        {
            var result = await _repository.GetByuidAsync(uid);
            return result;
        }
        public virtual List<T> GetAllToList()
        {
            return _repository.GetAllToList();
        }
        public virtual async Task<List<T>> GetAllToListAsync()
        {
            return await _repository.GetAllToListAsync();
        }
        public virtual List<T> GetByIDToList(long ID)
        {
            return _repository.GetByIDToList(ID);
        }
        public virtual async Task<List<T>> GetByIDToListAsync(long ID)
        {
            return await _repository.GetByIDToListAsync(ID);
        }
        public virtual List<T> GetByActiveToList(bool active)
        {
            return _repository.GetByActiveToList(active);
        }
        public virtual async Task<List<T>> GetByActiveToListAsync(bool active)
        {
            return await _repository.GetByActiveToListAsync(active);
        }
        public virtual List<T> GetByParentIDToList(long parentID)
        {
            return _repository.GetByParentIDToList(parentID);
        }
        public virtual async Task<List<T>> GetByParentIDToListAsync(long parentID)
        {
            return await _repository.GetByParentIDToListAsync(parentID);
        }

        public virtual List<T> GetByParentIDAndActiveToList(long parentID, bool active)
        {
            return _repository.GetByParentIDAndActiveToList(parentID, active);
        }
        public virtual async Task<List<T>> GetByParentIDAndActiveToListAsync(long parentID, bool active)
        {
            return await _repository.GetByParentIDAndActiveToListAsync(parentID, active);
        }
        public virtual List<T> GetByParentIDAndCodeToList(long parentID, string code)
        {
            return _repository.GetByParentIDAndCodeToList(parentID, code);
        }
        public virtual async Task<List<T>> GetByParentIDAndCodeToListAsync(long parentID, string code)
        {
            return await _repository.GetByParentIDAndCodeToListAsync(parentID, code);
        }
        public virtual List<T> GetByParentIDAndCodeAndActiveToList(long parentID, string code, bool active)
        {
            return _repository.GetByParentIDAndCodeAndActiveToList(parentID, code, active);
        }
        public virtual async Task<List<T>> GetByParentIDAndCodeAndActiveToListAsync(long parentID, string code, bool active)
        {
            return await _repository.GetByParentIDAndCodeAndActiveToListAsync(parentID, code, active);
        }
        public virtual List<T> GetByParentIDAndstatus_idToList(long parentID, long status_id)
        {
            return _repository.GetByParentIDAndstatus_idToList(parentID, status_id);
        }
        public virtual async Task<List<T>> GetByParentIDAndstatus_idToListAsync(long parentID, long status_id)
        {
            return await _repository.GetByParentIDAndstatus_idToListAsync(parentID, status_id);
        }
        public virtual T GetByParentIDAndstatus_id(long parentID, long status_id)
        {
            return _repository.GetByParentIDAndstatus_id(parentID, status_id);
        }
        public virtual async Task<T> GetByParentIDAndstatus_idAsync(long parentID, long status_id)
        {
            return await _repository.GetByParentIDAndstatus_idAsync(parentID, status_id);
        }
        public virtual List<T> GetByLastUpdatedMembershipIDToList(long lastUpdatedMembershipID)
        {
            return _repository.GetByLastUpdatedMembershipIDToList(lastUpdatedMembershipID);
        }
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDToListAsync(long lastUpdatedMembershipID)
        {
            return await _repository.GetByLastUpdatedMembershipIDToListAsync(lastUpdatedMembershipID);
        }
        public virtual List<T> GetByLastUpdatedMembershipIDAndActiveToList(long lastUpdatedMembershipID, bool active)
        {
            return _repository.GetByLastUpdatedMembershipIDAndActiveToList(lastUpdatedMembershipID, active);
        }
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDAndActiveToListAsync(long lastUpdatedMembershipID, bool active)
        {
            return await _repository.GetByLastUpdatedMembershipIDAndActiveToListAsync(lastUpdatedMembershipID, active);
        }
        public virtual List<T> GetByParentIDAndLastUpdatedMembershipIDToList(long parentID, long lastUpdatedMembershipID)
        {
            return _repository.GetByParentIDAndLastUpdatedMembershipIDToList(parentID, lastUpdatedMembershipID);
        }
        public virtual async Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDToListAsync(long parentID, long lastUpdatedMembershipID)
        {
            return await _repository.GetByParentIDAndLastUpdatedMembershipIDToListAsync(parentID, lastUpdatedMembershipID);
        }
        public virtual List<T> GetByParentIDAndLastUpdatedMembershipIDAndActiveToList(long parentID, long lastUpdatedMembershipID, bool active)
        {
            return _repository.GetByParentIDAndLastUpdatedMembershipIDAndActiveToList(parentID, lastUpdatedMembershipID, active);
        }
        public virtual async Task<List<T>> GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync(long parentID, long lastUpdatedMembershipID, bool active)
        {
            return await _repository.GetByParentIDAndLastUpdatedMembershipIDAndActiveToListAsync(parentID, lastUpdatedMembershipID, active);
        }
        public virtual List<T> GetBySearchStringToList(string searchString)
        {
            return _repository.GetBySearchStringToList(searchString);
        }
        public virtual async Task<List<T>> GetBySearchStringToListAsync(string searchString)
        {
            return await _repository.GetBySearchStringToListAsync(searchString);
        }
        public virtual List<T> GetByPageAndPageSizeToList(int page, int pageSize)
        {
            return _repository.GetByPageAndPageSizeToList(page, pageSize);
        }
        public virtual List<T> GetByPageAndPageSizeToList(int page, int pageSize, long ID)
        {
            List<T> result = new List<T>();
            result.AddRange(_repository.GetByPageAndPageSizeToList(page, pageSize));
            result.AddRange(GetByIDToList(ID));
            return result;
        }
        public virtual async Task<List<T>> GetByPageAndPageSizeToListAsync(int page, int pageSize)
        {
            return await _repository.GetByPageAndPageSizeToListAsync(page, pageSize);
        }
        public virtual async Task<List<T>> GetByPageAndPageSizeToListAsync(int page, int pageSize, long ID)
        {
            List<T> result = new List<T>();
            result.AddRange(await _repository.GetByPageAndPageSizeToListAsync(page, pageSize));
            result.AddRange(await GetByIDToListAsync(ID));
            return result;
        }
        public virtual string ExecuteNonQueryByStoredProcedure(string storedProcedureName, params SqlParameter[] parameters)
        {
            return _repository.ExecuteNonQueryByStoredProcedure(storedProcedureName, parameters);
        }
        public virtual async Task<string> ExecuteNonQueryByStoredProcedureAsync(string storedProcedureName, params SqlParameter[] parameters)
        {
            return await _repository.ExecuteNonQueryByStoredProcedureAsync(storedProcedureName, parameters);
        }
        public virtual List<T> GetByStoredProcedureToList(string storedProcedureName, params SqlParameter[] parameters)
        {
            return _repository.GetByStoredProcedureToList(storedProcedureName, parameters);
        }
        public virtual async Task<List<T>> GetByStoredProcedureToListAsync(string storedProcedureName, params SqlParameter[] parameters)
        {
            return await _repository.GetByStoredProcedureToListAsync(storedProcedureName, parameters);
        }
        public virtual List<T> GetAllAndEmptyToList()
        {
            List<T> result = new List<T>();
            T empty = (T)Activator.CreateInstance(typeof(T));
            result.Add(empty);
            List<T> list = GetAllToList();
            if (list.Count > 0)
            {
                result.AddRange(list);
            }
            return result;
        }
        public virtual async Task<List<T>> GetAllAndEmptyToListAsync()
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = await GetAllToListAsync();
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual List<T> GetByParentIDAndEmptyToList(long parentID)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = GetByParentIDToList(parentID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual async Task<List<T>> GetByParentIDAndEmptyToListAsync(long parentID)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = await GetByParentIDToListAsync(parentID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual List<T> GetByParentIDAndActiveAndEmptyToList(long parentID, bool active)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = GetByParentIDAndActiveToList(parentID, active);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual async Task<List<T>> GetByParentIDAndActiveAndEmptyToListAsync(long parentID, bool active)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = await GetByParentIDAndActiveToListAsync(parentID, active);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual List<T> GetByLastUpdatedMembershipIDAndEmptyToList(long lastUpdatedMembershipID)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = GetByLastUpdatedMembershipIDToList(lastUpdatedMembershipID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual async Task<List<T>> GetByLastUpdatedMembershipIDAndEmptyToListAsync(long lastUpdatedMembershipID)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = await GetByLastUpdatedMembershipIDToListAsync(lastUpdatedMembershipID);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual List<T> GetBySearchStringAndEmptyToList(string searchString)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = GetBySearchStringToList(searchString);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public virtual async Task<List<T>> GetBySearchStringAndEmptyToListAsync(string searchString)
        {
            List<T> result = new List<T>();
            try
            {
                T empty = (T)Activator.CreateInstance(typeof(T));
                result.Add(empty);
                List<T> list = await GetBySearchStringToListAsync(searchString);
                if (list.Count > 0)
                {
                    result.AddRange(list);
                }
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }
            return result;
        }
        public async Task<string> InsertItemsByDataTableAsync(DataTable table, string storedProcedureName)
        {
            string result = GlobalHelper.InitializationString;
            if (table != null)
            {
                if (table.Rows.Count > 0)
                {
                    int rowCount = 100;
                    int rowFrom = 0;
                    int rowTo = rowCount;
                    try
                    {
                        while (rowTo < table.Rows.Count)
                        {
                            DataTable tableSub = table.Clone();
                            tableSub.TableName = "tableSub";
                            tableSub.Clear();
                            for (int i = rowFrom; i < rowTo; i++)
                            {
                                DataRow newRow = tableSub.NewRow();
                                newRow.ItemArray = table.Rows[i].ItemArray;
                                tableSub.Rows.Add(newRow);
                            }
                            SqlParameter[] parameters =
                            {
                            new SqlParameter("@Table",tableSub),
                            };
                            result = await ExecuteNonQueryByStoredProcedureAsync(storedProcedureName, parameters);
                            if (result != "-1")
                            {
                                try
                                {
                                    foreach (DataRow row in tableSub.Rows)
                                    {
                                        for (int i = 0;i < 12;i++)
                                        {
                                            string row0 = (string)row[i];
                                        }                                            
                                    }
                                }
                                catch (Exception ex)
                                {
                                    result = ex.Message;
                                }
                            }
                            rowFrom = rowTo;
                            rowTo = rowTo + rowCount;
                        }
                        DataTable tableSub001 = table.Clone();
                        tableSub001.TableName = "tableSub";
                        tableSub001.Clear();
                        for (int i = rowFrom; i < table.Rows.Count; i++)
                        {
                            DataRow newRow = tableSub001.NewRow();
                            newRow.ItemArray = table.Rows[i].ItemArray;
                            tableSub001.Rows.Add(newRow);
                        }
                        SqlParameter[] parameters001 =
                        {
                            new SqlParameter("@Table",tableSub001),
                            };
                        result = await ExecuteNonQueryByStoredProcedureAsync(storedProcedureName, parameters001);
                        if (result != "-1")
                        {
                            try
                            {
                                foreach (DataRow row in tableSub001.Rows)
                                {
                                    for (int i = 0; i < 12; i++)
                                    {
                                        string row0 = (string)row[i];
                                    }
                                }
                            }
                            catch (Exception ex)
                            {
                                result = ex.Message;
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                        result = ex.Message;
                    }
                }
            }
            return result;
        }
        public virtual void CreateNotificationWithThanhVienThongBao(T model)
        {
            try
            {
                if (model != null)
                {
                    if (model.ID > 0)
                    {
                        string typeName = model.GetType().Name;
                        switch (typeName)
                        {
                            case "CompanyInfo":
                            case "ATTPInfo":
                            case "PlanThamDinh":
                            case "ProductInfo":
                            case "RegisterHarvest":
                                CreateNotificationWithThanhVienThongBaoSub001(model);
                                break;
                        }
                    }

                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

        }
        public void CreateNotificationWithThanhVienThongBaoSub001(T model)
        {
            List<ThanhVienThongBao> listThanhVienThongBao = new List<ThanhVienThongBao>();
            try
            {
                SqlParameter[] parameters =
                {
                            new SqlParameter("@Active",true),
                        };
                DataTable dt = SQLHelper.FillDataTable(GlobalHelper.SQLServerConectionString, "sp_ThanhVienThongBaoSelectItemsByActive", parameters);
                listThanhVienThongBao = SQLHelper.ToList<ThanhVienThongBao>(dt);
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }

            ThanhVienThongBao thanhVienThongBao = new ThanhVienThongBao();
            string folderPath = Path.Combine(GlobalHelper.FTPFull, thanhVienThongBao.GetType().Name);
            bool isFolderExists = System.IO.Directory.Exists(folderPath);
            if (!isFolderExists)
            {
                System.IO.Directory.CreateDirectory(folderPath);
            }
            foreach (ThanhVienThongBao item in listThanhVienThongBao)
            {
                List<ThanhVien> listThanhVien = new List<ThanhVien>();
                try
                {
                    SqlParameter[] parameters =
                    {
                            new SqlParameter("@ID",item.ParentID.Value),
                             };
                    DataTable dt = SQLHelper.FillDataTable(GlobalHelper.SQLServerConectionString, "sp_ThanhVienSelectSingleItemByID", parameters);
                    listThanhVien = SQLHelper.ToList<ThanhVien>(dt);
                }
                catch (Exception ex)
                {
                    string message = ex.Message;
                }
                if (listThanhVien.Count > 0)
                {
                    ThanhVien thanhVien = new ThanhVien();
                    thanhVien = listThanhVien[0];
                    switch (thanhVien.ParentID)
                    {
                        case 1:
                        case 2:
                        case 3:
                            model.Code = model.GetType().Name;
                            CreateNotificationWithThanhVienThongBaoSub(model, item, thanhVienThongBao);
                            break;
                        case 4:
                            if (model.CreatedMembershipID == thanhVien.ID)
                            {
                                model.Code = "CoSo" + model.GetType().Name;
                                CreateNotificationWithThanhVienThongBaoSub(model, item, thanhVienThongBao);
                            }
                            break;
                    }
                }
            }
        }
        public void CreateNotificationWithThanhVienThongBaoSub(T model, ThanhVienThongBao item, ThanhVienThongBao thanhVienThongBao)
        {
            string fileName = item.ParentID + ".json";
            string filePath = Path.Combine(GlobalHelper.FTPFull, thanhVienThongBao.GetType().Name, fileName);
            bool isFileExists = System.IO.File.Exists(filePath);
            if (!isFileExists)
            {
                List<ThanhVienThongBao> listThanhVienThongBaoNew = new List<ThanhVienThongBao>();
                string contentNew = JsonConvert.SerializeObject(listThanhVienThongBaoNew);
                using (FileStream fs = new FileStream(filePath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(contentNew);
                    }
                }
            }
            string content = GlobalHelper.InitializationString;
            try
            {
                using (FileStream fs = new FileStream(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
                {
                    using (StreamReader r = new StreamReader(fs, Encoding.UTF8))
                    {
                        content = r.ReadToEnd();
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
            List<ThanhVienThongBao> listThanhVienThongBao = new List<ThanhVienThongBao>();
            listThanhVienThongBao = JsonConvert.DeserializeObject<List<ThanhVienThongBao>>(content);
            if (listThanhVienThongBao == null)
            {
                listThanhVienThongBao = new List<ThanhVienThongBao>();
            }

            ThanhVienThongBao ThanhVienThongBao = new ThanhVienThongBao();
            ThanhVienThongBao.TypeName = model.GetType().Name;
            ThanhVienThongBao.ID = model.ID;
            ThanhVienThongBao.ParentID = model.ParentID;
            ThanhVienThongBao.LastUpdatedDate = model.LastUpdatedDate;
            ThanhVienThongBao.RowVersion = model.RowVersion;
            ThanhVienThongBao.Code = model.Code;
            ThanhVienThongBao.Name = model.Name;
            if (string.IsNullOrEmpty(ThanhVienThongBao.Name))
            {
                ThanhVienThongBao.Name = ThanhVienThongBao.Code;
            }

            listThanhVienThongBao.Insert(0, ThanhVienThongBao);

            if (listThanhVienThongBao.Count > GlobalHelper.NotificationCount)
            {
                listThanhVienThongBao.RemoveAt(GlobalHelper.NotificationCount);
            }

            content = JsonConvert.SerializeObject(listThanhVienThongBao);
            try
            {
                using (FileStream fs = new FileStream(filePath, FileMode.Create))
                {
                    using (StreamWriter w = new StreamWriter(fs, Encoding.UTF8))
                    {
                        w.WriteLine(content);
                    }
                }
            }
            catch (Exception ex)
            {
                string message = ex.Message;
            }
        }
    }
}
