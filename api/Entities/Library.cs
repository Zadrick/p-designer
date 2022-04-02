using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace p_designer.Entities
{
    public class Library
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(LifecycleStatus))]
        public int LifecycleStatusId { get; set; }
        public string Name { get; set; }
        public LifecycleStatus LifecycleStatus { get; set; }
        public ICollection<ComponentType> ComponentTypes { get; set; }
        public ICollection<Component> Components { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}