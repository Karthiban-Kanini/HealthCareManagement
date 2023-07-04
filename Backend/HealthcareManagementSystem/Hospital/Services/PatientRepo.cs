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
    public class PatientRepo : IUser<PatientUser,UserDTO>
    {
        private readonly UserContext _context;
        public PatientRepo(UserContext context)
        {
            _context = context;
        }
        public PatientUser Add(PatientUser user)
        {
            try
            {
                _context.Patients.Add(user);
                _context.SaveChanges();
                return user;
            }
            catch(SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        public PatientUser Delete(PatientUser user)
        {
            try
            {
                _context.Patients.Remove(user);
                _context.SaveChanges();
                return user;
            }
            catch (SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        public PatientUser Get(string Email)
        {
            var users = GetAll();
            var user = users.FirstOrDefault(u => u.Email == Email);

            if (user != null)
            {
                return user;
            }
            return null;
        }

        public List<PatientUser> GetAll()
        {
            var users= _context.Patients.ToList();
            if(users.Count>0)
                return users;
            return null;
        }

        public PatientUser GetByID(int ID)
        {
            var users = GetAll();
            PatientUser user = users.FirstOrDefault(u => u.ID == ID);
            if (user != null)
            {
                return user;
            }
            return null;
        }

        public PatientUser Update(UpdateStatusDTO update)
        {
            throw new NotImplementedException();
        }

        public PatientUser Update(PatientUser user)
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
