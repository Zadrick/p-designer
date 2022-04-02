using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class Pattern
    {
        public Pattern()
        {
            AspectLevels = new HashSet<AspectLevel>();
            Characteristics = new HashSet<Criteria>();
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
        public ICollection<Criteria> Characteristics { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<AspectLevel> AspectLevels { get; set; }
    }
}