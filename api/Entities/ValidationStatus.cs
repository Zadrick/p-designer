using System.ComponentModel.DataAnnotations;

namespace p_designer.Entities
{
    public class ValidationStatus
    {
        [Key]
        public int Id { get; set; }
        public double Value { get; set; }
        public bool IsValid { get; set; }
        public Criteria Characteristic { get; set; }
        public Project Project { get; set; }

    }
}