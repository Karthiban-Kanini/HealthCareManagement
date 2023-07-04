using System.ComponentModel.DataAnnotations.Schema;

namespace Hospital.Models
{
    public class Appointment
    {
        public int ID { get; set; }

        [ForeignKey("DoctorUser")]
        public int DoctorID { get; set; }

        [ForeignKey("PatientUser")]
        public int PatientID { get; set; }
        public DateTime AppointmentDate { get; set; }
    }
}
