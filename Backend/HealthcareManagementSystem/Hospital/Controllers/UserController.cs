using Hospital.Exceptions;
using Hospital.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Hospital.Models.DTO;
using Hospital.Interfaces;
using System.Data;
using Microsoft.AspNetCore.Authorization;
using System.Diagnostics;
using Microsoft.AspNetCore.Cors;

namespace User.Controllers
{
    

    [Route("api/[controller]/[action]")]

    [ApiController]
    [EnableCors("MyCors")]

    public class UserController : ControllerBase
    {
        private readonly IUser<DoctorUser, UserDTO> _user;
        private readonly IDoctorServices _doctor;
        private readonly IPatientServices _patient;
        private readonly IAdminServices _admin;
        private readonly IUser<DoctorUser, UserDTO> _doctorUser;
        private readonly IUser<PatientUser, UserDTO> _patientUser;
        private readonly IAppointmentServices _appointnemt;


        public UserController(IUser<DoctorUser,UserDTO> user,IDoctorServices doctor,IPatientServices patient,IAdminServices admin, IUser<DoctorUser, UserDTO> doctorUser, IUser<PatientUser,UserDTO> patientUser, IAppointmentServices appointment)
        {
            _user = user;
            _doctor = doctor;
            _patient = patient;
            _admin = admin;
            _doctorUser = doctorUser;
            _patientUser = patientUser;
            _appointnemt = appointment;
        }

        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut]
        //[Authorize(Roles = "Admin")]  

