using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Pattern
    {
        public Pattern()
        {
            Aspects = new HashSet<Aspect>();
            Characteristics = new HashSet<Characteristic>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public double ProjectValueMax { get; set; }
        public double ProjectValueMin { get; set; }
        public double ProjectValueTarget { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<Characteristic> Characteristics { get; set; }
        public ICollection<Aspect> Aspects { get; set; }
    }
}
