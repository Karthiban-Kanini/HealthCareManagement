using Microsoft.Data.SqlClient;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using Hospital.Models;
using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;

namespace Hospital.Services
{
    public class AdminRepo : IUser<AdminUser,UserDTO>
    {
        private readonly UserContext _context;
        public AdminRepo(UserContext context)
        {
            _context = context;
        }
        public AdminUser Add(AdminUser user)
        {
            try
            {
                _context.Admins.Add(user);
                _context.SaveChanges();
                return user;
            }
            catch(SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        public AdminUser Delete(AdminUser user)
        {
            throw new NotImplementedException();
        }

        public AdminUser Get(string Email)
        {
            var users = GetAll();
            var user = users.FirstOrDefault(u => u.Email == Email);

            if (user != null)
            {
                return user;
            }
            return null;
        }

        public List<AdminUser> GetAll()
        {
            var users= _context.Admins.ToList();
            if(users.Count>0)
                return users;
            return null;
        }

        public AdminUser GetByID(int ID)
        {
            throw new NotImplementedException();
        }

        public AdminUser Update(UpdateStatusDTO update)
        {
            throw new NotImplementedException();
        }

        public AdminUser Update(AdminUser user)
        {
            throw new NotImplementedException();
        }
    }
}