        public ActionResult<String>DoctorStatusChange(UpdateStatusDTO updateStatus)
        {
            try
            {
                DoctorUser doctor = _user.Get(updateStatus.Email);
                if (doctor == null)
                {
                    return NotFound(new Error(3, "Doctor not Found").Message);
                }
                DoctorUser user = _doctor.UpdateStatus(updateStatus);
                if (user == null)
                {
                    return NotFound(new Error(3, "Doctor Status Unchanged").Message);
                }
                return Ok(doctor);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch(Exception ex) { 
                return BadRequest(new Error(2, ex.Message).Message);   
            } 
        }

        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]  
        public ActionResult<String>RegisterDoctor(DoctorRegisterDTO doctor)
        {
            try
            {
                DoctorUser user = _doctor.DoctorRegister(doctor);
                if (user == null)
                {
                    return NotFound(new Error(3, "Doctor not added").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(PatientUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]  
        public ActionResult<String> RegisterPatient(PatientRegisterDTO doctor)
        {
            try
            {
                PatientUser user = _patient.PatientRegister(doctor);
                if (user == null)
                {
                    return NotFound(new Error(3, "Patient not added").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)    
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]  
        public ActionResult<String> LoginPatient(UserDTO userDTO)
        {
            try
            {
                UserDTO user = _patient.PatientLogin(userDTO);
                if (user == null)
                {
                    return NotFound(new Error(3, "Sorry not logged in").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]  
        public ActionResult<String> LoginDoctor(UserDTO userDTO)
        {
            try
            {
                UserDTO user = _doctor.DoctorLogin(userDTO);
                if (user == null)
                {
                    return NotFound(new Error(3, "Sorry not logged in").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(AdminUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]
        public ActionResult<String> RegisterAdmin(AdminRegisterDTO admin)
        {
            try
            {
                AdminUser user = _admin.AdminRegister(admin);
                if (user == null)
                {
                    return NotFound(new Error(3, "Admin not added").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]  
        public ActionResult<String> LoginAdmin(UserDTO userDTO)
        {
            try
            {
                UserDTO user = _admin.AdminLogin(userDTO);
                if (user == null)
                {
                    return NotFound(new Error(3, "Sorry not logged in").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }


        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]

        public ActionResult<List<DoctorUser>> GetDoctor()
        {
            try
            {
                List<DoctorUser> doctor = _doctorUser.GetAll();
                if (doctor == null)
                {
                    return NotFound(new Error(3, "Doctor not Found").Message);
                }
                return Ok(doctor);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }


        [ProducesResponseType(typeof(PatientUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]

        public ActionResult<PatientUser> GetPatient()
        {
            try
            {
                List<PatientUser> patient = _patientUser.GetAll();
                if (patient == null)
                {
                    return NotFound(new Error(3, "Patient not Found").Message);
                }
                return Ok(patient);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(PatientUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]

        public ActionResult<PatientUser> GetPatientById(string email)
        {
            try
            {
                PatientUser patient = _patientUser.Get(email);
                if (patient == null)
                {
                    return NotFound(new Error(3, "Patient not Found").Message);
                }
                return Ok(patient);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]

        public ActionResult<DoctorUser> GetDoctorById(string email)
        {
            try
            {
                DoctorUser doctor = _doctorUser.Get(email);
                if (doctor == null)
                {
                    return NotFound(new Error(3, "Doctor not Found").Message);
                }
                return Ok(doctor);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPost]
        //[Authorize(Roles = "staff")]
        public ActionResult<String> AddAppointment(Appointment appointment)
        {
            try
            {
                Appointment user = _appointnemt.AddAppointment(appointment);
                if (user == null)
                {
                    return NotFound(new Error(3, "Appiointment not Booked").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpDelete]
        //[Authorize(Roles = "staff")]
        public ActionResult<String> CancelAppointment(Appointment appointment)
        {
            try
            {
                Appointment user = _appointnemt.CancelAppointment(appointment);
                if (user == null)
                {
                    return NotFound(new Error(3, "Appiointment not Cancelled").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }


        [ProducesResponseType(typeof(Appointment), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut]
        //[Authorize(Roles = "staff")]
        public ActionResult<String> UpdateAppointment(Appointment appointment)
        {
            try
            {
                Appointment user = _appointnemt.UpdateAppointment(appointment);
                if (user == null)
                {
                    return NotFound(new Error(3, "Appiointment not Updated").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(List<DoctorUser>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]
        //[Authorize(Roles = "staff")]
        public ActionResult<List<DoctorUser>> GetAllDoctor()
        {
            try
            {
                List<DoctorUser> user = _doctorUser.GetAll();
                if (user == null)
                {
                    return NotFound(new Error(3, "Doctor not Found").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(List<PatientUser>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet]
        //[Authorize(Roles = "staff")]
        public ActionResult<List<DoctorUser>> GetAllPatient()
        {
            try
            {
                List<PatientUser> user = _patientUser.GetAll();
                if (user == null)
                {
                    return NotFound(new Error(3, "Patients not Found").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpDelete]
        //[Authorize(Roles = "staff")]
        public ActionResult<DoctorUser> DeleteDoctor(int ID)
        {
            try
            {
                DoctorUser user = _doctor.DeleteDoctor(ID);
                if (user == null)
                {
                    return NotFound(new Error(3, "Doctor not Deleted").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(PatientUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpDelete]
        //[Authorize(Roles = "staff")]
        public ActionResult<PatientUser> DeletePatient(int ID)
        {
            try
            {
                PatientUser user = _patient.DeletePatient(ID);
                if (user == null)
                {
                    return NotFound(new Error(3, "Patient not Deleted").Message);
                }
                return Ok(user);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(PatientUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut]
        public ActionResult<PatientUser> UpdatePatient(PatientUser user)
        {
            try
            {
                PatientUser users = _patient.UpdatePatient(user);
                if (users == null)
                {
                    return NotFound(new Error(3, "Patient not Updated").Message);
                }
                return Ok(users);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

        [ProducesResponseType(typeof(DoctorUser), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpPut]
        public ActionResult<DoctorUser> UpdateDoctor(UserDTO user)
        {
            try
            {
                DoctorUser users = _doctor.UpdateDoctor(user);
                if (users == null)
                {
                    return NotFound(new Error(3, "Doctor not Updated").Message);
                }
                return Ok(users);
            }
            catch (InvalidSqlException ise)
            {
                return BadRequest(new Error(1, ise.Message).Message);
            }
            catch (Exception ex)
            {
                return BadRequest(new Error(2, ex.Message).Message);
            }
        }

    }
}
