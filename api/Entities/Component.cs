using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class Component
    {
        public Component()
        {
            AttributeValues = new HashSet<AttributeValue>();
            Projects = new HashSet<Project>();
        }

        [Key]
        public int Id { get; set; }

        [ForeignKey(nameof(LifecycleStatus))]
        public int LifeCycleStatusId { get; set; }

        [ForeignKey(nameof(ComponentType))]
        public int? ComponentTypeId { get; set; }

        [ForeignKey(nameof(Library))]
        public int LibraryId { get; set; }

        [ForeignKey(nameof(AspectLevel))]
        public int CategoryId { get; set; }

        [Required]
        public string Name { get; set; }

        public ComponentType ComponentType { get; set; } // Тип должен содержаться в библиотеке
        public Library Library { get; set; }
        public AspectLevel Category { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<AttributeValue> AttributeValues { get; set; }
        // public ICollection<ComponentLevel> ComponentLevels { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}