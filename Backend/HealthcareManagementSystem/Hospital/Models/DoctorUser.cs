using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital.Models
{
    public class DoctorUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public byte[]? Password { get; set; }
        public byte[]? HashKey { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public String Gender { get; set; }
        public string Address { get; set; }
        public String Specialization { get; set; }
        public string Experience { get; set; }
        public string MaritalStatus { get; set; }
        public string BloodGroup { get; set; }
        public string? Status { get; set;}
    }
}
