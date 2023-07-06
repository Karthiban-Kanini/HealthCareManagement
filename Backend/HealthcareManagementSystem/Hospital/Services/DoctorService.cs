using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using Hospital.Services;

namespace Hospital.Services
{
    public class DoctorService : IDoctorServices
    {
        private readonly IUser<DoctorUser, UserDTO> _doctorRepo;
        private readonly ITokenGenerate _tokenService;

        public DoctorService(IUser<DoctorUser, UserDTO> doctorRepo, ITokenGenerate tokenGenerate)
        {
            _doctorRepo = doctorRepo;
            _tokenService = tokenGenerate;
        }

        public DoctorUser DeleteDoctor(int ID)
        {
            var user = _doctorRepo.GetByID(ID);
            if (user == null)
            {
                return null;
            }
            return _doctorRepo.Delete(user);

        }

        public UserDTO DoctorLogin(UserDTO user)
        {
            var userDTO = new UserDTO();
            var userData = _doctorRepo.Get(user.Email);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.HashKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.Password[i])
                        return null;
                }
                userDTO.Email = userData.Email;
                userDTO.Password = user.Password;
                userDTO.Role = "Doctor";
                userDTO.Token = _tokenService.GenerateToken(user);
            }
            return userDTO;
        }

        public DoctorUser DoctorRegister(DoctorRegisterDTO doctor)
        {
            DoctorUser user = new DoctorUser();
            user.ID = doctor.ID;
            user.Name = doctor.Name;
            user.PhoneNumber = doctor.PhoneNumber;
            user.Email = doctor.Email;
            user.Age = doctor.Age;
            user.Gender = doctor.Gender;
            user.DateOfBirth = doctor.DateOfBirth;
            user.Address = doctor.Address;
            user.Specialization = doctor.Specialization;
            user.Experience = doctor.Experience;
            user.MaritalStatus = doctor.MaritalStatus;
            user.BloodGroup = doctor.BloodGroup;
            user.Status = "Pending";
            var hmac = new HMACSHA512();
            user.Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.UserPassword));
            user.HashKey = hmac.Key;
            var resultUser = _doctorRepo.Add(user);
            return resultUser;
        }

        public DoctorUser UpdateDoctor(UserDTO user)
        {
            var users = _doctorRepo.Get(user.Email);
            if (users == null)
            {
                return null;
            }
            return _doctorRepo.Update(users);
        }

        public DoctorUser UpdateStatus(UpdateStatusDTO updateStatus) { 
            return _doctorRepo.Update(updateStatus);
        }
    }
}
