using App.Web.Areas.Admin.ViewModels.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Web.Services.AppUser
{
    public interface IAccountService
    {
        Task<UpdateUserViewModel> GetUserById(int? id);
        Task UpdateUser(AcceptUpdateViewModel data);
    }
}
