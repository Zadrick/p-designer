using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Pattern
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double MaxProjectValue { get; set; }
        public double MinProjectValue { get; set; }
        public double SenseProjectValue { get; set; }
    }
}
