using Hospital.Interfaces;
using Hospital.Models;
using Hospital.Models.DTO;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using Hospital.Services;
using System.Numerics;

namespace Hospital.Services
{
    public class AdminService : IAdminServices
    {
        private readonly IUser<AdminUser, UserDTO> _adminRepo;
        private readonly ITokenGenerate _tokenService;

        public AdminService(IUser<AdminUser, UserDTO> adminRepo,ITokenGenerate tokenGenerate)
        {
            _adminRepo = adminRepo;
            _tokenService = tokenGenerate;
        }

        public UserDTO AdminLogin(UserDTO user)
        {
            var userDTO = new UserDTO();
            var userData = _adminRepo.Get(user.Email);
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
                userDTO.Role = "Admin";
                userDTO.Token = _tokenService.GenerateToken(user);
            }
            return userDTO;
        }

        public AdminUser AdminRegister(AdminRegisterDTO admin)
        {
            AdminUser user = new AdminUser();
            user.Email = admin.Email;
            user.Role = "Admin";
            var hmac = new HMACSHA512();
            user.Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(admin.UserPassword));
            user.HashKey = hmac.Key;
            var resultUser = _adminRepo.Add(user);
            return resultUser;
        }
    }
}
