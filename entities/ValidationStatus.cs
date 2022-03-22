using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class ValidationStatus
    {
        [Key]
        public int Id { get; set; }
        public double Value { get; set; }
        public bool IsValid { get; set; }
        public Characteristic Characteristic { get; set; }
        public Project Project { get; set; }

    }
}
