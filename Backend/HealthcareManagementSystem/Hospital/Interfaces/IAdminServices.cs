using Hospital.Models.DTO;
using Hospital.Models;

namespace Hospital.Interfaces
{
    public interface IAdminServices
    {
        public AdminUser AdminRegister(AdminRegisterDTO user);
        public UserDTO AdminLogin(UserDTO user);
    }
}
