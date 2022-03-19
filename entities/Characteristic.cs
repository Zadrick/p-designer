using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.entities
{
    public class Characteristic
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Pattern))]
        public int PatternId { get; set; }
        [Required]
        public string Name { get; set; }
        public double MinValue { get; set; }
        public double? MaxValue { get; set; }
        public double TargetValue { get; set; }
        public bool IsMinimization { get; set; }
        public PropertyValue Property { get; set; }
        public Pattern Pattern { get; set; }
    }
}
