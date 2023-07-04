using Microsoft.Data.SqlClient;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using Hospital.Models;
using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Hospital.Services
{
    public class AppointmentRepo : IAppointment
    {
        private readonly UserContext _context;
        public AppointmentRepo(UserContext context)
        {
            _context = context;
        }
        public Appointment Add(Appointment appointment)
        {
            try
            {
                _context.Appointments.Add(appointment);
                _context.SaveChanges();
                return appointment;
            }
            catch(SqlException se) { Debug.WriteLine(se.Message); }
            return null;
        }

        //public Appointment Delete(Appointment appointment)
        //{
        //    try
        //    {
        //        _context.Appointments.Remove(appointment);
        //        _context.SaveChanges();
        //        return appointment;
        //    }
        //    catch(SqlException se) { Debug.WriteLine(se.Message); }
        //    return null;
        //    }

        public Appointment Delete(Appointment appointment)
        {
            try
            {
                var trackedAppointment = _context.Appointments.Find(appointment.ID);
                if (trackedAppointment != null)
                {
                    _context.Appointments.Remove(trackedAppointment);
                    _context.SaveChanges();
                    return trackedAppointment;
                }
                else
                {
                    Debug.WriteLine("Appointment not found in the context.");
                }
            }
            catch (DbUpdateException ex)
            {
                Debug.WriteLine($"Error occurred while deleting the appointment: {ex.Message}");
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"An error occurred while deleting the appointment: {ex.Message}");
            }

            return null;
        }

        public Appointment Get(Appointment appointment)
        {
            var users = GetAll();
            if (users == null)
            {
                return null;
            }
            var user = users.FirstOrDefault(u => u.DoctorID == appointment.DoctorID && u.PatientID == appointment.PatientID && u.AppointmentDate == appointment.AppointmentDate);
            if (user != null)
            {
                return user;
            }
            return null;
        }

        public Appointment GetByID(Appointment appointment)
        {
            var users = GetAll();
            if (users == null)
            {
                return null;
            }
            var user = users.FirstOrDefault(u => u.ID == appointment.ID);
            if (user != null)
            {
                return user;
            }
            return null;
        }

        public List<Appointment> GetAll()
        {
            var users= _context.Appointments.ToList();
            if(users.Count>0)
                return users;
            return null;
        }

        public Appointment Update(Appointment appointment)
        {
            var users = GetAll();
            var Newuser = users.FirstOrDefault(u => u.ID == appointment.ID);
            if (Newuser != null)
            {
                Newuser.DoctorID = appointment.DoctorID;
                Newuser.PatientID = appointment.PatientID;
                Newuser.AppointmentDate = appointment.AppointmentDate;
                _context.Appointments.Update(Newuser);
                _context.SaveChanges();
                return Newuser;
            }
            else
                return null;
        }
    }
}
