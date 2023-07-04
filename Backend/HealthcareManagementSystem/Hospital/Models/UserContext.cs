using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Hospital.Models;
using System.Security.Cryptography;
using System.Text;
using Hospital.Interfaces;

namespace Hospital.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<DoctorUser> Doctors { get; set; }
        public DbSet<PatientUser> Patients { get; set; }
        public DbSet<AdminUser> Admins { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
    }
}
