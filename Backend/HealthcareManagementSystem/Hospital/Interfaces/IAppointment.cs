using Hospital.Models;

namespace Hospital.Interfaces
{
    public interface IAppointment
    {
        public Appointment Add(Appointment appointment);
        public Appointment Get(Appointment appointment);
        public List<Appointment> GetAll();
        public Appointment Update(Appointment appointment);
        public Appointment Delete(Appointment appointment);
        public Appointment GetByID(Appointment appointment);

    }
}
