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
    public class DoctorRepo : IUser<DoctorUser,UserDTO>
    {
        private readonly UserContext _context;
        public DoctorRepo(UserContext context)
        {
            _context = context;
        }
        public DoctorUser Add(DoctorUser user)
        {
            try
            {
                _context.Doctors.Add(user);
                _context.SaveChanges();
                return user;
            }
            catch(SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        public DoctorUser Delete(DoctorUser user)
        {
            try
            {
                _context.Doctors.Remove(user);
                _context.SaveChanges();
                return user;
            }
            catch (SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        public DoctorUser Get(string Email)
        {
            var users = GetAll();
            var user = users.FirstOrDefault(u => u.Email == Email);

            if (user != null)
            {
                return user;
            }
            return null;
        }

        public DoctorUser GetByID(int ID)
        {
            var users = GetAll();
            DoctorUser user = users.FirstOrDefault(u => u.ID == ID);

            if (user != null)
            {
                return user;
            }
            return null;
        }

        public List<DoctorUser> GetAll()
        {
            var users= _context.Doctors.ToList();
            if(users.Count>0)
                return users;
            return null;
        }

        public DoctorUser Update(UpdateStatusDTO update)
        {
            var users = GetAll();
            var Newuser = users.FirstOrDefault(u => u.Email == update.Email);
            if (Newuser != null)
            {
                Newuser.Status = update.Status;
                _context.Doctors.Update(Newuser);
                _context.SaveChanges();
                return Newuser;
            }
            else
                return null;
        }

        public DoctorUser Update(DoctorUser user)
        {
            var users = GetByID(user.ID);
            if (users == null)
            {
                return null;
            }
            return Update(user);
        }
    }
}
