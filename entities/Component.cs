using p_designer.models;
using System.ComponentModel.DataAnnotations;

namespace p_designer.entities
{
    public class Component
    {
        public Component()
        {
            Properties = new HashSet<Property>();
            Aspects = new HashSet<AspectEnum>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public LifecycleStatusEnum LifecycleStatus { get; set; }
        public ICollection<Property> Properties { get; set; }
        public ICollection<AspectEnum> Aspects { get; set; }
    }  
}
