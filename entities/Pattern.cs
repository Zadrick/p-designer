using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.entities
{
    public class Pattern
    {
        public Pattern()
        {
            Aspects = new HashSet<Aspect>();
            Characteristics = new HashSet<Characteristic>();
            Projects = new HashSet<Project>();
        }

        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(LifecycleStatus))]
        public int LifecycleStatusId { get; set; }
        [Required]
        public string Name { get; set; }
        public double ProjectValueMax { get; set; }
        public double ProjectValueMin { get; set; }
        public double ProjectValueTarget { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<Characteristic> Characteristics { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<Aspect> Aspects { get; set; }
    }
}
