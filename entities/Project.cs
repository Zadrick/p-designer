using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.entities
{
    public class Project
    {
        public Project()
        {
            Components = new HashSet<Component>();
            Libraries = new HashSet<Library>();
            ValidationStatuses = new HashSet<ValidationStatus>();
        }

        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Pattern))]
        public int PatternId { get; set; }
        [Required]
        public string Name { get; set; }
        public double Value { get; set; }
        public double Rating { get; set; }
        public int Cost { get; set; }
        public Pattern Pattern { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<ValidationStatus> ValidationStatuses { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Library> Libraries { get; set; }
    }
}
