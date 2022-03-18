using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Component
    {
        public Component()
        {
            Properties = new HashSet<PropertyValue>();
            Aspects = new HashSet<AspectLevel>();
            ComponentLevels = new HashSet<ComponentLevel>();
            Libraries = new HashSet<Library>();
            Projects = new HashSet<Project>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<PropertyValue> Properties { get; set; }
        public ICollection<AspectLevel> Aspects { get; set; }
        public ICollection<ComponentLevel> ComponentLevels { get; set; }
        public ICollection<Library> Libraries { get; set; }
        public ICollection<Project> Projects { get; set; }
    }  
}
