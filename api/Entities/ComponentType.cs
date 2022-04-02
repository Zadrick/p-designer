using System.ComponentModel.DataAnnotations;

namespace p_designer.Entities
{
    public class ComponentType
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Component> Components { get; set; }
    }
}
