using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using WebApi.Data.Context;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;

        public UserRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public async Task<User> Authenticate(string userName, string password)
        {
            return await dc.Users.FirstOrDefaultAsync(x => x.Username == userName && x.Password == password);
        }
    }
}
