using Hospital.Models;
using Hospital.Models.DTO;

namespace Hospital.Interfaces
{
    public interface IDoctorServices
    {
        public DoctorUser UpdateStatus(UpdateStatusDTO updateStatus);
        public DoctorUser DoctorRegister(DoctorRegisterDTO user);
        public UserDTO DoctorLogin(UserDTO user);

        public DoctorUser DeleteDoctor(int ID);
        public DoctorUser UpdateDoctor(UserDTO user);
    }
}
