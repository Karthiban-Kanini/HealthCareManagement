using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using Hospital.Services;
using System.Numerics;
using System.Diagnostics;

namespace Hospital.Services
{
    public class AppointmentService : IAppointmentServices
    {
        private readonly IAppointment _appointment;

        public AppointmentService(IAppointment appointment)
        {
            _appointment = appointment;
        }

        public Appointment AddAppointment(Appointment appointment)
        {
            var appointments = new Appointment();
            appointments = _appointment.Get(appointment);
            if (appointments == null)
            {
                appointments = _appointment.Add(appointment);
                return appointments;
            }
            return null;
        }

        public Appointment CancelAppointment(Appointment appointment)
        {
            var appointments = new Appointment();
            appointments = _appointment.Get(appointment);
            if (appointments != null)
            {
                appointments = _appointment.Delete(appointment);
                return appointments;
            }
            return null;
        }

        public Appointment UpdateAppointment(Appointment appointment)
        {
            var appointments = new Appointment();
            appointments = _appointment.GetByID(appointment);
            if (appointments != null)
            {
                appointments = _appointment.Update(appointment);
                return appointments;
            }
            return null;
        }
    }
}
