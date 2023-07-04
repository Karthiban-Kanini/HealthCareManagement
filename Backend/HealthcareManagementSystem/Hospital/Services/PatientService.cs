using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using Hospital.Services;

namespace Hospital.Services
{
    public class PatientService : IPatientServices
    {
        private readonly IUser<PatientUser, UserDTO> _patientRepo;
        private readonly ITokenGenerate _tokenService;

        public PatientService(IUser<PatientUser, UserDTO> patientRepo,ITokenGenerate tokenGenerate)
        {
            _patientRepo = patientRepo;
            _tokenService = tokenGenerate;
        }

        public PatientUser DeletePatient(int ID)
        {
            var user = _patientRepo.GetByID(ID);
            if (user == null)
            {
                return null;
            }
            return _patientRepo.Delete(user);
        }

        public UserDTO PatientLogin(UserDTO user)
        {
            var userDTO = new UserDTO();
            var userData = _patientRepo.Get(user.Email);
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
                userDTO.Role = "Patient";
                userDTO.Token = _tokenService.GenerateToken(user);
            }
            return userDTO;
        }

        public PatientUser PatientRegister(PatientRegisterDTO doctor)
        {
            PatientUser user = new PatientUser();
            user.ID = doctor.ID;
            user.Name = doctor.Name;
            user.PhoneNumber = doctor.PhoneNumber;
            user.Email = doctor.Email;
            user.Age = doctor.Age;
            user.Gender = doctor.Gender;
            user.DateOfBirth = doctor.DateOfBirth;
            user.Address = doctor.Address;
            user.MaritalStatus = doctor.MaritalStatus;
            user.BloodGroup = doctor.BloodGroup;
            var hmac = new HMACSHA512();
            user.Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.UserPassword));
            user.HashKey = hmac.Key;
            var resultUser = _patientRepo.Add(user);
            return resultUser;
        }

        public PatientUser UpdatePatient(PatientUser user)
        {
            var users = _patientRepo.GetByID(user.ID);
            if (users == null)
            {
                return null;
            }
            return _patientRepo.Update(users);
        }
    }
}
