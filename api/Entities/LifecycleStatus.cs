using System.ComponentModel.DataAnnotations;

namespace p_designer.Entities
{
    public class LifecycleStatus
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Pattern> Patterns { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Library> Libraries { get; set; }  
    }
}