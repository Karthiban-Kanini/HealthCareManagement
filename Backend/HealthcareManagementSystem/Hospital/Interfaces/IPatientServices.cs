using Hospital.Models.DTO;
using Hospital.Models;

namespace Hospital.Interfaces
{
    public interface IPatientServices
    {
        public PatientUser PatientRegister(PatientRegisterDTO user);

        public UserDTO PatientLogin(UserDTO user);

        public PatientUser DeletePatient(int ID);
        public PatientUser UpdatePatient(PatientUser user);
    }
}
