using p_designer.models;
using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Pattern
    {
        public Pattern()
        {
            Aspects = new HashSet<AspectEnum>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double ProjectValueMax { get; set; }
        public double ProjectValueMin { get; set; }
        public double ProjectValueTarget { get; set; }
        [Required]
        public LifecycleStatusEnum LifecycleStatus { get; set; }
        public ICollection<AspectEnum> Aspects { get; set; }
    }
}
