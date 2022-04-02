using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class Component
    {
        public Component()
        {
            AttributeValues = new HashSet<AttributeValue>();
            Aspects = new HashSet<AspectLevel>();
            ComponentLevels = new HashSet<ComponentLevel>();
            Libraries = new HashSet<Library>();
            Projects = new HashSet<Project>();
        }

        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(LifecycleStatus))]
        public int LifeCycleStatusId { get; set; }
        [Required]
        public string Name { get; set; }
        public ComponentType Type { get; set; } // Тип, который содержится в библиотеке
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<AttributeValue> AttributeValues { get; set; }
        public ICollection<AspectLevel> Aspects { get; set; }
        public ICollection<ComponentLevel> ComponentLevels { get; set; }
        public ICollection<Library> Libraries { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}