using Hospital.Models.DTO;

namespace Hospital.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
