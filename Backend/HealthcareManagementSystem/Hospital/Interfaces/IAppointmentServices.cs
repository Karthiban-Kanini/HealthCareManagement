using Hospital.Models.DTO;
using Hospital.Models;

namespace Hospital.Interfaces
{
    public interface IAppointmentServices
    {
        public Appointment AddAppointment(Appointment appointment);
        public Appointment CancelAppointment(Appointment appointment);
        public Appointment UpdateAppointment(Appointment appointment);
    }
}
