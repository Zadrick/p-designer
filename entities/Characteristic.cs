using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Characteristic
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double MinValue { get; set; }
        public double? MaxValue { get; set; }
        public double TargetValue { get; set; }
        public bool IsMinimization { get; set; }
        public Property Property { get; set; }
    }
}
