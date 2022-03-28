using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class LifecycleStatus
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Pattern> Patterns { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}