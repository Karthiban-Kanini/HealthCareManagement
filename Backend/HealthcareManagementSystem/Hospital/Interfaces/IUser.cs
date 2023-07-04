using Hospital.Models;
using Hospital.Models.DTO;

namespace Hospital.Interfaces
{
    public interface IUser<K,T>
    {
        K Add(K user);
        K Update(UpdateStatusDTO update);
        K Update (K user);
        K Delete(K user);
        K Get(string Email);
        K GetByID(int ID);
        List<K> GetAll();
    }
}
